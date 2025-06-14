import { Divider, Stack } from "@mui/material";
import PostForm from "./postForm/PostForm";
import SocialPlatforms from "./socialsPlatforms/SocialPlatforms";
import type { Post, POST_ON } from "../../../helper/SocialPostConstant";

interface SocialPlatformProps {
  posts:Post[]
    onPlatformClick: (platformType: POST_ON) => void; // Add this property
}

const CreateSocialPost = ({
  posts,
  onPlatformClick,
}: SocialPlatformProps) => {
  return (
    <Stack component={"form"} direction={"row"} height={"calc(100% - 50px)"}>
      <SocialPlatforms
        posts={posts}
        onPlatformClick={onPlatformClick}
      />
      <Divider orientation="vertical" flexItem sx={{ height: "100%" }} />
      <PostForm />
    </Stack>
  );
};

export default CreateSocialPost;
