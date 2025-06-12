import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Stack, Typography } from '@mui/material';

interface IProps {
  title: string;
  description: string;
}

const FailedAlert = ({ title = '', description = '' }: IProps) => {
  return (
    <Stack
      direction='row'
      spacing={2}
      alignItems='flex-start'
      sx={{
        bgcolor: 'primary.light',
        p: 2,
        borderBottom: '1px solid',
        borderColor: 'grey.50',
      }}
    >
      <ErrorOutlineIcon fontSize='small' color='primary' sx={{ mt: 0.3 }} />
      <Stack spacing={0.5}>
        <Typography variant='body2' color={'primary.main'} fontWeight={600}>
          {title}
        </Typography>
        <Typography variant='body2' color={'primary.main'}>
          {description}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default FailedAlert;
