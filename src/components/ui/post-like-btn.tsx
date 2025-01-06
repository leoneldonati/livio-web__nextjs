"use client";
import { giveLike, quitLike } from "@/actions/post";
import { useState } from "react";

type Props = {
  likes: string[];
  from: string;
  to: string;
};
export default function LikeBtn({ likes, from, to }: Props) {
  const [likesCount, setLikesCount] = useState(likes.length);
  const [hasLiked, setHasLiked] = useState(
    likes.find((id) => id === from) !== undefined
  );

  const handleClick = async () => {
    if (hasLiked) {
      setLikesCount(likesCount - 1);
      setHasLiked(false);

      const ok = (await quitLike(from, to)) !== false;

      if (!ok) {
        setLikesCount(likesCount + 1);
        setHasLiked(true);
      }
    } else {
      setLikesCount(likesCount + 1);
      setHasLiked(true);

      const ok = (await giveLike(from, to)) !== false;

      if (!ok) {
        setLikesCount(likesCount - 1);
        setHasLiked(false);
      }
    }
  };
  return (
    <button
      className="flex flex-row items-end gap-1 transition [&:hover>svg]:scale-105"
      onClick={handleClick}
      style={{
        filter: hasLiked ? `drop-shadow(0 0 6px rgb(220,20,60))` : "",
        color: hasLiked ? `rgb(220,20,60)` : "rgba(0,0,0,.8)",
      }}
      title={hasLiked ? "¡Quitar me gusta!" : "¡Me gusta!"}
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="w-6 h-auto transition text-inherit fill-inherit"
        style={{
          fill: hasLiked ? `rgb(220,20,60)` : "white",
        }}
      >
        <g>
          <path
            stroke={hasLiked ? "rgb(220,20,60)" : "rgba(0,0,0,.7)"}
            strokeWidth="2"
            d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"
          ></path>
        </g>
      </svg>

      {likesCount}
    </button>
  );
}
