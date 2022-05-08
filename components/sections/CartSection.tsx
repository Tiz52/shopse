import {OrderSummary} from "../cart";
import {CartList} from "../cart/CartList";
import {TransitionBox} from "../ui";

export const CartSection = () => {
  return (
    <section className="px-[24px] pt-[72px] lg:px-12">
      <TransitionBox />
      <div className="py-6">
        <h1 className="text-2xl capitalize md:text-3xl text-primary">Orden</h1>
      </div>
      <div className="flex flex-col-reverse gap-4 md:flex-row md:items-start">
        <CartList editable />
        <OrderSummary />
      </div>
    </section>
  );
};
