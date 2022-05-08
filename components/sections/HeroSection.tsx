import {SearchProducts, SideLeftProducts, SideRightProducts} from "../ui";
import {useContext, useEffect, useState} from "react";
import {UiContext} from "../../context/ui";
import {seedData} from "../../database";
import Image from "next/image";

export const HeroSection = () => {
  const {categoryActive} = useContext(UiContext);
  const [leftImgsUrl, setLeftImgsUrl] = useState<string[]>([
    "/placeholder.jpg",
    "/placeholder.jpg",
  ]);
  const [rightImgsUrl, setRightImgsUrl] = useState<string[]>([
    "/placeholder.jpg",
    "/placeholder.jpg",
  ]);

  useEffect(() => {
    let newImgs: string[] = [];

    const imgs = seedData.products
      .filter((product) => product.category === categoryActive)
      .sort(() => Math.random() - 0.5);

    if (imgs.length > 0) {
      newImgs = imgs.map((product) => `/products/${product.images[0]}`);
      setLeftImgsUrl([newImgs[0], newImgs[1]]);
      setRightImgsUrl([newImgs[2], newImgs[3]]);
    }
  }, [categoryActive]);

  return (
    <section className="flex flex-col items-center h-screen">
      <div className="pt-[72px] flex justify-center w-full h-[40%] bg-black"> 
        <div className="flex justify-center items-center gap-4 max-w-[1440px]">
          <div className="flex flex-col items-center justify-center gap-6">
          <span className="text-5xl text-tertiary lg:text-7xl">TIENDA CON LOS MEJORES</span>  
          <span className="text-5xl text-tertiary lg:text-7xl">PRODUCTOS ONLINE</span>  
          </div>
          </div>
        </div>
        <div className="grid h-[60%] max-w-[1440px] md:grid-cols-3">
        <SideLeftProducts imgsUrl={leftImgsUrl} />
        <SearchProducts />
        <SideRightProducts imgsUrl={rightImgsUrl} />
      </div>
    </section>
  );
};
