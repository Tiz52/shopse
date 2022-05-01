import {SearchIcon} from "@heroicons/react/outline";
import {Category} from "../products";

const shoesTradeMarks = ["Adidas", "Nike", "Puma", "Reebook", "Vans"];
const clothesTradeMarks = ["Adidas", "Nike", "Puma", "Reebook", "Vans"];
const accessoriesTradeMarks = ["Adidas", "Nike", "Puma", "Reebook", "Vans"];

export const SearchProducts = () => {
  return (
    <div className="flex flex-col gap-20 px-10 justify-center pb-10 text-[#50949C]">
      <div className="relative flex items-end h-1/3">
        <input
          className="px-2 h-14 w-full text-xl border-b-2 border-[#50949C] bg-slate-900 focus:border-[#d9d9d9] 
          appearance-none focus:outline-none transition duration-300 ease-in-out placeholder:text-white"
          type="text"
          placeholder="What are you looking for?"
        />
        <SearchIcon className="absolute bottom-4 right-0 flex h-[22px]" />
      </div>
      <div className="flex flex-col items-center flex-auto gap-10">
        <span className="uppercase">Categories</span>
        <div className="flex flex-col w-full gap-12">
          <Category category="clothing" subcategories={shoesTradeMarks} />
          <Category category="accessories" subcategories={shoesTradeMarks} />
        </div>
      </div>
    </div>
  );
};
