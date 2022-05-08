import {FC} from "react";
import {SeedProduct} from "../../database";
import {ProductCard} from "./ProductCard";
import {motion} from "framer-motion";

interface Props {
  products: SeedProduct[];
}

export const ProductList: FC<Props> = ({products}) => {
  const productListVariant = {
    hidden: {},
    show: {
      transition: {
        type: "easeInOut",
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={productListVariant}
      className="grid gap-12 grid-cols-product-list"
    >
      {products.map((product) => {
        return <ProductCard key={product.slug} product={product} />;
      })}
    </motion.div>
  );
};
