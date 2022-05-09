import Link from "next/link";
import {SearchIcon, MenuAlt1Icon} from "@heroicons/react/outline";
import {FC, useContext, useState} from "react";
import {CartIconBadge} from "./CartIconBadge";
import {UiContext} from "../../context/ui";
import {motion} from "framer-motion";
import {useRouter} from "next/router";

interface Props {}

export const Navbar: FC<Props> = () => {
  const {openMenu} = useContext(UiContext);

  const router = useRouter();
  const [onHovered, setOnHovered] = useState("none");

  return (
    <nav className="relative border-sec font-paragraph bg-primary border-tertiary border-t-2 border-b-2 md:px-4 flex h-14 z-[20] text-tertiary">
      <div className="flex items-center justify-between w-full font-paragraph">
        <div className="text-3xl font-headline">
          <Link href={"/"} passHref>
            <a>{"SHOPSE."} </a>
          </Link>
        </div>

        <motion.div
          className="hidden h-full md:flex text-tertiary"
          layout
          onMouseLeave={() => setOnHovered("none")}
        >
          <Link href={"/category/men"} passHref>
            <motion.a
              className={
                (router.asPath === "/category/men"
                  ? "text-primary bg-tertiary "
                  : "bg-transparent text-tertiary ") +
                "relative flex hover:text-primary justify-center text-sm lg:text-base items-center px-2 transition-colors duration-300 ease-in-out"
              }
              onMouseEnter={() => setOnHovered("men")}
            >
              HOMBRES
              {onHovered === "men" && (
                <motion.span
                  className="absolute inset-0 block w-full h-full bg-tertiary -z-[1]"
                  layoutId="button"
                />
              )}
            </motion.a>
          </Link>
          <Link href={"/category/women"} passHref>
            <motion.a
              className={
                (router.asPath === "/category/women"
                  ? "text-primary bg-tertiary "
                  : "bg-transparent text-tertiary ") +
                "relative flex hover:text-primary justify-center text-sm lg:text-base items-center px-2 transition-colors duration-300 ease-in-out"
              }
              onMouseEnter={() => setOnHovered("women")}
            >
              MUJERES
              {onHovered === "women" && (
                <motion.span
                  className="absolute inset-0 block w-full h-full bg-tertiary -z-[1]"
                  layoutId="button"
                />
              )}
            </motion.a>
          </Link>
          <Link href={"/category/kid"} passHref>
            <motion.a
              className={
                (router.asPath === "/category/kid"
                  ? "text-primary bg-tertiary "
                  : "bg-transparent text-tertiary ") +
                "relative flex hover:text-primary justify-center text-sm lg:text-base items-center px-2 transition-colors duration-300 ease-in-out"
              }
              onMouseEnter={() => setOnHovered("kid")}
            >
              NIÑOS
              {onHovered === "kid" && (
                <motion.span
                  className="absolute inset-0 block w-full h-full bg-tertiary -z-[1]"
                  layoutId="button"
                />
              )}
            </motion.a>
          </Link>
        </motion.div>

        <div className="flex gap-2 md:gap-4">
          <Link href="/search" passHref>
            <a className="transition duration-100 ease-in-out hover:scale-105 hover:text-white">
              <SearchIcon className="w-6 h-6" />
            </a>
          </Link>
          <Link href="/cart" passHref>
            <a className=" hover:text-quaternary">
              <CartIconBadge quantity={5} />
            </a>
          </Link>
          <div className="cursor-pointer" onClick={openMenu}>
            <MenuAlt1Icon className="w-6 h-6 transition duration-100 ease-in-out hover:text-white" />
          </div>
        </div>
      </div>
    </nav>
  );
};
