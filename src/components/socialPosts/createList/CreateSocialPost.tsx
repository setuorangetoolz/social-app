import { Divider, Stack } from "@mui/material";
import SocialPlatforms from "./socialsPlatforms/SocialPlatforms";
import PostForm from "./postForm/PostForm";
import { useState } from "react";
import type { POST_ON } from "../../../helper/SocialPostConstant";

const CreateSocialPost = () => {
  const [activePlatform, setActivePlatform] = useState<string>("FACEBOOK");

  const handlePlatformClick = (platformType: POST_ON) => {
    setActivePlatform((prevType) =>
      prevType === platformType ? "" : platformType
    );
  };

  return (
    <Stack direction={"row"} height={"calc(100% - 50px)"}>
      <SocialPlatforms activePlatform={activePlatform} onClickPlatform={handlePlatformClick}/>
      <Divider orientation="vertical" flexItem sx={{ height: "100%" }} />
      <PostForm />
    </Stack>
  );
};

export default CreateSocialPost;
