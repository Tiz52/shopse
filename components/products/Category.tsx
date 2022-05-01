import {FC, useContext} from "react";
import {UiContext} from "../../context/ui";
import {SubCategoryList} from "./SubCategoryList";

interface Props {
  category: "shoes" | "clothing" | "accessories" | "none";
  subcategories: string[];
}

export const Category: FC<Props> = ({category, subcategories}) => {
  const {categoryActive, changeCategoryActive} = useContext(UiContext);

  const onCategoryClick = () => {
    if (categoryActive !== category) {
      changeCategoryActive(category);
    } else {
      changeCategoryActive("none");
    }
  };

  return (
    <div className="flex flex-col items-center gap-12">
      <button
        className={`capitalize xl:text-7xl hover:text-[#d9d9d9]
				${
          categoryActive === "none" || categoryActive === category
            ? "xl:scale-100"
            : "xl:scale-50"
        } 
				${categoryActive === category ? "text-[#d9d9d9]" : "text-[#50949C]"}
				transition duration-700 ease-in-out`}
        onClick={onCategoryClick}
      >
        {category}
      </button>
      {categoryActive === category && (
        <SubCategoryList subcategories={subcategories} />
      )}
    </div>
  );
};
