"use server";

import { userModel } from "@/db";
import { ObjectId } from "mongodb";

export async function getUserBy(id: string) {
  const user = await userModel.findOne({ _id: new ObjectId(id) });

  if (!user)
    return {
      ok: false,
      user: null,
    };

  return {
    ok: true,
    user,
  };
}
