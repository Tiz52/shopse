import {FC} from "react";
import {ProductCard} from "./ProductCard";
import {motion} from "framer-motion";
import {IProduct} from "../../interfaces";

interface Props {
  products: IProduct[];
}

export const ProductList: FC<Props> = ({products}) => {
  const productListVariant = {
    hidden: {
      opacity: [0, 1],
      transition: {
        duration: 0.35,
        ease: "easeInOut",
      },
    },
    show: {
      opacity: [0, 1],
      transition: {
        duration: 0.35,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      variants={productListVariant}
      className="grid grid-cols-2 gap-4 md:gap-12 lg:grid-cols-product-list"
    >
      {products.map((product) => {
        return <ProductCard key={product.slug} product={product} />;
      })}
    </motion.div>
  );
};
