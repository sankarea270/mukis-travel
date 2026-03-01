import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

/**
 * Splits title into base + accent word.
 * If `highlight` is provided, that word is used as accent.
 * Otherwise the last word of `text` becomes the accent.
 */
const splitTitle = (text: string, highlight?: string) => {
  if (highlight) {
    const idx = text.toLowerCase().lastIndexOf(highlight.toLowerCase());
    if (idx !== -1) {
      const before = text.slice(0, idx).trim();
      const accent = text.slice(idx, idx + highlight.length);
      const after = text.slice(idx + highlight.length).trim();
      return { before, accent, after };
    }
  }
  // fallback: last word
  const words = text.trim().split(/\s+/);
  if (words.length <= 1) return { before: "", accent: text, after: "" };
  const accent = words.pop() ?? "";
  return { before: words.join(" "), accent, after: "" };
};

type DynamicTitleProps = {
  as?: "h1" | "h2" | "h3" | "h4";
  text: string;
  /** Optional: which word(s) in `text` to highlight as accent */
  highlight?: string;
  className?: string;
  accentClassName?: string;
  /** Light variant for dark backgrounds */
  light?: boolean;
};

const textVariants = {
  hidden: { opacity: 0, y: 26, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const lineVariants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay: 0.2 },
  },
};

export function DynamicTitle({
  as = "h2",
  text,
  highlight,
  className,
  accentClassName,
  light = false,
}: DynamicTitleProps) {
  const Tag = as;
  const { before, accent, after } = splitTitle(text, highlight);

  return (
    <Tag className={cn("title-dynamic", light && "title-dynamic--light", className)}>
      <motion.span
        className="title-dynamic__text"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {before ? `${before} ` : null}
        {accent ? (
          <span className={cn("title-dynamic__accent", accentClassName)}>{accent}</span>
        ) : null}
        {after ? ` ${after}` : null}
      </motion.span>
      <motion.span
        className="title-dynamic__line"
        variants={lineVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        aria-hidden
      />
    </Tag>
  );
}
