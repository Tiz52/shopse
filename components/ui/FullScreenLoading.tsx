import {motion} from "framer-motion";
import {TransitionBox} from "../ui";

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.5,
      },
      y: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};

export const FullScreenLoading = () => {
  return (
    <div className="flex items-center justify-center pt-[72px] h-main">
      <TransitionBox />
      <div className="flex flex-col items-center gap-2 text-primary">
        <motion.div
          className="w-8 h-8 rounded-full bg-quinary"
          variants={loaderVariants}
          animate="animationOne"
        />
        <h2 className="inline-block text-2xl font-semibold text-center">
          Cargando...
        </h2>
      </div>
    </div>
  );
};
