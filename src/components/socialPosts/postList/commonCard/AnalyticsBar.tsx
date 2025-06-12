import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MouseIcon from '@mui/icons-material/Mouse';
import ShareIcon from '@mui/icons-material/Share';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { IconButton, Stack, Typography, useTheme } from '@mui/material';
import React from 'react';
import ReportIcon from '../../../../common/icons/ReportIcon';

const metrics = [
  { label: 'Likes', value: 12, icon: <ThumbUpIcon fontSize='small' /> },
  { label: 'Comments', value: 10, icon: <ChatBubbleOutlineIcon fontSize='small' /> },
  { label: 'Impressions', value: 0, icon: <VisibilityIcon fontSize='small' /> },
  { label: 'Shares', value: 9, icon: <ShareIcon fontSize='small' /> },
  { label: 'Clicks', value: 20, icon: <MouseIcon fontSize='small' /> },
];

const AnalyticsBar: React.FC = () => {
  const theme = useTheme();

  return (
    <Stack
      direction='row'
      alignItems='center'
      spacing={1}
      justifyContent='space-between'
      sx={{ borderTop: '1px solid', borderColor: 'divider', py: 1.5, px: 2.5 }}
    >
      {metrics.map((item, idx) => (
        <Stack key={idx} direction='column' spacing={0.5}>
          <Stack direction='row' alignItems='center' spacing={0.5}>
            {item.icon}
            <Typography variant='info' color='text.secondary'>
              {item.label}
            </Typography>
          </Stack>
          <Typography variant='info' fontWeight={600}>
            {item.value}
          </Typography>
        </Stack>
      ))}

      <IconButton
        sx={{
          backgroundColor: theme.palette.grey[50],
          borderRadius: '8px',
        }}
      >
        <ReportIcon />
      </IconButton>
    </Stack>
  );
};

export default AnalyticsBar;
