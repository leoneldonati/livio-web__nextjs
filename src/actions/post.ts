/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { postModel } from "@/db";
import { Post } from "@/definitions";
import { ObjectId } from "mongodb";

export async function getPosts() {
  const posts = await postModel.find().sort("created", -1).toArray();

  return posts as unknown as Post[];
}
export async function getPostsByUserId(userId: string) {
  const posts = await postModel
    .find({ "author._id": userId })
    .sort("created", -1)
    .toArray();

  return posts as unknown as Post[];
}

export async function getPostsCount() {
  const posts = await postModel.find().toArray();

  return posts.length;
}

export async function giveLike(from: string, to: string) {
  const updatedPost = await postModel.findOneAndUpdate(
    { _id: new ObjectId(to) },
    { $push: { likes: from as any } },
    { returnDocument: "after" }
  );

  if (!updatedPost) return false;

  return updatedPost.likes as string[];
}

export async function quitLike(from: string, to: string) {
  const updatedPost = await postModel.findOneAndUpdate(
    { _id: new ObjectId(to) },
    { $pull: { likes: from as any } },
    { returnDocument: "after" }
  );

  if (!updatedPost) return false;

  return updatedPost.likes as string[];
}
