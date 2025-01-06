"use client";

import { logout } from "@/actions/auth";
import { IconLogout } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export default function CloseSessionBtn() {
  const router = useRouter();
  const handleCloseSession = async () => {
    if (await logout()) {
      router.push("/login");
    }
  };
  return (
    <button
      type="button"
      onClick={handleCloseSession}
      className="px-5 py-3 rounded-md transition-colors hover:bg-red-500 hover:text-white flex flex-row items-center gap-1"
    >
      <IconLogout /> Cerrar sesión
    </button>
  );
}
