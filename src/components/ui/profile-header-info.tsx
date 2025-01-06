"use client";

import type { Asset } from "@/definitions";
import Image from "next/image";
import { useEffect, useRef } from "react";

type Props = {
  name: string;
  postsCount: number;
  avatar: Asset;
};
export default function ProfileHeaderInfo({ name, postsCount, avatar }: Props) {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const BREAK_POINT = 360;

  const handler = () => {
    const scrollY = window.scrollY;

    if (scrollY >= BREAK_POINT && imgRef.current != null) {
      imgRef.current.style.opacity = "1";
      imgRef.current.style.transform = "scale(1)";
    } else {
      imgRef.current!.style.opacity = "0";
      imgRef.current!.style.transform = "scale(.5)";
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <header className="sticky top-0 z-30 w-full flex flex-row items-center justify-between px-[13px] py-[6px] bg-white/60 backdrop-blur">
      <div className="flex flex-col">
        <strong>{name}</strong>
        <span>
          <strong>{postsCount}</strong> posts.
        </span>
      </div>

      <Image
        src={avatar.secureUrl}
        width={avatar.width}
        height={avatar.height}
        alt={name}
        ref={imgRef}
        className="w-[55px] h-[55px] aspect-square object-cover object-center rounded-full transition opacity-0 scale-50"
      />
    </header>
  );
}
