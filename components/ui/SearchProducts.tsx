import {SearchIcon} from "@heroicons/react/outline";
import {motion} from "framer-motion";
import {Category} from "../products";
import {TransitionBox} from "./TransitionBox";

const clothingSubcategories = [
  "sweatshirts and hoodies",
  "tees",
  "outerwear",
  "joggers",
];

const accessoriesSubcategories = ["hats", "socks"];

const containerVariants = {
  hidden: {
    opacity: 1,
    height: "100%",
  },
  show: {
    height: "0%",
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 1,
    height: "100%",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const SearchProducts = () => {
  return (
    <div className="relative flex flex-col justify-start gap-20 px-6 overflow-hidden pt-36 lg:px-10 text-primary">
      <TransitionBox />
      <div className="relative z-[1] flex items-end overflow-hidden rounded-lg border-primary">
        <input
          className="w-full px-4 transition duration-300 ease-in-out border-b-2 appearance-none text-primary h-14 md:text-xs lg:text-sm xl:text-lg bg-tertiary focus:border-quinary focus:outline-none placeholder:text-primary"
          type="text"
          placeholder="What are you looking for?"
        />
        <SearchIcon className="text-primary absolute bottom-4 right-3 flex h-[22px]" />
      </div>
      <div className="flex flex-col items-center gap-10">
        <span className="uppercase">Categories</span>
        <div className="flex flex-col w-full gap-12 ">
          <Category category="clothing" subcategories={clothingSubcategories} />
          <Category
            category="accessories"
            subcategories={accessoriesSubcategories}
          />
        </div>
      </div>
    </div>
  );
};
