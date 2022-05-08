import {ShoppingCartIcon} from "@heroicons/react/outline";
import {TransitionBox} from "../ui";

export const CartEmptySection = () => {
  return (
    <div className="flex items-center justify-center pt-[72px] h-main">
      <TransitionBox />
      <div className="flex flex-col items-center gap-2 md:flex-row text-primary">
        <ShoppingCartIcon className="inline-block w-20 h-20" />
        <h2 className="inline-block text-2xl font-semibold text-center">
          Tu carrito está vacío
        </h2>
      </div>
    </div>
  );
};
