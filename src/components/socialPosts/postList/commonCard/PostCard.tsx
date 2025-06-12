import { Add } from "@mui/icons-material";
import { Button, Paper, Stack } from "@mui/material";
import React from "react";
import type { Post } from "../../../../helper/SocialPostConstant";
import CardFooter from "./CardFooter";
import MediaBox from "./MediaBox";
import PostCardHeader from "./PostCardHeader";

interface IProps {
  postInfo: Post;
}

const PostCard: React.FC<IProps> = ({ postInfo }) => {
  const { post_id, content, media_urls, post_on, author } = postInfo || {};
  return (
    <Stack gap={1} alignItems="flex-start">
      <Paper
        variant="outlined"
        sx={{
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          width: "100%",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          gap={3}
          p={2.5}
          pb={3}
        >
          {/* Header */}
          <PostCardHeader
            content={content}
            profileImage={""}
            profileName={author}
          />
          {/* Media */}
          {media_urls && media_urls.length > 0 && (
            <MediaBox media_urls={media_urls} />
          )}
        </Stack>

        {/* Footer */}
        <CardFooter postInfo={postInfo} />
      </Paper>

      <Button
        variant="text"
        color="inherit"
        sx={{ color: "text.secondary" }}
        startIcon={
          <Add
            sx={{
              bgcolor: "primary.light",
              borderRadius: "50%",
              color: "primary.main",
            }}
          />
        }
        onClick={() => console.log("Add post clicked", post_id, post_on)}
      >
        Add post
      </Button>
    </Stack>
  );
};

export default PostCard;
