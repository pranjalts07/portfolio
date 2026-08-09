/* Shared Framer Motion variants + a reusable scroll-reveal wrapper.
   Keeps animation consistent and Apple-subtle across the site. */
import { motion } from "framer-motion";

export const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

/* Reveal: fades a block up the first time it scrolls ~20% into view. */
export function Reveal({ children, className, delay = 0, as = "div" }) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: 26 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}

/* Stack: staggers its direct children (each should be a RevealItem). */
export function Stack({ children, className, amount = 0.2 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={stagger}
    >
      {children}
    </motion.div>
  );
}

export function StackItem({ children, className, as = "div" }) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag className={className} variants={fadeUp}>
      {children}
    </MotionTag>
  );
}
