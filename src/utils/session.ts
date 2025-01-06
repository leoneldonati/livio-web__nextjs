import { decrypt } from "@/libs/jose";
import { cookies } from "next/headers";
import "server-only";
export async function createSession(token: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const cookieStore = await cookies();
  const cookieName = "session";
  cookieStore.set(cookieName, token, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

export async function getSession() {
  const cookieStore = await cookies();
  const cookieName = "session";
  const session = cookieStore.get(cookieName);

  if (!session) return false;

  const decrypted = await decrypt(session.value);

  if (!decrypted) return false;

  return decrypted;
}
