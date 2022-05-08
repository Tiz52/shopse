import {FC} from "react";
import {ICartProduct} from "../../interfaces";
import {CartItem} from "./CartItem";

const cart: ICartProduct[] = [
  {
    _id: "1",
    image: "8765120-00-A_0_2000.jpg",
    price: 35,
    size: "XS",
    slug: "women_small_wordmark_short_sleeve_v-neck_tee",
    title: "Women's Small Wordmark Short Sleeve V-Neck Tee",
    gender: "women",
    quantity: 5,
  },
  {
    _id: "2",
    image: "8765120-00-A_0_2000.jpg",
    price: 35,
    size: "XS",
    slug: "women_small_wordmark_short_sleeve_v-neck_tee",
    title: "Women's Small Wordmark Short Sleeve V-Neck Tee",
    gender: "women",
    quantity: 5,
  },
  {
    _id: "3",
    image: "8765120-00-A_0_2000.jpg",
    price: 35,
    size: "XS",
    slug: "women_small_wordmark_short_sleeve_v-neck_tee",
    title: "Women's Small Wordmark Short Sleeve V-Neck Tee",
    gender: "women",
    quantity: 5,
  },
];

interface Props {
  editable: boolean;
}

export const CartList: FC<Props> = ({editable}) => {
  return (
    <div className="grid gap-4 md:w-3/5">
      {cart.map((cartItem) => (
        <CartItem key={cartItem._id} cartItem={cartItem} editable={editable} />
      ))}
    </div>
  );
};
