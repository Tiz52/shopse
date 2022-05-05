import Image from "next/image";
import {FC, useState} from "react";
import {motion} from "framer-motion";

type Animation = "initial" | "firstImage" | "secondImage" | "exit";

interface Props {
  imgs: string[];
  slug: string;
}

export const Carousel: FC<Props> = ({imgs, slug}) => {
  const [imgAnimation, setImgAnimation] = useState<Animation>("initial");

  const firstImageVariants = {
    initialState: {
      opacity: 0,
      x: -200,
      y: 50,
      rotate: -24,
      zIndex: 4,
    },
    initial: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: -4,
      zIndex: 4,
    },
    firstImage: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: -4,
      zIndex: 4,
    },
    secondImage: {
      opacity: 0,
      x: -200,
      y: 50,
      transition: {
        duration: 0,
      },
      rotate: -24,
      zIndex: 3,
    },
  };

  const firstImageTransition = {
    initialState: {
      opacity: 0,
      x: -200,
      y: 50,
      rotate: -24,
      zIndex: 4,
    },
    initial: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: -4,
      zIndex: 4,
    },
    firstImage: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: -4,
      zIndex: 1,
    },
    secondImage: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: -4,
      zIndex: 3,
    },
  };

  const secondImageVariants = {
    initial: {
      opacity: 0,
      x: -200,
      y: -50,
      rotate: -15,
      zIndex: 4,
    },
    firstImage: {
      opacity: 0,
      x: -200,
      y: -50,
      rotate: -15,
      zIndex: 3,
      transition: {
        duration: 0,
      },
    },
    secondImage: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 4,
      zIndex: 4,
    },
  };

  const secondImageTransition = {
    initial: {
      opacity: 0,
      x: -200,
      y: -50,
      rotate: -15,
      zIndex: 4,
    },
    firstImage: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 4,
      zIndex: 3,
    },
    secondImage: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 4,
      zIndex: 1,
    },
  };

  return (
    <div className="flex items-center gap-10 px-12 py-4 md:px-6 xl:px-10">
      <button
        onClick={() => setImgAnimation("secondImage")}
        className="z-[999] text-black text-3xl xl:text-5xl hover:scale-105"
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
          variants={firstImageVariants}
          initial={"initialState"}
          animate={imgAnimation}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="absolute inset-0 z-0"
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
          className="absolute inset-0 z-0"
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
          variants={secondImageVariants}
          initial={"initial"}
          animate={imgAnimation}
          className="absolute inset-0 z-0 opacity-0"
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
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
        onClick={() => setImgAnimation("firstImage")}
        className="z-[999] text-black text-3xl xl:text-5xl hover:scale-105"
      >
        {">"}
      </button>
    </div>
  );
};
