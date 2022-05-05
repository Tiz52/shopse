import {FC} from "react";
import {SeedProduct} from "../../database";
import {ProductList} from "../products";

interface Props {
  category: string;
  products: SeedProduct[];
}
export const CategorySection: FC<Props> = ({category, products}) => {
  return (
    <section className="px-12">
      <div className="py-12">
        <h1 className="text-3xl capitalize text-secondary">{category}</h1>
      </div>
      <ProductList products={products} />
    </section>
  );
};
