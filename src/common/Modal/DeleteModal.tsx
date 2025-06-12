import React from 'react';
import type { ModalProps } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import BasicModal from './BasicModal';
import LoadingButton from '../Button/LoadingButton';

type EditedModalProps = Omit<ModalProps, 'children'>;

interface DeleteModalProps extends EditedModalProps {
  title?: string;
  warningContent?: string;
  buttonText?: string;
  cancelButtonText?: string;
  onClose?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onConfirm?: () => void;
  isLoading?: boolean;
}

const DeleteModal: React.FC<DeleteModalProps> = ({
  open = false,
  onClose,
  title = 'Are you sure, you want to delete this?',
  warningContent = 'This operation cannot be undone.',
  buttonText = 'Yes, Delete',
  cancelButtonText = 'Cancel',
  onConfirm,
  isLoading,
  ...props
}) => {
  return (
    <BasicModal showCloseIcon={false} width={350} open={open} onClose={onClose} {...props}>
      <>
        <Stack direction={'column'} alignItems='center' gap={1} pb={3} sx={{ textAlign: 'center', marginInline: 'auto' }}>
          <DeleteRoundedIcon sx={{ fontSize: '80px' }} color='error' />
          <Typography variant='h5'>{title}</Typography>
          <Typography variant='body2' color='text.tertiary'>
            {warningContent}
          </Typography>
        </Stack>
        <Divider sx={{ opacity: 0.5 }} />
        <Stack direction={'row'} alignItems={'center'} gap={2} pt={3} pr={1} pb={1}>
          <Button variant={'outlined'} color={'inherit'} onClick={onClose} fullWidth>
            {cancelButtonText}
          </Button>
          <LoadingButton isLoading={isLoading} size={'medium'} color={'error'} onClick={onConfirm} fullWidth>
            {buttonText}
          </LoadingButton>
        </Stack>
      </>
    </BasicModal>
  );
};

export default DeleteModal;
