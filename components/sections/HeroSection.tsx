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
  fullProducts: IProduct[];
}
export const HeroSection: FC<Props> = ({fullProducts}) => {
  const [category, setCategory] = useState("all");
  const [products, setProducts] = useState(fullProducts);

  const clothing = fullProducts.filter((p) => p.category === "clothing");
  const accessories = fullProducts.filter((p) => p.category === "accessories");

  const handleCategory = (category: string) => {
    setCategory(category);
    if (category === "clothing") {
      setProducts(clothing);
    }
    if (category === "accessories") {
      setProducts(accessories);
    }
    if (category === "all") {
      setProducts(fullProducts);
    }
  };

  return (
    <div className="min-h-screen px-6 md:px-10 lg:px-14 text-tertiary bg-primary">
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <div className="py-6">
          <h1 className="text-4xl font-bold font-monument md:text-6xl">
            TIENDA
          </h1>
        </div>
        <motion.div className="flex gap-4 pb-6" layout>
          <button
            className="relative block"
            onClick={() => handleCategory("all")}
          >
            <span>Todo</span>
            <span className="absolute text-[0.65rem] font-bold leading-none transform rounded-full -top-[4px] -right-2 text-tertiary">
              {fullProducts.length}
            </span>
            {category === "all" && (
              <motion.span
                className="absolute bottom-0 block w-full h-[2px] bg-tertiary"
                layoutId="category"
              />
            )}
          </button>
          <button
            className="relative block"
            onClick={() => handleCategory("clothing")}
          >
            <span>Ropa</span>
            <span className="absolute text-[0.65rem] font-bold leading-none transform rounded-full -top-[4px] -right-2 text-tertiary">
              {clothing.length}
            </span>
            {category === "clothing" && (
              <motion.span
                className="absolute bottom-0 block w-full h-[2px] bg-tertiary"
                layoutId="category"
              />
            )}
          </button>
          <button
            className="relative block"
            onClick={() => handleCategory("accessories")}
          >
            <span>Accesorios</span>
            <span className="absolute text-[0.65rem] font-bold leading-none transform rounded-full -top-[4px] -right-2 text-tertiary">
              {accessories.length}
            </span>
            {category === "accessories" && (
              <motion.span
                className="absolute bottom-0 block w-full h-[2px] bg-tertiary"
                layoutId="category"
              />
            )}
          </button>
        </motion.div>

        <ProductList products={products} />
      </motion.section>
    </div>
  );
};
