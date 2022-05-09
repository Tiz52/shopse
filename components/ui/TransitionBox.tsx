import {motion} from "framer-motion";
import {FC} from "react";

const containerVariants = {
  hidden: {
    opacity: 1,
    height: "100%",
  },
  show: {
    height: "0%",
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 1,
    height: "100%",
    transition: {
      duration: 0.75,
      ease: "easeInOut",
    },
  },
};

interface Props {
  color?: string;
}

export const TransitionBox: FC<Props> = ({color = "bg-primary"}) => {
  const classColor = color;
  return (
    <motion.div
      className={"absolute inset-0 z-[2] " + classColor}
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit="exit"
    />
  );
};
