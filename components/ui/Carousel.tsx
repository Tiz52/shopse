import Image from "next/image";
import {FC, useEffect, useState, useCallback, useRef} from "react";
import {motion, useAnimation} from "framer-motion";
import {TransitionBox} from "./TransitionBox";

type Animation = "initial" | "firstImage" | "secondImage" | "exit";

interface Props {
  imgs: string[];
  slug: string;
}

const firstImgVariants = {
  hidden: {
    opacity: [0, 0],
  },
  initial: {
    opacity: [0, 1],
    x: [-200, 0],
    y: [50, 0],
    rotate: [-24, -4],
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  show: {
    opacity: [0, 1],
    x: [-200, 0],
    y: [50, 0],
    rotate: [-24, -4],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const secondImgVariants = {
  hidden: {
    opacity: [0, 0],
  },
  show: {
    opacity: [0, 1],
    x: [-200, 0],
    y: [-50, 0],
    rotate: [-15, 4],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const firstImageVariants = {
  initialState: {
    opacity: 0,
    x: -200,
    y: 50,
    rotate: -24,
    zIndex: 2,
  },
  initial: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: -4,
    zIndex: 2,
  },
  firstImage: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: -4,
    zIndex: 2,
  },
  secondImage: {
    opacity: 0,
    x: -200,
    y: 50,
    transition: {
      duration: 0,
    },
    rotate: -24,
    zIndex: 1,
  },
};

const firstImageTransition = {
  // initialState: {
  //   opacity: 0,
  //   x: -200,
  //   y: 50,
  //   rotate: -24,
  //   zIndex: 2,
  // },
  // initial: {
  //   opacity: 1,
  //   x: 0,
  //   y: 0,
  //   rotate: -4,
  //   zIndex: 2,
  // },
  // firstImage: {
  //   opacity: 1,
  //   x: 0,
  //   y: 0,
  //   rotate: -4,
  //   zIndex: 2,
  // },
  // secondImage: {
  //   opacity: 1,
  //   x: 0,
  //   y: 0,
  //   rotate: -4,
  //   zIndex: 1,
  // },
};

const secondImageVariants = {
  initial: {
    opacity: 0,
    x: -200,
    y: -50,
    rotate: -15,
    zIndex: 1,
  },
  firstImage: {
    opacity: 0,
    x: -200,
    y: -50,
    rotate: -15,
    zIndex: 1,
    transition: {
      duration: 0,
    },
  },
  secondImage: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 4,
    zIndex: 2,
  },
};

const secondImageTransition = {
  // initial: {
  //   opacity: 0,
  //   x: -200,
  //   y: -50,
  //   rotate: -15,
  //   zIndex: 2,
  // },
  // firstImage: {
  //   opacity: 1,
  //   x: 0,
  //   y: 0,
  //   rotate: 4,
  //   zIndex: 1,
  // },
  // secondImage: {
  //   opacity: 1,
  //   x: 0,
  //   y: 0,
  //   rotate: 4,
  //   zIndex: 0,
  // },
};

export const Carousel: FC<Props> = ({imgs, slug}) => {
  const [imgAnimation, setImgAnimation] = useState<Animation>("initial");

  const timeOutRef = useRef<NodeJS.Timeout>();

  const firstImgControls = useAnimation();
  const secondImgControls = useAnimation();

  const firstAnimation = useCallback(() => {
    if (imgAnimation === "initial") return firstImgControls.start("initial");
    if (imgAnimation === "secondImage") return;
    firstImgControls.start("show");
    secondImgControls.start("hidden");
  }, [imgAnimation, firstImgControls, secondImgControls]);

  const secondAnimation = useCallback(() => {
    if (imgAnimation === "firstImage") return;
    if (imgAnimation === "initial") return;
    secondImgControls.start("show");
    firstImgControls.start("hidden");
  }, [imgAnimation, firstImgControls, secondImgControls]);

  const resetTimer = useCallback(() => {
    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current);
    }
  }, []);

  useEffect(() => {
    firstAnimation();
    secondAnimation();
  }, [firstAnimation, secondAnimation]);

  useEffect(() => {
    resetTimer();

    setTimeout(() => {
      if (imgAnimation === "initial") {
        return setImgAnimation("secondImage");
      }

      imgAnimation === "firstImage"
        ? setImgAnimation("secondImage")
        : setImgAnimation("firstImage");
    }, 3000);

    return () => {
      resetTimer();
    };
  }, [resetTimer, firstAnimation, secondAnimation, imgAnimation]);

  return (
    <div className="flex justify-end">
      <TransitionBox />
      <div className="flex gap-10 items-center pt-[72px] px-12 py-4 md:px-6 xl:px-10 flex-auto max-w-[720px]">

        <button
          onClick={() => {
            imgAnimation === "secondImage" && setImgAnimation("firstImage");
          }}
          className="z-[3] text-black text-3xl xl:text-5xl hover:scale-105"
        >
          {"<"}
        </button>

        <div className="relative flex-auto">
          <div className="invisible">
            <Image
              src={`/products/${imgs[0]}`}
              className="border-2 rounded-xl"
              width={300}
              height={400}
              alt={slug}
              objectFit="cover"
              layout="responsive"
            />
          </div>
          <motion.div
            variants={firstImgVariants}
            animate={firstImgControls}
            className="absolute inset-0 opacity-0"
          >
            <Image
              src={`/products/${imgs[0]}`}
              className="border-2 rounded-xl"
              width={300}
              height={400}
              alt={slug}
              objectFit="cover"
              layout="responsive"
            />
          </motion.div>
          <motion.div
            variants={firstImageTransition}
            initial={"initialState"}
            animate={imgAnimation}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="absolute inset-0 opacity-0"
          >
            <Image
              src={`/products/${imgs[0]}`}
              className="border-2 rounded-xl"
              width={300}
              height={400}
              alt={slug}
              objectFit="cover"
              layout="responsive"
            />
          </motion.div>

          <motion.div
            variants={secondImgVariants}
            initial="hidden"
            animate={secondImgControls}
            className="absolute inset-0 opacity-0"
          >
            <Image
              src={`/products/${imgs[1]}`}
              width={300}
              height={400}
              alt={slug}
              objectFit="cover"
              layout="responsive"
              className="border-2 rounded-xl"
            />
          </motion.div>

          <motion.div
            variants={secondImageTransition}
            initial={"initial"}
            animate={imgAnimation}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="absolute inset-0 z-0 opacity-0"
          >
            <Image
              src={`/products/${imgs[1]}`}
              className="border-2 rounded-xl"
              width={300}
              height={400}
              alt={slug}
              objectFit="cover"
              layout="responsive"
            />
          </motion.div>
        </div>

        <button
          onClick={() => {
            imgAnimation === "firstImage" && setImgAnimation("secondImage");
          }}
          className="z-[3] text-black text-3xl xl:text-5xl hover:scale-105"
        >
          {">"}
        </button>
 </div>
    
    </div>
  );
};
