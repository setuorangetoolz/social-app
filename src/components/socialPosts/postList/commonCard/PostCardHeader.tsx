import React from "react";
import { Avatar, Badge, Box, Stack, Typography } from "@mui/material";
import BoldFirstEightWords from "./BoldFirstEightWords";
import { AccessTime, Facebook } from "@mui/icons-material";

interface IProps {
  content: string;
  profileImage: string;
  profileName: string;
  isCustom?: boolean;
}

const PostCardHeader: React.FC<IProps> = ({
  content,
  profileImage,
  profileName,
  isCustom = false,
}) => {
  return (
    <Stack justifyContent="space-between">
      <Box display="flex" alignItems="center" gap={1}>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={
            <Avatar sx={{ width: 14, height: 14 }}>
              <Facebook  />
            </Avatar>
          }
        >
          <Avatar
            sx={{ width: 28, height: 28 }}
            alt={profileName}
            src={profileImage}
          />
        </Badge>

        <Box>
          <Typography variant="caption" fontWeight={600}>
            {profileName}
          </Typography>
          <Stack direction="row" alignItems="center" gap={1}>
           
            {isCustom && (
              <Typography
                fontSize={12}
                variant="caption"
                color="text.secondary"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  "& svg": { fontSize: 16 },
                }}
              >
                <AccessTime /> custom
              </Typography>
            )}

            {/* ## Post Type == POST | REELS | STORY ## */}
            {/* <Chip
              size='xSmall'
              label='short'
              icon={<YoutubeShortIcon />}
              sx={{ color: '#7E7777', '& svg': { color: '#7E7777 !important' } }}
            /> */}
          </Stack>
        </Box>
      </Box>

      {/* Content */}
      <BoldFirstEightWords text={content} />
    </Stack>
  );
};

export default PostCardHeader;
