import { Delete, Edit, MoreVert } from '@mui/icons-material';
import { Box } from '@mui/material';
import { StyledIconButton } from './CardStyled';
import type { Post } from '../../../../helper/SocialPostConstant';

interface IProps {
  postInfo: Post;
}

const CardFooter = ({ postInfo }: IProps) => {
  // const { value: openDeleteModal, setFalse: onCloseDeleteModal, setTrue: onOpenDeleteModal } = useBoolean(false);
  
  // const handleDelete = () => {
  //   onOpenDeleteModal();
  // };

  // const handleDeleteConfirm = async () => {
  //   const success = await handleDeletePost(postInfo.uid);
  //   if (success) {
  //     onCloseDeleteModal();
  //   }
  // };

  // const handleGoEditLink = () => {
  //   onEditPost(postInfo.uid, postInfo.post_on);
  // };

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" sx={{ borderTop: '1px solid', borderColor: 'divider', py: 1.5, px: 2.5 }}>
     <Box></Box>
      <Box display="flex" alignItems="center" gap={1}>
        <StyledIconButton >
          <Edit fontSize="small" />
        </StyledIconButton>
        <StyledIconButton >
          <Delete fontSize="small" />
        </StyledIconButton>
      </Box>

      {/* <DeleteModal open={openDeleteModal} onClose={onCloseDeleteModal} onConfirm={handleDeleteConfirm} isLoading={loading} /> */}
    </Box>
  );
};

export default CardFooter;