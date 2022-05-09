import Image from "next/image";
import {FC} from "react";
import {ICartProduct} from "../../interfaces";

interface Props {
  cartItem: ICartProduct;
  editable: boolean;
}

export const CartItem: FC<Props> = ({cartItem, editable}) => {
  return (
    <div className="flex justify-center gap-4 p-3 bg-tertiary/80 md:p-4 text-primary">
      <Image
        className="border rounded-md border-primary"
        src={`/products/${cartItem.image}`}
        width={215}
        height={215}
        alt={cartItem.title}
        objectFit="contain"
        layout="intrinsic"
      />
      <div>
        <h3 className="font-semibold xl:text-xl">{cartItem.title}</h3>
        <span className="text-sm xl:text-base">{`Talla: ${cartItem.size}`}</span>
        <div className="flex items-center gap-4 mt-2 md:mt-4">
          {editable && (
            <button className="relative inline-flex items-center justify-start w-5 h-5 overflow-hidden transition-all rounded-full hover:text-primary text-tertiary font-headline">
              +
            </button>
          )}
          <span className="text-sm xl:text-base">
            {editable ? "1" : "Cantidad: 1"}
          </span>
          {editable && (
            <button className="relative inline-flex items-center justify-start w-5 h-5 overflow-hidden transition-all rounded-full hover:text-primary text-tertiary font-headline">
              -
            </button>
          )}
        </div>
      </div>
      <div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold xl:text-base">{`$${cartItem.price}`}</span>
          {editable && (
            <button className="font-semibold text-quaternary">Remover</button>
          )}
        </div>
      </div>
    </div>
  );
};
