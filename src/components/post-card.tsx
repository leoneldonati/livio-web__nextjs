import type { Post } from "@/definitions";
import Image from "next/image";
import PostCreatedInfo from "./ui/post-created-info";
import ExpandableMenu from "./ui/post-expandable-menu";
import PostAssets from "./post-assets";
import Link from "next/link";
import LikeBtn from "./ui/post-like-btn";
import { getSession } from "@/utils/session";

export default async function PostCard({ post }: { post: Post }) {
  const session = await getSession();

  if (!session) return;

  const adminId = session.userId;
  return (
    <article className="w-full flex flex-row p-2 gap-1 border-t border-b border-black/60 relative">
      {/* SEPARADOR IZQUIERDO */}
      <div className=" flex">
        <Link href={`/${post.author.username}`} className="w-full">
          <Image
            src={post.author.avatar?.secureUrl ?? ""}
            alt={post.author.name}
            width={post.author.avatar?.width}
            height={post.author.avatar?.height}
            className="object-cover object-center aspect-square rounded-full max-w-[55px]"
          />
        </Link>
      </div>

      {/* SEPARADOR DERECHO */}
      <div className="flex flex-col flex-1">
        <header className="flex flex-row items-center gap-1 [&>span]:text-black/60">
          <h2>
            <strong>{post.author.name}</strong>
          </h2>

          <span>
            <Link href={`/${post.author.username}`}>
              @{post.author.username}
            </Link>
          </span>

          <span className="w-1 h-1 rounded-full bg-black/60"></span>
          <PostCreatedInfo created={post.created} />

          <div className="flex flex-1 justify-end items-center relative">
            <ExpandableMenu id={post._id.toString()} />
          </div>
        </header>

        <p>{post.content}</p>

        {post.assets && (
          <PostAssets id={post._id.toString()} assets={post.assets} />
        )}

        <div className="mt-2 flex flex-row justify-center gap-4">
          <LikeBtn likes={post.likes} from={adminId} to={post._id.toString()} />

          {/* <CommentBtn comments={post.comments} from={adminId} to={post._id} /> */}
        </div>
      </div>
    </article>
  );
}
