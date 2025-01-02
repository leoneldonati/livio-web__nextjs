import {
  IconBellRinging2,
  IconHome2,
  IconLogout,
  IconUser,
  IconUserSearch,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function Aside() {
  return (
    <aside className="sticky w-fit top-0 flex flex-col items-center backdrop-blur gap-[16px] py-[10px] px-[4px]">
      <Image
        src=""
        alt=""
        className="w-[90px] h-[90px] rounded-full bg-gray-300 animate-pulse"
        slot="fallback"
      />
      <ul className="flex flex-row-reverse justify-center md:justify-self-start w-full md:flex-col">
        <li>
          <Link
            href="/search"
            className="px-5 py-3 rounded-lg transition-colors hover:bg-[rgba(134,290,110,.8)] flex items-center gap-1"
          >
            <IconUserSearch />
            <span className="hidden md:block">Buscar</span>
          </Link>
        </li>
        <li>
          <Link
            href="/admin/notifications"
            className="px-5 py-3 rounded-lg transition-colors hover:bg-[rgba(134,290,110,.8)] flex items-center gap-1"
          >
            <IconBellRinging2 />
            <span className="hidden md:block">Notificaciones</span>
          </Link>
        </li>
        <li>
          <Link
            href="/profile"
            className="px-5 py-3 rounded-lg transition-colors hover:bg-[rgba(134,290,110,.8)] flex items-center gap-1"
          >
            <IconUser />
            <span className="hidden md:block">Perfil</span>
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="px-5 py-3 rounded-lg transition-colors hover:bg-[rgba(134,290,110,.8)] flex items-center gap-1"
          >
            <IconHome2 />
            <span className="hidden md:block">Inicio</span>
          </Link>
        </li>
      </ul>

      <div>
        <Link
          href="/logout"
          className="px-5 py-3 rounded-lg transition-colors hover:bg-[rgba(134,290,110,.8)] flex flex-row items-center gap-1"
        >
          <IconLogout /> Cerrar sesión
        </Link>
      </div>
    </aside>
  );
}
