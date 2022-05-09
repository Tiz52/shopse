import {FC, useState} from "react";
import {ProductList} from "../products";
import {motion} from "framer-motion";
import {IProduct} from "../../interfaces";

const sectionVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      type: "easeInOut",
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.25,
      type: "easeInOut",
      when: "beforeChildren",
    },
  },
};
interface Props {
  products: IProduct[];
  category: string;
}
export const CategorySection: FC<Props> = ({products, category}) => {
  return (
    <div className="px-6 text-tertiary md:px-10 lg:px-14 bg-primary">
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <div className="py-6">
          <h1 className="text-4xl font-bold font-monument md:text-6xl">
            {category}
          </h1>
        </div>

        <ProductList products={products} />
      </motion.section>
    </div>
  );
};
