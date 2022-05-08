import { AnimatePresence, motion } from "framer-motion";
import {FC, useContext} from "react";
import { UiContext } from "../../context/ui";
import { useOuterClick } from "../../hooks";

interface Props {
  isOpen: boolean;
}

const backdropVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}

const modalVariants ={
  hidden: {
    opacity: 1,
    width: 0,
  },
  show: {
    opacity: 1,
    width: 300,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 1,
    width: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },

  },
}

export const MenuWrapper: FC<Props> = ({isOpen}) => {

const ref = useOuterClick();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="show"
          exit="exit"
          className="absolute inset-0 z-[30] w-screen h-screen bg-primary/75"
        >
          <motion.div 
            className="absolute z-[40] w-72 right-12 flex flex-col justify-center p-4 rounded-lg top-[80px] bg-tertiary"
            variants={modalVariants}
            initial="hidden"
            animate="show"
            exit="exit"  
            ref={ref}
                       
            >
            <h1 className="text-center text-primary">Menu</h1>
            <div className="flex flex-col gap-12">
              <a href="#" className="text-primary">
                Home
              </a>
              <a href="#" className="text-primary">
                About
              </a>
              <a href="#" className="text-primary">
                Contact
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
      
    </AnimatePresence>
  );
};

