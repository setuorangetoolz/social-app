import {
  Checkbox,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { useFormContext } from "react-hook-form";
import type { Post, POST_ON } from "../../../../helper/SocialPostConstant";

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  padding: "8px 12px",
  border: "1px solid",
  borderColor: theme.palette.grey[100],
  height: 38,
  borderRadius: "8px",
  "& svg": { fontSize: 20 },
  "&.selected-channel": {
    border: "1px solid",
    borderColor: theme.palette.text.secondary,
    backgroundColor: theme.palette.grey[50],
    boxShadow:
      "1px 3px 4px -2px rgba(14, 12, 12, 0.05), 2px 12px 10px -8px rgba(14, 12, 12, 0.08)",
    "&.error": {
      borderColor: "#ff6467",
    },
  },
  "&.selected-channel-error": {
    backgroundColor: "#ffa3ac",
  },
  [theme.breakpoints.down("lg")]: {
    maxWidth: 38,
    overflow: "hidden",
    padding: 8,
  },
}));

interface PlatformItemProps {
  name: string;
  icon: React.ReactNode;
  platformType: POST_ON;
  activePlatform: POST_ON;
  disabled?: boolean;
  selectedPlatforms: string[];
  onPlatformClick: (platformType: POST_ON) => void;
  handleActivePlatform: () => void;
}

const PlatformItem = ({
  name,
  icon,
  platformType,
  selectedPlatforms,
  onPlatformClick,
  handleActivePlatform,
  activePlatform,
}: PlatformItemProps) => {
  const {
    formState: { errors },
  } = useFormContext<Post>();
  const theme = useTheme();
  const isLgDown = useMediaQuery(theme.breakpoints.down("lg"));

  const hasError = !!errors.post_on;

  const buttonClassName = [
    hasError && "selected-channel-error",
    activePlatform === platformType && "selected-channel",
    hasError && activePlatform === platformType && "error",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <ListItem disablePadding sx={{ mb: 1.5 }}>
      <ListItemIcon sx={{ mr: 1, minWidth: "auto" }}>
        <Checkbox
          checked={selectedPlatforms.includes(platformType)}
          onChange={() => onPlatformClick(platformType)}
        />
      </ListItemIcon>
      <StyledListItemButton
        className={buttonClassName}
        onClick={handleActivePlatform}
      >
        {icon &&
          (isLgDown ? (
            <Tooltip title={name} arrow placement="right">
              <ListItemIcon sx={{ minWidth: 30 }}>{icon}</ListItemIcon>
            </Tooltip>
          ) : (
            <ListItemIcon sx={{ minWidth: 30 }}>{icon}</ListItemIcon>
          ))}
        <ListItemText primary={name} />
      </StyledListItemButton>
    </ListItem>
  );
};

export default PlatformItem;
