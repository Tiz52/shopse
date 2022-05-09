import {ShoppingCartIcon} from "@heroicons/react/outline";
import {TransitionBox} from "../ui";

export const CartEmptySection = () => {
  return (
    <div className="flex items-center justify-center h-main">
      <TransitionBox />
      <div className="flex flex-col items-center gap-2 md:flex-row text-tertiary">
        <ShoppingCartIcon className="inline-block w-20 h-20" />
        <h1 className="text-3xl font-bold text-tertiary font-monument md:text-5xl">
          Tu carrito está vacio
        </h1>
      </div>
    </div>
  );
};
