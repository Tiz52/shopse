import {gsap} from "gsap/dist/gsap";
import {FC, useEffect, useRef} from "react";
import {SeedProduct} from "../../database";
import {ProductCard} from "./ProductCard";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

interface Props {
  products: SeedProduct[];
}

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const ProductList: FC<Props> = ({products}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const q = gsap.utils.selector(containerRef);
    const tl = gsap
      .timeline({
        defaults: {
          duration: 1.5,
          stagger: 0.2,
          ease: "power1.inOut",
        },
      })
      .fromTo(
        q(".card"),
        {
          opacity: 0,
          y: -50,
        },
        {
          opacity: 1,
          y: 0,
        },
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
      <div ref={containerRef} className="grid gap-12 md:grid-cols-product-list">
        {products.map((product) => {
          return <ProductCard key={product.slug} product={product} />;
        })}
      </div>
    </>
  );
};
