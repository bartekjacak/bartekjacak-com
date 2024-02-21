import { usePosts } from "~/content/usePosts";

import { LimitedItemsList } from "../LimitedItemsList";

import Post from "./Post";

type Props = {
  posts: ReturnType<typeof usePosts>;
};

export default function PostsSection({ posts }: Props) {
  return (
    <LimitedItemsList
      title="posts"
      items={posts}
      itemRenderer={(props) => <Post key={props.url} {...props} />}
    />
  );
}
