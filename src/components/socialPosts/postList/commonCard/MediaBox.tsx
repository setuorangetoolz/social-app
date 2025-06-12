import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { type SxProps, type Theme, Typography, styled } from '@mui/material';
import { MultiMediaBox, MultiMediaItem, OverlayBox, PlayButton, SingleMediaBox, StyledImage, StyledVideo } from './CardStyled';
import { useRef, useState } from 'react';
import PauseIcon from '@mui/icons-material/Pause';

interface IProps {
  media_urls: string[]; // URLs of images or videos
  sx?: SxProps<Theme>;
}

const isVideo = (url: string) => url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.ogg');

const OverlayText = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontWeight: theme.typography.fontWeightBold,
}));

const MediaBox = ({ media_urls = [], sx }: IProps) => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]); // Array of refs for multiple videos
  const [playingIndex, setPlayingIndex] = useState<number | null>(null); // Track which video is playing

  const handlePlayPause = (index: number) => {
    const currentVideo = videoRefs.current[index];
    if (currentVideo) {
      if (currentVideo.paused) {
        // Pause any other playing video
        videoRefs.current.forEach((video, idx) => {
          if (video && idx !== index) {
            video.pause();
          }
        });
        currentVideo.play();
        setPlayingIndex(index);
      } else {
        currentVideo.pause();
        setPlayingIndex(null);
      }
    }
  };

  if (media_urls.length === 1) {
    const src = media_urls[0];
    return (
      <SingleMediaBox
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexShrink: 0,
          ...sx,
        }}
      >
        {isVideo(src) ? (
          <>
            <StyledVideo ref={(el) => (videoRefs.current[0] = el)} src={src} muted />
            <PlayButton onClick={() => handlePlayPause(0)}>{playingIndex === 0 ? <PauseIcon /> : <PlayArrowIcon />}</PlayButton>
          </>
        ) : (
          <StyledImage src={src} alt='media' />
        )}
      </SingleMediaBox>
    );
  }

  // Grid for multiple media
  const count = media_urls.length;

  let gridTemplate: string;
  let displayMedia: string[];

  if (count === 2) {
    gridTemplate = 'repeat(2, 1fr) / 1fr'; // 2 rows, 1 column
    displayMedia = media_urls;
  } else if (count === 3) {
    gridTemplate = 'repeat(2, 1fr) / repeat(2, 1fr)'; // 2x2 grid
    displayMedia = media_urls;
  } else {
    gridTemplate = 'repeat(2, 1fr) / repeat(2, 1fr)';
    displayMedia = media_urls.slice(0, 4);
  }

  const extraCount = count > 4 ? count - 4 : 0;

  return (
    <MultiMediaBox className={count === 3 ? 'three-image-grid' : ''} sx={{ gridTemplate: gridTemplate, ...sx }}>
      {displayMedia.map((src, idx) => (
        <MultiMediaItem key={idx} className={`media-box-${idx + 1}`}>
          {isVideo(src) ? (
            <>
              <StyledVideo ref={(el) => (videoRefs.current[idx] = el)} src={src} muted />
              <PlayButton onClick={() => handlePlayPause(idx)}>{playingIndex === idx ? <PauseIcon /> : <PlayArrowIcon />}</PlayButton>
            </>
          ) : (
            <StyledImage src={src} alt={`media-${idx}`} />
          )}
          {idx === 3 && extraCount > 0 && (
            <OverlayBox>
              <OverlayText variant='h6'>+{extraCount}</OverlayText>
            </OverlayBox>
          )}
        </MultiMediaItem>
      ))}
    </MultiMediaBox>
  );
};

export default MediaBox;
