import gsap from "gsap";
import Image from "next/image";
import {useEffect, useRef, FC} from "react";
import {imgTopRightAnimation, imgBotRigthAnimation} from "../../animations";

interface Props {
  imgsUrl: string[];
}

export const SideRightProducts: FC<Props> = ({imgsUrl}) => {
  const imgTopRef = useRef<HTMLDivElement>(null);
  const imgBotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap
      .timeline()
      .fromTo(
        imgTopRef.current,
        imgTopRightAnimation.from,
        imgTopRightAnimation.to,
      )
      .fromTo(
        imgBotRef.current,
        imgBotRigthAnimation.from,
        imgBotRigthAnimation.to,
      );

    return () => {
      tl.kill();
    };
  }, [imgsUrl, imgTopRef, imgBotRef]);

  return (
    <div className="flex-col items-start justify-center hidden overflow-hidden md:flex ">
      <div className="relative w-3/5 h-1/3 -top-[5%] left-[20%]">
        <div className="relative opacity-1" ref={imgTopRef}>
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
          className="relative opacity-0 -top-[10%] left-[5%]"
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
