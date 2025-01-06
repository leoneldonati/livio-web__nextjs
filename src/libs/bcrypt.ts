import { compare } from "bcrypt";
export async function compareHash(payload: string, hash: string) {
  return compare(payload, hash).then((match) => match);
}
