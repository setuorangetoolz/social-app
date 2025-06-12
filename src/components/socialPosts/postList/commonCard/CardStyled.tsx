import { Box, type BoxProps, IconButton, type IconButtonProps, styled } from '@mui/material';

// Styled components
export const SingleMediaBox: React.FC<BoxProps> = styled(Box)<BoxProps>(({ theme }) => ({
  width: 150,
  height: 180,
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  display: 'contents',
  position: 'relative',
  flexShrink: 0,
}));

export const StyledVideo = styled('video')(() => ({
  width: '100%',
  height: '100%',
  position: 'relative',
  background: '#000',
}));

export const StyledImage = styled('img')(() => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
}));

export const PlayButton: React.FC<IconButtonProps> = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'rgba(0,0,0,0.5) !important',
  color: theme.palette.common.white,
  padding: '6px',
}));

export const MultiMediaBox: React.FC<BoxProps> = styled(Box)<BoxProps>(({ theme }) => ({
  width: 150,
  height: 168,
  display: 'grid',
  gap: theme.spacing(0.2),
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  flexShrink: 0,
  '&.three-image-grid': {
    '& .media-box-3': { gridArea: '2 / 1 / 3 / 3' },
  },
}));

export const MultiMediaItem: React.FC<BoxProps> = styled(Box)<BoxProps>({
  position: 'relative',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  '& img': { objectFit: 'cover', width: '100%', height: '100%' },
});

export const OverlayBox: React.FC<BoxProps> = styled(Box)<BoxProps>(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

// footer
export const StyledIconButton: React.FC<IconButtonProps> = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  color: theme.palette.text.secondary,
  borderRadius: 8,
  svg: {
    fontSize: 20,
  },
}));
