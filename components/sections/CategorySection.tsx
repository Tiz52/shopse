import {FC} from "react";
import {SeedProduct} from "../../database";
import {ProductList} from "../products";
import {motion} from "framer-motion";

interface Props {
  category: string;
  products: SeedProduct[];
}
export const CategorySection: FC<Props> = ({category, products}) => {
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
  };

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      animate="show"
      className="px-[24px] py-[72px] lg:px-12"
    >
      <div className="py-12">
        <h1 className="text-2xl capitalize md:text-3xl text-primary">
          {category}
        </h1>
      </div>
      <div>
        <ProductList products={products} />
      </div>
    </motion.section>
  );
};
