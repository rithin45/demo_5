import { motion } from "framer-motion";

const blobs = [
  "left-[8%] top-24 h-72 w-72 bg-sage/20",
  "right-[10%] top-[18rem] h-96 w-96 bg-taupe/18",
  "left-1/3 top-[42rem] h-80 w-80 bg-sand/45",
];

export default function AmbientBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-radial-premium" />
      <div className="absolute inset-0 bg-grid-fade opacity-50" />

      {blobs.map((className, index) => (
        <motion.div
          key={className}
          className={`absolute rounded-full blur-3xl ${className}`}
          animate={{
            x: [0, index % 2 === 0 ? 60 : -60, 0],
            y: [0, index % 2 === 0 ? -45 : 35, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 14 + index * 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
