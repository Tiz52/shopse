import {Order} from "../cart";
import {CartList} from "../cart/CartList";
import {TransitionBox} from "../ui";

export const SummarySection = () => {
  return (
    <section className="px-[24px] lg:px-12">
      <TransitionBox />
      <div className="py-6">
        <h1 className="text-3xl font-bold text-tertiary font-monument md:text-5xl">
          ORDEN
        </h1>
      </div>
      <div className="flex flex-col-reverse gap-4 md:flex-row md:items-start">
        <CartList editable={false} />
        <Order />
      </div>
    </section>
  );
};
