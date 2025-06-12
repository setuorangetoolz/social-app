import { Close } from '@mui/icons-material';
import { Grow, Modal, type ModalProps, Paper, Stack, styled, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import React from 'react';

const PaperStyle = styled(Paper)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: theme.palette.background.paper,
  boxShadow: 'none',
  overflow: 'hidden',
  pointerEvents: 'all',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '90vw !important',
  },
}));

interface Props extends ModalProps {
  width?: string | number;
  maxWidth?: string | number;
  disableOutSideClick?: boolean;
  onClose?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  showCloseIcon?: boolean;
  disablePadding?: boolean;
  iconTop?: string;
  iconRight?: string;
  maxHeight?: string;
  height?: string | number;
}

const BasicModal: React.FC<Props> = ({
  open,
  onClose,
  width = 500,
  maxWidth,
  maxHeight = '80vh',
  disableOutSideClick = false,
  children,
  showCloseIcon = true,
  disablePadding = false,
  iconTop = '16px',
  iconRight = '16px',
  height,
  ...rest
}) => {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Modal
        open={open}
        onClose={!disableOutSideClick ? onClose : () => false}
        slotProps={{
          backdrop: {
            timeout: 300,
          },
        }}
        {...rest}
      >
        <Grow in={open}>
          <Stack alignItems={'center'} justifyContent={'center'} sx={{ height: '100%', pointerEvents: 'none', outline: 'none !important' }}>
            <PaperStyle sx={{ minWidth: 150, width: width, maxWidth: maxWidth, padding: disablePadding ? 0 : 3, height }}>
              {showCloseIcon && (
                <IconButton
                  color='error'
                  onClick={onClose}
                  sx={{
                    position: 'absolute',
                    top: iconTop,
                    zIndex: 9,
                    ...(theme.direction === 'rtl' ? { left: iconRight } : { right: iconRight }),
                  }}
                >
                  <Close />
                </IconButton>
              )}

              <Box sx={{ maxHeight: maxHeight, overflowY: 'auto' }}>{children}</Box>
            </PaperStyle>
          </Stack>
        </Grow>
      </Modal>
    </React.Fragment>
  );
};

export default BasicModal;
