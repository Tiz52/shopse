import {motion, useAnimation} from "framer-motion";
import Image from "next/image";
import {useEffect, FC, useCallback} from "react";
import {TransitionBox} from "./TransitionBox";

interface Props {
  imgsUrl: string[];
}

const imgTopVariants = {
  hidden: {
    x: -300,
    rotate: -90,
    opacity: 0,
  },
  show: {
    opacity: [0, 1],
    rotate: [25, -10],
    x: [300, 0],

    transition: {
      duration: 1.5,
      type: "tween",
    },
  },
};

const imgBotVariants = {
  hidden: {
    x: -300,
    rotate: -35,
    opacity: 0,
  },
  show: {
    opacity: [0, 0, 2, 1],
    rotate: [35, 10],
    x: [300, 0],

    transition: {
      duration: 1.5,
      type: "",
    },
  },
};

export const SideRightProducts: FC<Props> = ({imgsUrl}) => {
  const imgTopControls = useAnimation();
  const imgBotControls = useAnimation();

  const playAll = useCallback(() => {
    imgTopControls.start("show");
    imgBotControls.start("show");
  }, [imgTopControls, imgBotControls]);

  const stopAll = useCallback(() => {
    imgTopControls.stop();
    imgBotControls.stop();
  }, [imgTopControls, imgBotControls]);

  useEffect(() => {
    playAll();
    return () => stopAll();
  }, [imgsUrl, playAll, stopAll]);
  return (
    <div className="justify-start hidden overflow-hidden md:flex">
      <TransitionBox />
      <div className="w-[500px] h-full flex flex-col items-center justify-center">

        <div className="z-[1] relative w-1/2 -top-[5%] left-[10%]">
          <motion.div
            className="relative opacity-1"
            variants={imgTopVariants}
            initial="hidden"
            animate={imgTopControls}
          >
            <Image
              className="border-2 rounded-xl"
              src={imgsUrl[0]}
              alt="placeholder"
              width={300}
              height={300}
              layout="responsive"
              objectFit="cover"
              priority
            />
          </motion.div>

          <motion.div
            className="relative opacity-1 -top-[10%] left-[5%]"
            variants={imgBotVariants}
            initial="hidden"
            animate={imgBotControls}
          >
            <Image
              className="border-2 rounded-xl"
              src={imgsUrl[1]}
              alt="placeholder"
              width={300}
              height={300}
              layout="responsive"
              objectFit="cover"
              priority
            />
          </motion.div>
        </div>
        </div>
    </div>
  );
};
