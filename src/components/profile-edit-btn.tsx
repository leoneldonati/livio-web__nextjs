import { IconPencil } from "@tabler/icons-react";
import Link from "next/link";
type Props = {
  isAdmin: boolean;
  username: string;
  className?: string;
};
export default function ProfileEditBtn({
  isAdmin,
  username,
  className,
}: Props) {
  if (!isAdmin) return false;
  return (
    <Link
      href={isAdmin ? `/${username}/edit` : ""}
      title="Edita tu perfil."
      className={`px-5 py-3 rounded-md w-fit md:w-full bg-accent flex flex-row items-start gap-1 transition-transform hover:scale-95 ${className}`}
    >
      <IconPencil /> <span className="hidden md:flex">Editar </span>
    </Link>
  );
}
