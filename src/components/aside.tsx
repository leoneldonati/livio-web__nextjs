import {
  IconBellRinging2,
  IconHome2,
  IconLogout,
  IconUser,
  IconUserSearch,
} from "@tabler/icons-react";
import Link from "next/link";
import { getSession } from "@/utils/session";
import { Suspense } from "react";
import Avatar from "./avatar";
import AvatarSkelleton from "./skelletons/avatar";
export default async function Aside() {
  const session = await getSession();
  if (!session) return;
  return (
    <aside
      className={`sticky w-fit top-0 flex flex-col items-center backdrop-blur gap-[16px] py-[10px] px-[4px] ${
        !session && "hidden"
      }`}
    >
      <Suspense fallback={<AvatarSkelleton />}>
        <Avatar id={session.signedUserId as string} />
      </Suspense>
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
