import {FC, useState} from "react";
import {IProduct} from "../../interfaces";
import {CartButton, FavoriteButton, TransitionBox} from "../ui";

interface Props {
  product: IProduct;
}

export const ProductInfo: FC<Props> = ({product}) => {
  const [size, setSize] = useState("");

  const handleCartClick = () => {
    console.log("cart clicked");
  };

  return (
    <div className="flex justify-start bg-primary">
      <TransitionBox />
      <div className="flex justify-center flex-auto px-5 md:pb-0 md:mt-0 md:items-center">
        <div className="flex flex-col gap-4 pt-4 md:pt-0 md:justify-center md:gap-6 md:w-3/4 md:h-3/4 text-tertiary ">
          <h1 className="text-xl font-headline md:text-2xl xl:text-4xl">
            {product.title}
          </h1>
          <span className="text-xl font-headline xl:text-2xl">
            ${product.price}
          </span>
          <p className="text-sm md:text-base xl:text-lg">
            {product.description}
          </p>

          <div>
            <form className="flex gap-4 mt-4">
              {product.sizes.map((s) => (
                <div
                  key={s}
                  className="relative inline-flex items-center justify-start w-10 h-5 overflow-hidden font-medium transition-all rounded cursor-pointer bg-tertiary md:w-10 md:h-8 hover:bg-white group"
                >
                  <span
                    className={`w-48 h-48 rotate-[-40deg] bg-quaternary absolute bottom-0 left-0 -translate-x-full 
                    ease-out duration-500 transition-all translate-y-full group-hover:ml-0 group-hover:mb-32
                    group-hover:translate-x-0`}
                  ></span>
                  <span className="relative w-full text-center text-black transition-colors duration-300 ease-in-out md:text-xs text-[0.5rem] group-hover:text-white">
                    {s}
                  </span>
                  <input
                    className="hidden"
                    type="radio"
                    value={s}
                    id={s}
                    checked={size === s}
                    onChange={() => setSize(s)}
                  />
                </div>
              ))}
            </form>
          </div>
          <div className="flex justify-between gap-4 py-4 mt-2 border-t-2 border-b-2 border-secondary md:mt-4">
            <button className="inline-flex items-center justify-start text-2xl transition-all text-secondary hover:text-tertiary font-headline">
              +
            </button>
            <span className="xl:text-2xl">1</span>
            <button className="inline-flex items-center justify-start text-2xl transition-all text-secondary hover:text-tertiary font-headline">
              -
            </button>
          </div>
          <div className="flex justify-center gap-10 mt-4 ">
            <CartButton onClick={handleCartClick} text="Add To Cart" />
            {/* <FavoriteButton /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
