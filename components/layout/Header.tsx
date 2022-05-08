import { useContext } from "react";
import { UiContext } from "../../context/ui";
import {MenuWrapper, Navbar} from "../ui";

export const Header = () => {

  const {isModalOpen} = useContext(UiContext);

  return (
    <header className="fixed z-[10] top-0 w-full">
      <div className="px-4 pt-4 lg:px-12">
        <Navbar />
        <MenuWrapper isOpen={isModalOpen} />
      </div>
    </header>
  );
};
