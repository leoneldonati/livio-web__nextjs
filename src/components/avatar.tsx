import Image from "next/image";
import { getUserBy } from "@/actions/user";

export default async function Avatar({ id }: { id: string }) {
  const { ok, user } = await getUserBy(id);

  if (!ok) return <div></div>;

  return (
    <Image
      src={user!.avatar.secureUrl}
      alt={`Foto de perfil de ${user!.name}`}
      width={user!.avatar.width}
      height={user!.avatar.height}
      title={user!.name}
      className="w-[90px] h-[90px] rounded-full bg-gray-300 aspect-square object-cover object-center"
    />
  );
}
