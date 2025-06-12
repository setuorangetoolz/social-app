import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  Stack,
  TextField
} from "@mui/material";
import { useFormContext } from "react-hook-form";
import type { Post } from "../../../../helper/SocialPostConstant";

const PostForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Post>();

  return (
    <Box
      component={"form"}
      // onSubmit={handleSubmit(onSubmit)}
      sx={{ width: "100%", maxWidth: 700, mx: "auto", p: 3 }}
    >
      <Stack gap={2} alignItems={"flex-start"}>
        <FormControl fullWidth>
          <InputLabel sx={{ position: "relative", transform: "none" }}>
            Author
          </InputLabel>
          <TextField
            type="text"
            {...register("author", { required: "Author is required" })}
            error={!!errors.author}
          />
          <FormHelperText>{errors.author?.message}</FormHelperText>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel sx={{ position: "relative", transform: "none" }}>
            Content
          </InputLabel>
          <TextField
            type="text"
            multiline
            rows={4}
            {...register("content", { required: "Content is required" })}
          />
          <FormHelperText>{errors.content?.message}</FormHelperText>
        </FormControl>
        {/* <Button type="submit" variant="contained" sx={{ ml: "auto" }}>
          Post
        </Button> */}
        {/* <MediaUpload /> */}
      </Stack>
    </Box>
  );
};

export default PostForm;
