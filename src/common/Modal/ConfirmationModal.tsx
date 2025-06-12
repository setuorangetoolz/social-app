import React from 'react';
import type { ModalProps } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BasicModal from './BasicModal';
import LoadingButton from '../Button/LoadingButton';
import { Info } from '@mui/icons-material';

type EditedModalProps = Omit<ModalProps, 'children'>;

interface ConfirmationModalProps extends EditedModalProps {
  title?: string;
  warningContentTop?: string;
  warningContent?: string;
  buttonText?: string;
  cancelButtonText?: string;
  onClose?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onConfirm?: () => void;
  isLoading?: boolean;
  icon?: React.ReactNode;
  width?: string | number;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  open = false,
  width = 580,
  onClose,
  icon = <Info color={'secondary'} sx={{ fontSize: 80, transform: 'rotate(180deg)', my: 2 }} />,
  title = 'Are you sure Confirm?',
  warningContentTop,
  warningContent = 'cantEditAfterParticipants',
  buttonText = 'Confirm',
  cancelButtonText = 'Cancel',
  onConfirm,
  isLoading,
  ...props
}) => {
  return (
    <BasicModal showCloseIcon={false} width={width} open={open} onClose={onClose} {...props}>
      <>
        <Stack direction={'column'} alignItems='center' gap={1} pb={3} sx={{ textAlign: 'center', marginInline: 'auto', maxWidth: 400 }}>
          {icon && icon}
          <Typography variant='h6'>{title}</Typography>
          {warningContent && (
            <Typography variant='body2' px={5.5} color='text.tertiary'>
             {warningContentTop}
            </Typography>
          )}
        </Stack>
        <Stack direction={'row'} alignItems={'center'} gap={2} pt={3} pr={1}>
          <Button variant={'outlined'} color={'inherit'} onClick={onClose} fullWidth>
            {cancelButtonText}
          </Button>
          <LoadingButton isLoading={isLoading} size={'medium'} onClick={onConfirm} fullWidth>
            {buttonText}
          </LoadingButton>
        </Stack>
      </>
    </BasicModal>
  );
};

export default ConfirmationModal;
