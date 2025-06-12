import React from 'react';
import { Box, Divider, Stack, Typography } from '@mui/material';
import type { ModalProps } from '@mui/material';
import BasicModal from './BasicModal';

interface Props extends ModalProps {
  title: string;
  subTitle?: string;
  icon?: React.ReactNode;
  width?: number | string;
  maxWidth?: number | string;
  disableOutSideClick?: boolean;
  childrenWrpClass?: string;
  onClose?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  showCloseIcon?: boolean;
  disableMargin?: boolean;
}

const BasicModalWithHeader: React.FC<Props> = ({
  title = '',
  subTitle = '',
  icon,
  open,
  onClose,
  width = 700,
  maxWidth,
  disableOutSideClick = false,
  showCloseIcon,
  children,
  childrenWrpClass = '',
  disableMargin = false,
}) => {
  return (
    <BasicModal
      open={open}
      disablePadding={true}
      onClose={!disableOutSideClick ? onClose : () => false}
      width={width}
      maxWidth={maxWidth}
      disableOutSideClick={disableOutSideClick}
      showCloseIcon={showCloseIcon}
      iconTop={'8px'}
      iconRight={'8px'}
      maxHeight={'100%'}
    >
      <>
        <Stack px={3} py={2} justifyContent={'center'} gap={1}>
          <Typography variant='subtitle1' color='text.primary'>
            {icon && icon}
            {title}
          </Typography>
          {subTitle && (
            <Typography variant='body2' color='text.secondary'>
              {subTitle}
            </Typography>
          )}
        </Stack>
        <Divider />

        <Box sx={{ maxHeight: '80vh', overflowY: 'auto', m: disableMargin ? 0 : 1 }} className={childrenWrpClass}>
          {children}
        </Box>
      </>
    </BasicModal>
  );
};

export default BasicModalWithHeader;
