import ShoppingBagIcon from "@heroicons/react/outline/ShoppingBagIcon";
import {useRouter} from "next/router";
import {FC} from "react";

interface Props {
  quantity: number;
}

export const CartIconBadge: FC<Props> = ({quantity}) => {
  const router = useRouter();

  return (
    <span className="relative inline-block group">
      <ShoppingBagIcon
        className="w-6 h-6 text-primary"
      />
      <span className="absolute group-hover:opacity-60 px-[6px] py-1 text-xs font-bold leading-none transform rounded-full -top-[9px] -right-2 text-primary bg-quinary">
        {quantity}
      </span>
    </span>
  );
};
