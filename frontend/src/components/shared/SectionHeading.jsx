import { motion } from "framer-motion";
import { fadeUp } from "../../animations/variants";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  const alignment =
    align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl";

  return (
    <motion.div
      className={`space-y-4 ${alignment}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
    >
      <span className="inline-flex rounded-full border border-sage/30 bg-sand/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-ink/80">
        {eyebrow}
      </span>
      <div className="space-y-3">
        <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="text-base leading-7 text-ink/70 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
}
