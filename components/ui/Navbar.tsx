import Link from "next/link";
import {
  SearchIcon,
  MenuAlt1Icon,
} from "@heroicons/react/outline";
import {FC, useContext} from "react";
import {CartIconBadge} from "./CartIconBadge";
import { UiContext } from "../../context/ui";


interface Props {

}

export const Navbar: FC<Props> = () => {

  const {openModal} = useContext(UiContext);


  return (
    <nav  className="bg-tertiary rounded-xl relative px-4 flex h-14 z-[20] text-primary">
      <div className="flex items-center justify-between w-full ">
        <div className="text-3xl font-bold transition duration-100 ease-in-out hover:scale-105 hover:text-quaternary ">
          <Link href={"/"} passHref>
            <a>{"Shopse."} </a>
          </Link>
        </div>

        <div className="hidden gap-4 xl:flex text-primary">
          <Link href={"/category/men"} passHref>
          <a className="text-lg font-medium transition duration-100 ease-in-out hover:scale-105 hover:text-quaternary">
              Hombres
            </a>
          </Link>
          <Link href={"/category/women"} passHref>
            <a className="text-lg font-medium transition duration-100 ease-in-out hover:scale-105 hover:text-quaternary">
            Mujeres
            </a>
          </Link>
          <Link href={"/category/kid"} passHref>
          <a className="text-lg font-medium transition duration-100 ease-in-out hover:scale-105 hover:text-quaternary">          
                Niños            
            </a>
          </Link>
        </div>

        <div className="flex gap-2 md:gap-4" >
          <Link href="/search" passHref>
            <a className="transition duration-100 ease-in-out hover:scale-105 hover:text-quaternary">
              <SearchIcon className="w-6 h-6" />
            </a>
          </Link>
          <Link href="/cart" passHref>
            <a className="hover:scale-105 hover:text-quaternary">
              <CartIconBadge quantity={5} />
            </a>
          </Link>
          <div className="cursor-pointer" onClick={openModal}>
            <MenuAlt1Icon className="w-6 h-6 transition duration-100 ease-in-out hover:scale-105 hover:text-quaternary" />
          </div>
        </div>
      </div>
    </nav>
  );
};
