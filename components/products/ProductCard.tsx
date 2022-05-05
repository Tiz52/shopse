import {gsap} from "gsap/dist/gsap";
import Image from "next/image";
import {FC, useEffect, useRef} from "react";
import {SeedProduct} from "../../database";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Props {
  product: SeedProduct;
}
export const ProductCard: FC<Props> = ({product}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const scrollAnimation = ScrollTrigger.create({
  //     trigger: cardRef.current,
  //     start: "top top",
  //     end: "+=5%",
  //     pinSpacing: false,
  //     pin: true,
  //     onEnter: () => {
  //       gsap.to(cardRef.current, {
  //         duration: 1,
  //         opacity: 1,
  //         ease: "power1.inOut",
  //       });
  //     },
  //   });

  //   return () => {
  //     scrollAnimation.kill();
  //   };
  // }, []);

  return (
    <div ref={cardRef} className="opacity-0 card">
      <Link href={`/product/${product.slug}`} passHref>
        <a>
          <Image
            className="border-2 rounded-md hover:opacity-90"
            src={`/products/${product.images[0]}`}
            width={300}
            height={400}
            layout="responsive"
            objectFit="cover"
            alt={product.title}
          />
          <div className="flex flex-col gap-2 mt-4 text-xl">
            <span className="text-primary">{product.title}</span>
            <span className="text-white">${product.price}</span>
          </div>
        </a>
      </Link>
    </div>
  );
};
