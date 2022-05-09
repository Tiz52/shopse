import {useState} from "react";

import {HeartIcon as HeartIconOut} from "@heroicons/react/outline";
import {HeartIcon as HeartIconSolid} from "@heroicons/react/solid";

export const FavoriteButton = () => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <button
      className="transition-transform duration-200 group hover:scale-105"
      onClick={() => setIsLiked(!isLiked)}
    >
      {isLiked ? (
        <HeartIconSolid className="h-8 text-quaternary" />
      ) : (
        <HeartIconOut className="h-8 text-quaternary " />
      )}
    </button>
  );
};
