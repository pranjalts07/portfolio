import { motion, useScroll, useSpring } from "framer-motion";

/* Thin accent bar at the very top that fills as you scroll. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  return <motion.div className="scroll-progress" style={{ scaleX, width: "100%" }} />;
}
