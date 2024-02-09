import { Box } from "@mui/material";
import { Post } from "./Post";
import { posts } from "../data";

export const Feed = () => {
  return (
    <Box flex={4} p={2}>
      {posts.map((post) => (
        <Post
          key={post.username}
          title={post.username}
          content={post.content}
          date={post.date}
          imgUrl={post.img}
        />
      ))}
    </Box>
  );
};
