import {FC} from "react";

interface Props {
  isOpen: boolean;
}

export const MenuWrapper: FC<Props> = ({isOpen}) => {
  return (
    <div
      className={`${
        isOpen ? "flex" : "hidden"
      } bg-blue-400 w-96 relative top-0 right-0 left-auto`}
    >
      {/* <div className="relative right-0 h-screen max-w-md bg-orange-600"> */}
      <h1>Menú</h1>
      {/* </div> */}
    </div>
  );
};
