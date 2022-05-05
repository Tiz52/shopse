import gsap from "gsap";
import Image from "next/image";
import {useEffect, useRef, FC} from "react";
import {imgTopLeftAnimation, imgBotLeftAnimation} from "../../animations";

interface Props {
  imgsUrl: string[];
}

export const SideLeftProducts: FC<Props> = ({imgsUrl}) => {
  const imgTopRef = useRef<HTMLDivElement>(null);
  const imgBotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap
      .timeline()
      .fromTo(
        imgTopRef.current,
        imgTopLeftAnimation.from,
        imgTopLeftAnimation.to,
      )
      .fromTo(
        imgBotRef.current,
        imgBotLeftAnimation.from,
        imgBotLeftAnimation.to,
      );

    return () => {
      tl.kill();
    };
  }, [imgsUrl, imgTopRef, imgBotRef]);

  return (
    <div className="flex-col items-end justify-center hidden overflow-hidden md:flex ">
      <div className="relative w-3/5 h-1/3 -top-[5%] right-[20%]">
        <div className="relative opacity-0" ref={imgTopRef}>
          <Image
            className="border-2 rounded-xl"
            src={imgsUrl[0]}
            alt="placeholder"
            width={300}
            height={300}
            layout="responsive"
            objectFit="contain"
            priority
          />
        </div>

        <div
          className="relative -top-[10%] right-[5%] opacity-0"
          ref={imgBotRef}
        >
          <Image
            className="border-2 rounded-xl"
            src={imgsUrl[1]}
            alt="placeholder"
            width={300}
            height={300}
            layout="responsive"
            objectFit="contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};
