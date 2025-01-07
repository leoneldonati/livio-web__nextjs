import { getPosts } from "@/actions/post";
import PostCard from "@/components/post-card";

export default async function Feed() {
  const posts = await getPosts();
  return (
    <section>
      {posts.map((post) => (
        <PostCard post={post} key={post._id} />
      ))}
    </section>
  );
}
