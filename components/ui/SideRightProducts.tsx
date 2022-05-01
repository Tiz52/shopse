import gsap from "gsap";
import Image from "next/image";
import {useEffect, useRef} from "react";

export const SideRightProducts = () => {
  const imgTopRef = useRef<HTMLDivElement>(null);
  const imgBotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(imgTopRef.current, {
      duration: 2,
      opacity: 1,
      ease: "power3.inOut",
      rotation: -10,
      x: -300,
      y: -50,
    });
  }, []);

  useEffect(() => {
    gsap.to(imgBotRef.current, {
      duration: 2,
      opacity: 1,
      ease: "power3.inOut",
      rotation: 10,
      x: -300,
      y: -50,
    });
  }, []);

  return (
    <div className="flex flex-col items-end justify-center overflow-hidden ">
      <div className="relative w-3/5 h-1/2">
        <div
          className="absolute w-full h-full rotate-[25deg] -right-60 xl:-right-48 -top-32 opacity-0"
          ref={imgTopRef}
        >
          <Image
            src="/placeholder.jpg"
            alt="placeholder"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>

        <div
          className="absolute w-full h-full rotate-[45deg] -right-60 xl:-right-48 top-32  opacity-0"
          ref={imgBotRef}
        >
          <Image
            src="/placeholder.jpg"
            alt="placeholder"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};
