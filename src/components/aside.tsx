import { getSession } from "@/utils/session";
import { Suspense } from "react";
import Avatar from "./avatar";
import AvatarSkelleton from "./skelletons/avatar";
import { getUserBy } from "@/actions/user";
import CloseSessionBtn from "./ui/close-session-btn";
import AsideMenu from "./ui/aside-menu";

export default async function Aside() {
  const session = await getSession();
  if (!session) return;

  const { user } = await getUserBy(session.userId);

  return (
    <aside
      className={`sticky w-full md:w-fit bottom-0  flex flex-row md:flex-col items-center  justify-between backdrop-blur gap-[16px] py-[10px] px-[4px] ${
        !session && "hidden"
      }`}
    >
      <Suspense fallback={<AvatarSkelleton />}>
        <Avatar id={session.userId} />
      </Suspense>

      <AsideMenu username={user?.username} />

      <CloseSessionBtn />
    </aside>
  );
}
