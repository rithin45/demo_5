import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-obsidian"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeOut" } }}
    >
      <div className="relative flex flex-col items-center gap-6">
        <div className="absolute h-36 w-36 rounded-full bg-sage/20 blur-3xl" />
        <motion.div
          className="relative rounded-full border border-ink/10 bg-white/70 px-5 py-2 text-[0.7rem] uppercase tracking-[0.45em] text-ink/70"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Astra Nova 2026
        </motion.div>

        <div className="space-y-3 text-center">
          <motion.h1
            className="font-display text-4xl text-ink sm:text-5xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Loading the cinematic experience
          </motion.h1>
          <motion.p
            className="max-w-md text-sm text-ink/60 sm:text-base"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
          >
            Motion, light, and detail are settling into place.
          </motion.p>
        </div>

        <div className="h-1.5 w-72 overflow-hidden rounded-full bg-sand/70">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-sage via-taupe to-sand"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.3,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
