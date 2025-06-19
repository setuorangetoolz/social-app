import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  Stack,
  TextField,
} from "@mui/material";
import { useFieldArray, useFormContext } from "react-hook-form";
import type { Post, POST_ON } from "../../../../helper/SocialPostConstant";

const PostForm = ({ activePlatform }: { activePlatformIdx: POST_ON }) => {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext<{ posts: Post[] }>();
  const { fields } = useFieldArray({ control, name: "posts" });

  // if (!fields.length) return null;

  // const idx = activePlatformIdx >= fields.length ? 0 : activePlatformIdx;
  // const field = fields[idx];

  return (
    <Box sx={{ width: "100%", maxWidth: 700, mx: "auto", p: 3 }}>
      <Stack gap={2} alignItems={"flex-start"}>
        <FormControl fullWidth>
          <InputLabel sx={{ position: "relative", transform: "none" }}>
            Author
          </InputLabel>
          <TextField
            type="text"
            {...register(`posts.${idx}. author`, {
              required: "Author is required",
            })}
            error={!!errors.posts?.[idx]?.author}
          />
          <FormHelperText>
            {errors.posts?.[idx]?.author?.message}
          </FormHelperText>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel sx={{ position: "relative", transform: "none" }}>
            Content
          </InputLabel>
          <TextField
            type="text"
            multiline
            rows={4}
            {...register(`posts.${idx}.content`, {
              required: "Content is required",
            })}
          />
          <FormHelperText>
            {errors.posts?.[idx]?.content?.message}
          </FormHelperText>
        </FormControl>
      </Stack>
    </Box>
  );
};

export default PostForm;
