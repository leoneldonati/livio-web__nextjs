import { getPosts } from "@/actions/post";
import PostCard from "@/components/post-card";
import type { Post } from "@/definitions";

export default async function Feed() {
  const posts: Post[] = [];
  return (
    <section>
      {posts.map((post) => (
        <PostCard post={post} key={post._id} />
      ))}
    </section>
  );
}
