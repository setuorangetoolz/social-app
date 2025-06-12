import React from "react";
import {
  Backdrop,
  Button,
  type ButtonProps,
  CircularProgress,
} from "@mui/material";

interface Props extends ButtonProps {
  isLoading?: boolean;
  loadingText?: string;
}

const LoadingButton: React.FC<Props> = ({
  variant = "contained",
  size = "large",
  isLoading = false,
  loadingText = "",
  disabled = false,
  startIcon,
  children,
  ...rest
}) => {
  const handleOutSiteClick = () => {
    //  do nothing
  };

  return (
    <>
      <Button
        variant={variant}
        size={size}
        disabled={isLoading || disabled}
        startIcon={
          isLoading && startIcon ? (
            <CircularProgress size={16} color={"inherit"} />
          ) : isLoading ? (
            <CircularProgress size={16} color={"inherit"} />
          ) : (
            startIcon
          )
        }
        {...rest}
      >
        {isLoading && loadingText ? loadingText : children}
      </Button>

      <Backdrop
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
        onClick={handleOutSiteClick}
        invisible={true}
      >
        {/*<CircularProgress color="inherit" />*/}
      </Backdrop>
    </>
  );
};
export default LoadingButton;
