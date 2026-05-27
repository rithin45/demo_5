import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const smoothX = useSpring(mouseX, { damping: 25, stiffness: 320 });
  const smoothY = useSpring(mouseY, { damping: 25, stiffness: 320 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;

    if (!finePointer) {
      return undefined;
    }

    const handleMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
      setIsVisible(true);
    };

    const handleOver = (event) => {
      const interactive = event.target.closest(
        "a, button, input, textarea, select, [data-cursor='hover']"
      );
      setIsHovering(Boolean(interactive));
    };

    const handleLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mouseout", handleOver);
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mouseout", handleOver);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[90] hidden rounded-full bg-sage mix-blend-multiply lg:block"
        style={{
          x: smoothX,
          y: smoothY,
          width: isHovering ? 42 : 14,
          height: isHovering ? 42 : 14,
          opacity: isVisible ? 0.9 : 0,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[89] hidden rounded-full border border-ink/25 lg:block"
        style={{
          x: smoothX,
          y: smoothY,
          width: isHovering ? 72 : 32,
          height: isHovering ? 72 : 32,
          opacity: isVisible ? 0.6 : 0,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
