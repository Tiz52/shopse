import Link from "next/link";
import {
  SearchIcon,
  UserIcon,
  ShoppingBagIcon,
  MenuAlt1Icon,
} from "@heroicons/react/outline";
import {FC} from "react";
import {useRouter} from "next/router";

interface Props {
  handleMenu: () => void;
}

export const Navbar: FC<Props> = ({handleMenu}) => {
  const router = useRouter();

  return (
    <nav className="relative flex h-14 z-[2] text-gray-100">
      <div className="flex items-center justify-between w-full ">
        <div
          className={`text-3xl font-semibold ${
            router.asPath.includes("product") && "text-black"
          } hover:text-secondary hover:scale-105 transition duration-300`}
        >
          <Link href={"/"} passHref>
            <a className="font-bold">{"Shopse."} </a>
          </Link>
        </div>

        <div className="hidden gap-4 xl:flex">
          <Link href={"/category/men"} passHref>
            <a
              className={`text-lg ${
                router.asPath.includes("product") && "text-black"
              } hover:text-secondary`}
            >
              Hombres
            </a>
          </Link>
          <Link href={"/category/women"} passHref>
            <a className="text-lg hover:text-secondary">
              <span
                className={`text-lg ${
                  router.asPath.includes("product") && "text-black"
                } hover:text-secondary`}
              >
                Muj
              </span>
              <span className="text-lg">eres</span>
            </a>
          </Link>
          <Link href={"/category/kid"} passHref>
            <a className="text-lg hover:text-secondary">Niños</a>
          </Link>
        </div>

        <div className="flex gap-1 md:gap-4">
          <div className="icon">
            <SearchIcon className="h-[22px] text-[#d9d9d9] hover:text-secondary" />
          </div>
          <div className="icon">
            <UserIcon className="h-[22px] text-[#d9d9d9] hover:text-secondary" />
          </div>
          <div className="icon">
            <ShoppingBagIcon className="h-[22px] text-[#d9d9d9] hover:text-secondary" />
          </div>
          <div className="icon" onClick={handleMenu}>
            <MenuAlt1Icon className="h-[22px] text-[#d9d9d9] hover:text-secondary" />
          </div>
        </div>
      </div>
    </nav>
  );
};
