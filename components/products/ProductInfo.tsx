import {motion} from "framer-motion";
import {FC, useState} from "react";
import {SeedProduct} from "../../database";
import {CartButton, FavoriteButton, TransitionBox} from "../ui";

interface Props {
  product: SeedProduct;
}

export const ProductInfo: FC<Props> = ({product}) => {
  const [size, setSize] = useState("");

  const handleCartClick = () => {
    console.log("cart clicked");
  };

  return (
    <div className="flex justify-start bg-primary">
      <TransitionBox />
      <div className="flex flex-auto max-w-[720px] justify-center pt-[36px] md:pt-[72px] md:pb-0 md:mt-0 md:items-center px-5 pb-5">
      <div className="flex flex-col justify-center gap-4 md:gap-10 md:w-3/4 md:h-3/4 text-tertiary ">
        <h1 className="text-xl md:text-2xl xl:text-4xl">{product.title}</h1>
        <p className="text-sm md:text-base xl:text-xl">{product.description}</p>
        <span className="text-sm xl:text-xl">${product.price}</span>
        <div>
          <span className="text-xs font-semibold">COUNTER</span>
          <div className="flex items-center gap-4 mt-2 md:mt-4">
            <button className="relative inline-flex items-center justify-start w-5 h-5 overflow-hidden font-medium transition-all bg-white rounded-full hover:bg-quinary group">
              <span className="relative w-full text-xs text-center text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                +
              </span>
            </button>
            <span className="xl:text-lg">1</span>
            <button className="relative inline-flex items-center justify-start w-5 h-5 overflow-hidden font-medium transition-all bg-white rounded-full hover:bg-quinary group">
              <span className="relative w-full text-xs text-center text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                -
              </span>
            </button>
          </div>
        </div>

        <div>
          <span className="text-xs font-semibold">SELECT SIZE</span>
          <form className="flex gap-4 mt-4">
            {product.sizes.map((s) => (
              <div
                key={s}
                className="relative inline-flex items-center justify-start w-5 h-5 overflow-hidden font-medium transition-all bg-white rounded cursor-pointer md:w-8 md:h-8 hover:bg-white group"
              >
                <span
                  className={`w-48 h-48 rotate-[-40deg] bg-quinary absolute bottom-0 left-0 -translate-x-full 
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
        <div className="flex justify-center gap-10 mt-4 md:justify-start">
          <CartButton onClick={handleCartClick} text="Add To Cart" />
          <FavoriteButton />
        </div>
      </div>

      </div>
    </div>
  );
};
