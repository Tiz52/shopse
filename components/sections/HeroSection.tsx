import {SearchProducts, SideLeftProducts, SideRightProducts} from "../ui";
import {useContext, useEffect, useState} from "react";
import {UiContext} from "../../context/ui";
import {seedData} from "../../database";

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
    <section className="grid md:grid-cols-3 h-[calc(100vh-72px)]">
      <SideLeftProducts imgsUrl={leftImgsUrl} />
      <SearchProducts />
      <SideRightProducts imgsUrl={rightImgsUrl} />
    </section>
  );
};
