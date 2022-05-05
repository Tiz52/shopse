import Link from "next/link";
import {FC} from "react";

interface Props {
  subcategories: string[];
}

export const SubCategoryList: FC<Props> = ({subcategories}) => {
  return (
    <div className="grid w-full grid-cols-2 px-6 gap-y-2">
      {subcategories.map((subcategory) => (
        <Link href={"/"} passHref key={subcategory}>
          <a
            className="text-xl hover:text-[#d9d9d9] pl-[25%]
					  hover:underline capitalize"
          >
            {subcategory}
          </a>
        </Link>
      ))}
    </div>
  );
};
