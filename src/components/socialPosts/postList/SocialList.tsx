import { Stack } from "@mui/material";
import PostCard from "./commonCard/PostCard";

const postInfo = {
  content: "this is content",
  author: "setu",
  media_urls: ["string"],
  post_id: "1",
  post_on: "FACEBOOK",
};

const SocialList = () => {
  return (
    <Stack gap={2} maxWidth={700} p={2} sx={{ mx: "auto" }}>
      <PostCard postInfo={postInfo} />
    </Stack>
  );
};

export default SocialList;
