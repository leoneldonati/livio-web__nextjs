"use client";

import {
  IconBellRinging2,
  IconHome2,
  IconMenu2,
  IconMenu3,
  IconUser,
  IconUserSearch,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 640;
export default function AsideMenu({ username }: { username: string }) {
  const [opened, setOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(
    window.screen.width <= MOBILE_BREAKPOINT
  );

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const handler = () => {
    if (window.screen.width <= MOBILE_BREAKPOINT) return setIsMobile(true);

    setIsMobile(false);
    setOpened(true);
  };
  useEffect(() => {
    document.addEventListener("resize", handler);

    return () => document.removeEventListener("resize", handler);
  }, []);

  useEffect(() => {
    setOpened(false);
  }, [pathname, searchParams]);
  return (
    <div className="relative w-full grid place-items-center">
      <ul
        className={`flex flex-row-reverse justify-center rounded-md bg-white md:bg-transparent  transition-transform md:justify-self-start w-full md:w-fit md:flex-col 
          ${!opened && "translate-y-40"} 
          ${!opened && "opacity-0"}
          ${!opened && "hidden"}
          ${isMobile && "absolute top-[-200%]  z-30"}
          `}
      >
        <li>
          <Link
            href="/search"
            className="px-5 py-3  transition-colors md:border-b border-black/60 hover:bg-accent flex items-center gap-1"
          >
            <IconUserSearch />
            <span className="hidden md:block">Buscar</span>
          </Link>
        </li>
        <li>
          <Link
            href="/admin/notifications"
            className="px-5 py-3  transition-colors md:border-b border-black/60 hover:bg-accent flex items-center gap-1"
          >
            <IconBellRinging2 />
            <span className="hidden md:block">Notificaciones</span>
          </Link>
        </li>
        <li>
          <Link
            href={`/${username}`}
            className="px-5 py-3  transition-colors md:border-b border-black/60 hover:bg-accent flex items-center gap-1"
          >
            <IconUser />
            <span className="hidden md:block">Perfil</span>
          </Link>
        </li>
        <li>
          <Link
            href="/feed"
            className="px-5 py-3  transition-colors  hover:bg-accent flex items-center gap-1"
          >
            <IconHome2 />
            <span className="hidden md:block">Inicio</span>
          </Link>
        </li>
      </ul>

      <button
        type="button"
        className={`flex flex-row gap-2 text-accent bg-accent p-2 rounded-full transition-transform active:scale-95 [&:active>svg]:scale-95 ${
          !isMobile && "hidden"
        }`}
        onClick={() => setOpened(!opened)}
      >
        <IconMenu3
          width={20}
          height={20}
          className={`${
            opened ? "opacity-0" : "opacity-100"
          }  transition bg-background  rounded-full p-1`}
        />
        <IconMenu2
          width={20}
          height={20}
          className={`${
            !opened ? "opacity-0" : "opacity-100"
          }  transition bg-background rounded-full p-1`}
        />
      </button>
    </div>
  );
}
