import {motion} from "framer-motion";
import {FC} from "react";

const buttonVariants = {
  hidden: {
    opacity: 0,

    transition: {
      duration: 0.25,
      ease: "easeInOut",
    },
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.25,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.25,
      ease: "easeInOut",
    },
  },
};

interface Props {
  title: string;
  children: React.ReactNode;
  onHovered: string;
  mobile?: boolean;
  onMouseEnter: () => void;
  onClick?: () => void;
}

export const FramerButton: FC<Props> = ({
  children,
  onHovered,
  title,
  mobile = false,
  onMouseEnter,
  onClick,
}) => {
  const hidden = mobile;

  return (
    <motion.button
      variants={buttonVariants}
      initial="hidden"
      animate="show"
      exit="exit"
      className={
        (hidden ? "sm:hidden " : " ") +
        "relative flex items-center w-full h-10 gap-2 pl-2"
      }
      onMouseEnter={onMouseEnter}
      onClick={onClick}
    >
      {children}
      <span className="text-primary">{title}</span>
      {onHovered === title && (
        <motion.span
          className="absolute inset-0 block w-full h-full bg-tertiary -z-10"
          layoutId="button"
        ></motion.span>
      )}
    </motion.button>
  );
};
