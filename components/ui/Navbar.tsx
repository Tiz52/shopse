import Link from "next/link";
import {
  SearchIcon,
  UserIcon,
  ShoppingBagIcon,
  MenuAlt1Icon,
} from "@heroicons/react/outline";
import {FC} from "react";

interface Props {
  handleMenu: () => void;
}

export const Navbar: FC<Props> = ({handleMenu}) => {
  return (
    <nav className="relative flex h-14 z-[2] text-gray-100 items-center">
      <div className="flex items-center justify-between w-full ">
        <div className="text-3xl font-semibold hoverAnimation">
          <Link href={"/home"} passHref>
            <a>shopse.</a>
          </Link>
        </div>

        <div className="hidden gap-4 xl:flex">
          <Link href={"/"} passHref>
            <a className="hoverAnimation">Hombres</a>
          </Link>
          <Link href={"/"} passHref>
            <a className="hoverAnimation">Mujeres</a>
          </Link>
          <Link href={"/"} passHref>
            <a className="hoverAnimation">Niños</a>
          </Link>
        </div>

        <div className="flex gap-1 md:gap-4">
          <div className="icon">
            <SearchIcon className="h-[22px] text-[#d9d9d9]" />
          </div>
          <div className="icon">
            <UserIcon className="h-[22px] text-[#d9d9d9]" />
          </div>
          <div className="icon">
            <ShoppingBagIcon className="h-[22px] text-[#d9d9d9]" />
          </div>
          <div className="icon" onClick={handleMenu}>
            <MenuAlt1Icon className="h-[22px] text-[#d9d9d9]" />
          </div>
        </div>
      </div>
    </nav>
  );
};
