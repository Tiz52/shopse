import {useContext} from "react";
import {UiContext} from "../../context/ui";
import {MenuWrapper, Navbar} from "../ui";

export const Header = () => {
  const {isMenuOpen, closeMenu} = useContext(UiContext);

  return (
    <header className="fixed z-[10] top-0 w-full">
      <div className="px-6 pt-4 md:px-10 lg:px-14">
        <Navbar />
        <MenuWrapper isOpen={isMenuOpen} closeMenu={closeMenu} />
      </div>
    </header>
  );
};
