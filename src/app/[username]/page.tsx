import { getPostsByUserId } from "@/actions/post";
import { getUserByUsername } from "@/actions/user";
import ProfileEditBtn from "@/components/profile-edit-btn";
import ProfileHeaderInfo from "@/components/ui/profile-header-info";
import UserPostsFeed from "@/components/user-posts-feed";
import { getSession } from "@/utils/session";
import { format } from "@formkit/tempo";
import { IconCalendarPlus, IconMapPin } from "@tabler/icons-react";
import Image from "next/image";

import { Suspense } from "react";

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;

  const { user } = await getUserByUsername(username);
  const session = await getSession();

  if (!session || !user) return;

  const isAdmin = user?._id.toString() === session.userId;

  return (
    <section className="min-h-screen relative w-full max-w-[500px] mx-auto flex flex-col">
      <ProfileHeaderInfo
        name={user?.name}
        postsCount={(await getPostsByUserId(user._id.toString())).length}
        avatar={user?.avatar}
      />

      {user?.headerPhoto && (
        <Image
          src={user?.headerPhoto.secureUrl}
          alt={`Foto de portada de @${user?.username}`}
          className="aspect-video h-[200px] object-cover object-center w-full"
          loading="lazy"
          width={user?.headerPhoto.width}
          height={user?.headerPhoto.height}
        />
      )}

      <div className="relative px-[13px] mb-4">
        <div className="w-full absolute flex justify-end -top-6 sm:-top-10 md:-top-14 left-0 z-10 px-[13px]">
          <div className="flex flex-col items-center gap-2">
            <Image
              src={user?.avatar.secureUrl}
              alt={`Foto de perfil de ${user?.name}`}
              width={user?.avatar.width}
              height={user?.avatar.height}
              className="aspect-square object-cover object-center rounded-full w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] md:w-[140px] md:h-[140px]"
              title={user?.name}
              loading="lazy"
            />

            <ProfileEditBtn
              username={user?.username}
              isAdmin={isAdmin}
              className="md:flex hidden"
            />
          </div>
        </div>

        <div className="my-[10px] flex flex-row items-center gap-4">
          <div>
            <h1 className="font-bold text-2xl">{user?.name}</h1>
            <span className="text-black/70">@{user?.username}</span>
          </div>

          <ProfileEditBtn
            username={user?.username}
            isAdmin={isAdmin}
            className="flex md:hidden"
          />
        </div>

        <p className="max-w-full md:max-w-[34ch]">{user?.bio}</p>

        <div className="my-[10px] flex flex-row gap-[10px] text-black/70 [&>#info]:flex [&>#info]:flex-row [&>#info]:items-start [&>#info]:w-fit [&>#info]:gap-1">
          <span id="info">
            <IconMapPin />
            {user?.location?.country ? user.location.country : "Sin ubicación"}
          </span>

          <span id="info">
            <IconCalendarPlus /> {isAdmin ? "Te uniste:" : "Se unió:"}{" "}
            {format(user?.created, "medium")}
          </span>
        </div>

        <div className="flex flex-row items-center mt-4 justify-center gap-2 [&>span]:flex [&>span]:flex-row [&>span]:gap-1 [&>span]:items-center [&>span]:text-black/60">
          <span>
            <strong className="text-black">{user?.followed?.length}</strong>
            Siguiendo
          </span>

          <span>
            <strong className="text-black">{user?.followers?.length}</strong>
            Seguidores
          </span>
        </div>
      </div>

      <Suspense fallback={<strong>Cargando posts...</strong>}>
        <UserPostsFeed userId={user?._id.toString()} />
      </Suspense>
    </section>
  );
}
