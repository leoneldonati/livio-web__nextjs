import { getPostsByUserId } from "@/actions/post";
import PostCard from "./post-card";

export default async function UserPostsFeed({ userId }: { userId: string }) {
  const posts = await getPostsByUserId(userId);
  return (
    <div>
      {posts?.map((post) => (
        <PostCard key={post._id.toString()} post={post} />
      ))}
    </div>
  );
}
