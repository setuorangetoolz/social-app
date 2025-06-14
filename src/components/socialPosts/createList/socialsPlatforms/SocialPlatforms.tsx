import { Facebook, Instagram } from "@mui/icons-material";
import { List, Stack, Typography } from "@mui/material";
import {
  POST_ON_CONSTANT,
  type Post,
  type POST_ON,
} from "../../../../helper/SocialPostConstant";
import PlatformItem from "./PlatformItem";

const platforms = [
  {
    name: "Facebook",
    icon: <Facebook color="primary" />,
    type: POST_ON_CONSTANT.FACEBOOK,
  },
  {
    name: "Instagram",
    icon: <Instagram sx={{ color: "#E1306C" }} />,
    type: POST_ON_CONSTANT.INSTAGRAM,
  },
];

interface SocialPlatformProps {
  posts: Post[];
  onPlatformClick: (platformType: POST_ON) => void;
}

const SocialPlatforms = ({
  posts = [],
  onPlatformClick,
}: SocialPlatformProps) => {
  const activePlatform = posts?.map((post) => post.type);
  return (
    <Stack p={2} sx={{ height: "100%" }}>
      <Typography
        variant="subtitle1"
        fontWeight={600}
        mb={2}
        sx={{ display: { xs: "none", lg: "block" } }}
      >
        Select social channels
      </Typography>
      <Typography
        variant="caption"
        fontSize={11}
        color="text.secondary"
        sx={{ display: { xs: "block", lg: "none" }, mb: 1 }}
      >
        {/* {selectedPlatforms.length} platforms */}
      </Typography>
      <List disablePadding>
        {platforms.map((platform) => (
          <PlatformItem
            //   disabled={isEditMode}
            activePlatform={activePlatform}
            onPlatformClick={onPlatformClick}
            key={platform.name}
            platformType={platform.type}
            name={platform.name}
            icon={platform.icon}
          />
        ))}
      </List>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ display: { xs: "none", lg: "block" } }}
      >
        {/* This content will be published in {selectedPlatforms.length} platforms */}
      </Typography>
    </Stack>
  );
};

export default SocialPlatforms;
