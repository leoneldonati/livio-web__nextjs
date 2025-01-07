import { type JWTPayload, SignJWT, jwtVerify } from "jose";
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
export async function decrypt(token: string) {
  try {
    if (!token) return false;
    const { payload } = await jwtVerify(token, encodedSecret, {
      algorithms: ["HS256"],
    });

    return payload;
  } catch (e) {
    console.error(e);
    return false;
  }
}
