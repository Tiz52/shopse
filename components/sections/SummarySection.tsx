import {Order} from "../cart";
import {CartList} from "../cart/CartList";
import {TransitionBox} from "../ui";

export const SummarySection = () => {
  return (
    <section className="pt-[72px] px-[24px] lg:px-12">
      <TransitionBox />
      <div className="py-6">
        <h1 className="text-2xl capitalize md:text-3xl text-primary">Orden</h1>
      </div>
      <div className="flex flex-col-reverse gap-4 md:flex-row md:items-start">
        <CartList editable={false} />
        <Order />
      </div>
    </section>
  );
};
