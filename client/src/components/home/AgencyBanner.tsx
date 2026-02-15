import { motion } from "framer-motion";

/* ─── Floating Cloud ─── */
function Cloud({ size, top, delay, duration, direction }: {
  size: number; top: string; delay: number; duration: number; direction: 1 | -1;
}) {
  return (
    <motion.div
      className="absolute opacity-[0.11] pointer-events-none blur-[0.25px]"
      style={{ top, [direction === 1 ? "left" : "right"]: "-10%" }}
      animate={{ x: direction === 1 ? ["0%", "120vw"] : ["0%", "-120vw"] }}
      transition={{ duration, repeat: Infinity, delay, ease: "linear" }}
    >
      <svg width={size} height={size * 0.55} viewBox="0 0 200 110" fill="white">
        <ellipse cx="60" cy="70" rx="60" ry="40" />
        <ellipse cx="100" cy="50" rx="50" ry="35" />
        <ellipse cx="140" cy="65" rx="55" ry="38" />
        <ellipse cx="90" cy="80" rx="70" ry="30" />
      </svg>
    </motion.div>
  );
}

/* ─── Twinkling Star ─── */
function Star({ x, y, delay, size }: { x: string; y: string; delay: number; size: number }) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: x, top: y }}
      animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
      transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay, ease: "easeInOut" }}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" fill="white">
        <path d="M12 0L14.59 8.41L23 12L14.59 15.59L12 24L9.41 15.59L1 12L9.41 8.41Z" />
      </svg>
    </motion.div>
  );
}

/* ─── Stars Data ─── */
const starsData = [
  { x: "8%", y: "15%", delay: 0, size: 10 },
  { x: "18%", y: "60%", delay: 1.2, size: 8 },
  { x: "30%", y: "25%", delay: 0.5, size: 12 },
  { x: "45%", y: "75%", delay: 2, size: 7 },
  { x: "55%", y: "10%", delay: 0.8, size: 9 },
  { x: "65%", y: "55%", delay: 1.5, size: 11 },
  { x: "78%", y: "20%", delay: 0.3, size: 8 },
  { x: "85%", y: "70%", delay: 1.8, size: 10 },
  { x: "92%", y: "35%", delay: 2.2, size: 7 },
  { x: "12%", y: "80%", delay: 1, size: 9 },
  { x: "40%", y: "45%", delay: 2.5, size: 6 },
  { x: "72%", y: "85%", delay: 0.7, size: 8 },
];

/* ─── Text Stagger Variants ─── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: -60, rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: "spring" as const, stiffness: 120, damping: 12 },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
  }),
};

export function AgencyBanner() {
  const mukisLetters = "MUKIS".split("");

  return (
    <section
      className="relative -mt-1 py-14 md:py-20 overflow-hidden select-none"
    >
      {/* ── Animated gradient background ── */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          background: [
            "linear-gradient(135deg, #0f766e 0%, #0d9488 30%, #0f9a8d 65%, #0b7a6f 100%)",
            "linear-gradient(135deg, #0d8c80 0%, #0f766e 35%, #0a8f83 70%, #0b7a6f 100%)",
            "linear-gradient(135deg, #0b7a6f 0%, #0d9488 35%, #0f766e 70%, #0d8c80 100%)",
            "linear-gradient(135deg, #0f766e 0%, #0d9488 30%, #0f9a8d 65%, #0b7a6f 100%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── Dot pattern overlay ── */}
      <div
        className="absolute inset-0 z-1 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* ── Clouds ── */}
      <Cloud size={160} top="5%" delay={0} duration={30} direction={1} />
      <Cloud size={120} top="50%" delay={8} duration={35} direction={-1} />
      <Cloud size={100} top="75%" delay={15} duration={28} direction={1} />
      <Cloud size={140} top="20%" delay={5} duration={32} direction={-1} />

      {/* ── Stars ── */}
      {starsData.map((s, i) => (
        <Star key={i} {...s} />
      ))}

      {/* ── Glassmorphism Card ── */}
      <div className="relative z-10 container mx-auto px-4 flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white/6 backdrop-blur-md rounded-3xl px-8 py-10 md:px-20 md:py-16 shadow-none max-w-5xl w-full text-center relative overflow-hidden"
        >
          {/* Inner glow */}
          <div className="absolute -top-16 -left-16 w-48 h-48 bg-white/6 rounded-full blur-3xl" />
          <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-teal-200/8 rounded-full blur-3xl" />

          {/* ── MUKIS — Sequential falling letters ── */}
          <motion.div
            className="flex justify-center gap-1 md:gap-3 mb-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {mukisLetters.map((letter, i) => (
              <motion.span
                key={i}
                variants={letterVariants}
                className="font-serif font-semibold text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white drop-shadow-[0_6px_28px_rgba(0,0,0,0.32)] tracking-[0.12em]"
                style={{ display: "inline-block" }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>

          {/* ── Pulsing decorative line ── */}
          <motion.div
            className="mx-auto mb-5 h-0.75 rounded-full bg-linear-to-r from-transparent via-white to-transparent"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "70%", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="h-full w-full rounded-full bg-linear-to-r from-transparent via-white/80 to-transparent"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* ── Travel Agency subtitle ── */}
          <motion.p
            className="text-white/90 text-xl md:text-2xl lg:text-3xl font-serif tracking-[0.28em] uppercase"
            variants={fadeUpVariant}
            custom={1.2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Travel Agency
          </motion.p>

          {/* ── Tagline ── */}
          <motion.p
            className="text-white/60 text-sm md:text-base mt-4 tracking-wider"
            variants={fadeUpVariant}
            custom={1.6}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            ✦ Tu próxima aventura comienza aquí ✦
          </motion.p>
        </motion.div>
      </div>

      {/* ── Bottom floating particles ── */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`p-${i}`}
          className="absolute w-1.5 h-1.5 bg-white/20 rounded-full pointer-events-none"
          style={{ left: `${10 + i * 12}%`, bottom: "10%" }}
          animate={{ y: [0, -40, 0], opacity: [0.2, 0.7, 0.2] }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
        />
      ))}
    </section>
  );
}
