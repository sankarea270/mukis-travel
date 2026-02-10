import { useEffect, useMemo, useRef, useState } from "react";

type TrailPoint = {
  x: number;
  y: number;
  timestamp: number;
};

const MAX_POINTS = 120;
const FADE_MS = 820;

export function AirplaneTrail() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [points, setPoints] = useState<TrailPoint[]>([]);
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleMove = (event: PointerEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const rawX = ((event.clientX - rect.left) / rect.width) * 100;
      const rawY = ((event.clientY - rect.top) / rect.height) * 100;
      if (!Number.isFinite(rawX) || !Number.isFinite(rawY)) return;

      const clamp = (value: number) => Math.min(115, Math.max(-15, value));
      const x = clamp(rawX);
      const y = clamp(rawY);
      const now = typeof performance !== "undefined" ? performance.now() : Date.now();

      setPoints((prev) => {
        const filtered = prev.filter((point) => now - point.timestamp < FADE_MS);
        filtered.push({ x, y, timestamp: now });
        if (filtered.length > MAX_POINTS) {
          filtered.splice(0, filtered.length - MAX_POINTS);
        }
        return filtered;
      });
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (points.length === 0) return;

    let rafId: number;
    const tick = () => {
      setFrame((value) => (value + 1) % Number.MAX_SAFE_INTEGER);
      rafId = window.requestAnimationFrame(tick);
    };

    rafId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(rafId);
  }, [points.length]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (points.length === 0) return;

    const interval = window.setInterval(() => {
      const now = typeof performance !== "undefined" ? performance.now() : Date.now();
      setPoints((prev) => {
        const filtered = prev.filter((point) => now - point.timestamp < FADE_MS);
        return filtered.length === prev.length ? prev : filtered;
      });
    }, 120);

    return () => window.clearInterval(interval);
  }, [points.length]);

  const segments = useMemo(() => {
    if (points.length < 2) return [] as Array<{
      d: string;
      opacity: number;
      width: number;
      glowWidth: number;
    }>;

    const now = typeof performance !== "undefined" ? performance.now() : Date.now();

    const controlPoint = (
      current: TrailPoint,
      previous: TrailPoint,
      next: TrailPoint,
      reverse = false
    ) => {
      const smoothing = 0.18;
      const p = previous ?? current;
      const n = next ?? current;
      const angle = Math.atan2(n.y - p.y, n.x - p.x) + (reverse ? Math.PI : 0);
      const length = Math.sqrt((n.x - p.x) ** 2 + (n.y - p.y) ** 2) * smoothing;
      return {
        x: current.x + Math.cos(angle) * length,
        y: current.y + Math.sin(angle) * length,
      };
    };

    return points.slice(1).map((point, index) => {
      const previous = points[index];
      const prevPrev = points[index - 1] ?? previous;
      const nextPoint = points[index + 2] ?? point;

      const age = Math.min((now - point.timestamp) / FADE_MS, 1);
      const opacity = Math.max(1 - age * 1.04, 0);
      const width = 0.35 + (1 - age) * 0.46;
      const glowWidth = width * 3.4;

      const start = controlPoint(previous, prevPrev, point, false);
      const end = controlPoint(point, previous, nextPoint, true);
      const d = `M ${previous.x} ${previous.y} C ${start.x} ${start.y} ${end.x} ${end.y} ${point.x} ${point.y}`;

      return { d, opacity, width, glowWidth };
    });
  }, [points, frame]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden"
      style={{ zIndex: 40 }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="cursorTrailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a7f3d0" stopOpacity="0.95" />
            <stop offset="65%" stopColor="#34d399" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#059669" stopOpacity="0.5" />
          </linearGradient>
          <filter id="cursorTrailBlur" x="-15%" y="-15%" width="130%" height="130%">
            <feGaussianBlur stdDeviation="0.65" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {segments.map((segment, index) => (
          <g key={index}>
            <path
              d={segment.d}
              stroke="url(#cursorTrailGradient)"
              strokeWidth={segment.glowWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={segment.opacity * 0.4}
              filter="url(#cursorTrailBlur)"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d={segment.d}
              stroke="url(#cursorTrailGradient)"
              strokeWidth={segment.width}
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={segment.opacity}
              vectorEffect="non-scaling-stroke"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
