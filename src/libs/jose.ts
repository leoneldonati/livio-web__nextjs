import { type JWTPayload, SignJWT } from "jose";
import "server-only";

const SESSION_SECRET = process.env.SESSION_SECRET ?? crypto.randomUUID();
const encodedSecret = new TextEncoder().encode(SESSION_SECRET);
export async function encrypt(payload: JWTPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedSecret);
}
