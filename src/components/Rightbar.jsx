import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import { posts, users } from "../data";

export const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          {users?.map((user) => (
            <Avatar key={user.name} src={user.src} />
          ))}
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Recent Uploads
        </Typography>
        <ImageList cols={3} rowHeight={100} variant="quilted">
          {posts?.map((post) => (
            <ImageListItem key={post.username}>
              <img src={post.img} alt={post.username} />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
};
