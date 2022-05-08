import React, {FC} from "react";
import {SeedProduct} from "../../database";
import {Carousel} from "../ui";

import {ProductInfo} from "../products";

interface Props {
  product: SeedProduct;
}

export const ProductSection: FC<Props> = ({product}) => {
  return (
    <section className="grid h-screen gap-4 md:grid-cols-2 text-primary">
      <Carousel imgs={product.images} slug={product.slug} />
      <ProductInfo product={product} />
    </section>
  );
};
