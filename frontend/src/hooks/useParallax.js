import { useScroll, useTransform } from "framer-motion";

export default function useParallax(distance = 100) {
  const { scrollYProgress } = useScroll();
  return useTransform(scrollYProgress, [0, 1], [0, distance]);
}
