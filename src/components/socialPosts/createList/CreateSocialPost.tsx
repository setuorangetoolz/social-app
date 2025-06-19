import { Divider, Stack } from "@mui/material";
import { useState } from "react";
import {
  POST_ON_CONSTANT,
  type Post,
  type POST_ON,
} from "../../../helper/SocialPostConstant";
import SocialPlatforms from "./socialsPlatforms/SocialPlatforms";

interface SocialPlatformProps {
  posts: Post[];
  onPlatformClick: (platformType: POST_ON) => void; // Add this property
}

const CreateSocialPost = ({ posts, onPlatformClick }: SocialPlatformProps) => {
  const [activePlatform, setActivePlatform] = useState<POST_ON>(
    POST_ON_CONSTANT.FACEBOOK
  );

  //  const activePlatform = posts?.map((post) => post.type);
  const handleActivePlatform = (platform: POST_ON) => {
    setActivePlatform(platform);
  };
  console.log("activePlatform", activePlatform);

  return (
    <Stack component={"form"} direction={"row"} height={"calc(100% - 50px)"}>
      <SocialPlatforms
        posts={posts}
        onPlatformClick={onPlatformClick}
        handleActivePlatform={handleActivePlatform}
        activePlatform={activePlatform}
      />
      <Divider orientation="vertical" flexItem sx={{ height: "100%" }} />
      {/* <PostForm activePlatform={activePlatform} /> */}
    </Stack>
  );
};

export default CreateSocialPost;
