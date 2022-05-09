import {FC} from "react";
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
      duration: 0.5,
      type: "easeInOut",
      when: "beforeChildren",
    },
  },
};

interface Props {
  query: string;
  products: IProduct[];
  foundProducts: boolean;
}

export const SearchSection: FC<Props> = ({query, products, foundProducts}) => {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      animate="show"
      exit="exit"
      className="px-6 md:px-10 lg:px-14"
    >
      <div className="flex flex-col gap-1 py-12 text-tertiary">
        <h1 className="text-3xl font-bold font-monument md:text-5xl">
          BUSCAR PRODUCTOS
        </h1>
        {foundProducts ? (
          <span className="md:text-3xl">Término: {query}</span>
        ) : (
          <span className="md:text-3xl">
            No encontramos ningún producto con el término: {query}
          </span>
        )}
      </div>
      <div>
        <ProductList products={products} />
      </div>
    </motion.section>
  );
};
