import {useState} from "react";
import {MenuWrapper, Navbar} from "../ui";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="fixed z-[999] top-0 w-full">
      <div className="px-4 pt-4 md:px-6 lg:px-12">
        <Navbar handleMenu={handleMenu} />
        <MenuWrapper isOpen={isOpen} />
      </div>
    </header>
  );
};
