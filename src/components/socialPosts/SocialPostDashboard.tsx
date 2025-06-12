import { Button, Divider, Paper, Stack, Tab, Tabs } from "@mui/material";
import React from "react";
import CreateSocialPost from "./createList/CreateSocialPost";
import SocialList from "./postList/SocialList";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import type { Post } from "../../helper/SocialPostConstant";

const FormContext = React.createContext<SubmitHandler<Post> | null>(
  null
);

const SocialPostDashboard = () => {
  const [value, setValue] = React.useState(1);
  const methods = useForm<Post>();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const onSubmit: SubmitHandler<Post> = (data) => console.log(data);

  return (
    <FormContext.Provider value={onSubmit}>
      <FormProvider {...methods}>
        <Paper variant="outlined" sx={{ height: "100vh" }}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            pr={2}
          >
            <Tabs
              value={value}
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
          {value === 1 && <CreateSocialPost />}
          {value === 2 && <SocialList />}
        </Paper>
      </FormProvider>
    </FormContext.Provider>
  );
};

export default SocialPostDashboard;
