import CloseIcon from '@mui/icons-material/Close';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import { IconButton, Skeleton } from '@mui/material';

interface ImagePreviewBoxProps {
  src: string;
  onEdit?: () => void;
  onRemove?: () => void;
  isLoading?: boolean;
}

export default function ImagePreviewBox({ src, onRemove, isLoading }: ImagePreviewBoxProps) {
  const isVideo = /\.(mp4|webm|ogg)$/i.test(src); // Check if the file is a video

  return (
    <div
      style={{
        position: 'relative',
        width: '100px',
        height: '100px',
        borderRadius: '8px',
        overflow: 'hidden',
        border: '1px solid #ccc',
      }}
    >
      {isLoading ? (
        <Skeleton animation='wave' variant='rectangular' width={100} height={100} sx={{ position: 'absolute', top: 0, left: 0 }} />
      ) : isVideo ? (
        <>
          {/* Play Icon */}
          <PlayArrowRoundedIcon
            sx={{
              fontSize: 40,
              color: 'white',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 2,
              border: '1px solid white',
              borderRadius: '50%',
            }}
          />

          {/* Video Thumbnail */}
          <video
            src={src}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            muted
          />
        </>
      ) : (
        <img
          src={src}
          alt='Uploaded file'
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      )}

      {!isLoading && (
        <IconButton
          size='small'
          color='inherit'
          onClick={onRemove}
          sx={{
            position: 'absolute',
            top: '4px',
            right: '4px',
            width: '18px',
            height: '18px',
            p: 0.2,
            backgroundColor: 'white !important',
          }}
        >
          <CloseIcon sx={{ fontSize: 14 }} />
        </IconButton>
      )}
    </div>
  );
}
