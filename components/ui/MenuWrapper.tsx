import {
  ChartPieIcon,
  ClipboardIcon,
  LogoutIcon,
  SearchIcon,
  TicketIcon,
  UserCircleIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/outline";
import {AnimatePresence, motion} from "framer-motion";
import {useRouter} from "next/router";
import {ChangeEvent, FC, useState} from "react";
import {useOuterClick} from "../../hooks";
import {FramerButton} from "./FramerButton";

const backdropVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const modalVariants = {
  hidden: {
    opacity: 0,
    width: 0,
  },
  show: {
    opacity: 1,
    width: 300,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    width: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

interface Props {
  isOpen: boolean;
  closeMenu: () => void;
}

export const MenuWrapper: FC<Props> = ({isOpen, closeMenu}) => {
  const [onHovered, setOnHovered] = useState("none");
  const [searchTerm, setSearchTerm] = useState("");
  const ref = useOuterClick();
  const router = useRouter();

  const navigateTo = (path: string) => {
    setSearchTerm("");
    closeMenu();
    router.push(path);
  };

  const onSearchTerm = () => {
    if (searchTerm.trim().length === 0) return;

    navigateTo(`/search/${searchTerm}`);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="show"
          exit="exit"
          className="absolute inset-0 z-[30] w-screen h-screen bg-primary/75"
        >
          <motion.div
            className="absolute z-[40] w-72 right-10 lg:right-16 flex flex-col justify-center py-6 px-4 top-[80px] bg-white shadow-lg"
            variants={modalVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            ref={ref}
            onMouseLeave={() => setOnHovered("none")}
          >
            <div className="relative z-[1] flex items-end overflow-hidden rounded-lg border-primary">
              <input
                className="w-full h-10 px-4 transition duration-300 ease-in-out border-b-2 appearance-none text-primary md:text-xs lg:text-sm xl:text-lg bg-tertiary focus:border-primary focus:outline-none placeholder:text-primary"
                type="text"
                placeholder="Buscar..."
                value={searchTerm}
                onKeyPress={(e) => e.key === "Enter" && onSearchTerm()}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <SearchIcon
                onClick={() => onSearchTerm()}
                className="absolute flex h-5 cursor-pointer text-primary bottom-2 right-3"
              />
            </div>

            <motion.div className="flex flex-col mt-4 divide-y-2" layout>
              <div className="flex flex-col mb-2">
                <FramerButton
                  onHovered={onHovered}
                  onMouseEnter={() => setOnHovered("Usuario")}
                  title="Usuario"
                >
                  <UserCircleIcon className="h-5 text-primary" />
                </FramerButton>

                <FramerButton
                  onHovered={onHovered}
                  onMouseEnter={() => setOnHovered("Hombres")}
                  title="Hombres"
                  onClick={() => navigateTo("/category/men")}
                  mobile
                >
                  <ClipboardIcon className="h-5 text-primary" />
                </FramerButton>

                <FramerButton
                  onHovered={onHovered}
                  onMouseEnter={() => setOnHovered("Mujeres")}
                  onClick={() => navigateTo("/category/men")}
                  title="Mujeres"
                  mobile
                >
                  <ClipboardIcon className="h-5 text-primary" />
                </FramerButton>

                <FramerButton
                  onHovered={onHovered}
                  onMouseEnter={() => setOnHovered("Niños")}
                  onClick={() => navigateTo("/category/men")}
                  title="Niños"
                  mobile
                >
                  <ClipboardIcon className="h-5 text-primary" />
                </FramerButton>

                <FramerButton
                  onHovered={onHovered}
                  onMouseEnter={() => setOnHovered("Mis Ordenes")}
                  title="Mis Ordenes"
                >
                  <TicketIcon className="h-5 text-primary" />
                </FramerButton>

                <FramerButton
                  onHovered={onHovered}
                  onMouseEnter={() => setOnHovered("Cerrar Sesión")}
                  title="Cerrar Sesión"
                >
                  <LogoutIcon className="h-5 text-primary" />
                </FramerButton>
              </div>
              <div className="flex flex-col">
                <span className="mt-2 mb-2 text-sm font-semibold">
                  Admin Panel
                </span>

                <FramerButton
                  onHovered={onHovered}
                  onMouseEnter={() => setOnHovered("Dashboard")}
                  title="Dashboard"
                >
                  <ChartPieIcon className="h-5 text-primary" />
                </FramerButton>

                <FramerButton
                  onHovered={onHovered}
                  onMouseEnter={() => setOnHovered("Productos")}
                  title="Productos"
                >
                  <ViewGridIcon className="h-5 text-primary" />
                </FramerButton>

                <FramerButton
                  onHovered={onHovered}
                  onMouseEnter={() => setOnHovered("Órdenes")}
                  title="Órdenes"
                >
                  <TicketIcon className="h-5 text-primary" />
                </FramerButton>

                <FramerButton
                  onHovered={onHovered}
                  onMouseEnter={() => setOnHovered("Usuarios")}
                  title="Usuarios"
                >
                  <UserGroupIcon className="h-5 text-primary" />
                </FramerButton>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
