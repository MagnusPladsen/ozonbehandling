import { motion, MotionValue } from "framer-motion";

export default function ScrollProgressBar({
  color = "bg-white",
  height = "h-2",
  scrollYProgress,
}: {
  color?: string;
  height?: string;
  scrollYProgress: MotionValue<number>;
}) {
  // Parent component needs this to find the scroll position
  //   const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className={`fixed top-0 left-0 right-0 z-10 ${height} border-b-2 border-primary ${color}`}
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      />
    </>
  );
}
