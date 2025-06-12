import { Warning, Add as AddIcon } from '@mui/icons-material';
import { Chip, IconButton, Stack, Typography } from '@mui/material';
import { useRef } from 'react';
import ImagePreviewBox from './ImagePreviewBox';

type MediaUploadProps = {
  name: string;
  accept?: string;
  maxFiles?: number;
  options?: any;
};

export default function MediaUpload({ name, accept, options, maxFiles = 10 }: MediaUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control, name });

  const { handleImage, isLoading, error } = useUploadFile({
    onSuccess: (url, file) => {
      append({ path: url, type: file.type });
    },
    options,
  });

  return (
    <Stack alignItems="flex-start" gap={1}>
      <Typography variant="body2" fontWeight={500} mb={1}>
        Media
      </Typography>
      <Stack gap={1}>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {fields.map((item, index) => (
            <ImagePreviewBox key={item.id} src={item.path} onRemove={() => remove(index)} />
          ))}
          {isLoading && <ImagePreviewBox src="" isLoading />}
          {fields.length < maxFiles && (
            <IconButton
              onClick={() => inputRef.current?.click()}
              color="primary"
              sx={{
                width: '100px',
                height: '100px',
                borderRadius: '8px',
                backgroundColor: 'primary.light',
              }}
            >
              <AddIcon sx={{ fontSize: '32px' }} />
              <input ref={inputRef} type="file" accept={accept} onChange={handleImage} hidden />
            </IconButton>
          )}
        </div>
        {error && (
          <Chip
            size="small"
            variant="outlined"
            color="error"
            label={error}
            icon={<Warning />}
            sx={{ borderRadius: 1, '& .MuiChip-label': { fontWeight: 400 } }}
          />
        )}
      </Stack>
    </Stack>
  );
}