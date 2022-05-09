import ShoppingBagIcon from "@heroicons/react/outline/ShoppingBagIcon";
import {FC} from "react";

interface Props {
  quantity: number;
}

export const CartIconBadge: FC<Props> = ({quantity}) => {
  return (
    <span className="relative inline-block group">
      <ShoppingBagIcon className="w-6 h-6 hover:text-white text-tertiary" />
      <span className="absolute px-[6px] py-1 text-xs font-bold leading-none transform rounded-full -top-[9px] -right-2 text-tertiary bg-quaternary">
        {quantity}
      </span>
    </span>
  );
};
