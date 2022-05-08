import Link from "next/link";
import {FC, useContext} from "react";
import {UiContext} from "../../context/ui";

interface Props {
  category: "clothing" | "accessories" | "none";
  subcategories?: string[];
}

export const Category: FC<Props> = ({category, subcategories}) => {
  const {categoryActive, changeCategoryActive} = useContext(UiContext);

  return (
    <div className="flex flex-col items-center gap-12">
      <Link href={`/category/${category}`} passHref>
        <a
          className={
            "capitalize text-5xl md:text-4xl font-medium xl:text-5xl hover:text-quinary " +
            (categoryActive === "none" || categoryActive === category
              ? "scale-100 "
              : "scale-90 ") +
            "transition duration-500 ease-in-out"
          }
          onMouseEnter={() => changeCategoryActive(category)}
          onMouseLeave={() => changeCategoryActive("none")}
          onClick={() => changeCategoryActive("none")}
        >
          {category}
        </a>
      </Link>
    </div>
  );
};
