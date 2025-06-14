import { Button, Divider, Paper, Stack, Tab, Tabs } from "@mui/material";
import React from "react";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import { type Post, type POST_ON } from "../../helper/SocialPostConstant";
import CreateSocialPost from "./createList/CreateSocialPost";
import SocialList from "./postList/SocialList";

// const FormContext = React.createContext<SubmitHandler<Post> | null>(null);

const SocialPostDashboard = () => {
  const [tab, setTab] = React.useState(1);
  const methods = useForm<{ posts: Post[] }>({
    defaultValues:{
      posts:[]
    }
  });
  const { setValue, watch } = methods;
  const posts = watch("posts");

  const handleChange = (event: React.SyntheticEvent, newTab: number) => {
    setTab(newTab);
  };
  const handlePlatformClick = (platformType: POST_ON) => {
    const existingPost = posts.find((post) => post.type === platformType);
    if (existingPost) {
      setValue(
        "posts",
        posts.filter((post) => post.type !== platformType)
      );
    } else {
      setValue("posts", [
        ...posts,
        {
          type: platformType,
          author: "",
          content: "",
          post_on: platformType,
          post_id: "",
        },
      ]);
    }
  };
  const onSubmit: SubmitHandler<{posts : Post[]}> = (data) => console.log(data);

  return (
    // <FormContext.Provider value={onSubmit}>
      <FormProvider {...methods}>
        <Paper variant="outlined" sx={{ height: "100vh" }}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            pr={2}
          >
            <Tabs
              value={tab}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Create" value={1} />
              <Tab label="View" value={2} />
            </Tabs>
            <Button
              variant="contained"
              sx={{ ml: "auto" }}
              onClick={methods.handleSubmit(onSubmit)}
            >
              Post
            </Button>
          </Stack>

          <Divider />
          {tab === 1 && (
            <CreateSocialPost
              posts={posts}
              onPlatformClick={handlePlatformClick}
            />
          )}
          {tab === 2 && <SocialList />}
        </Paper>
      </FormProvider>
    // </FormContext.Provider>
  );
};

export default SocialPostDashboard;
