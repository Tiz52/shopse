import {FC} from "react";

interface Props {
  onClick: () => void;
  text: string;
  color?: string;
  px?: string;
  py?: string;
}

export const CartButton: FC<Props> = ({onClick, text, px, py}) => {
  return (
    <button
      onClick={onClick}
      className={
        (px ? px : "px-6 ") +
        (py ? py : "py-3 ") +
        "overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group relative inline-flex items-center justify-start"
      }
    >
      <span className="w-48 h-48 rounded rotate-[-40deg] bg-quinary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
      <span className="relative w-full text-xs text-left transition-colors duration-300 ease-in-out text-primary md:text-sm xl:text-base group-hover:text-white">
        {text}
      </span>
    </button>
  );
};
