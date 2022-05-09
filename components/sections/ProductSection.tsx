import React, {FC} from "react";
import {Carousel} from "../ui";

import {ProductInfo} from "../products";
import {IProduct} from "../../interfaces";

interface Props {
  product: IProduct;
}

export const ProductSection: FC<Props> = ({product}) => {
  return (
    <section className="grid h-[calc(100vh-72px)] px-6 md:px-10 lg:px-14 md:grid-cols-2 bg-primary text-primary">
      <Carousel imgs={product.images} slug={product.slug} />
      <ProductInfo product={product} />
    </section>
  );
};
