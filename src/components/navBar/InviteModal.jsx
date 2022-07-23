import {
  Typography,
  Modal,
  Box
} from '@mui/material'


import { useState } from 'react'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const InviteModal = ({openModal, setOpenModal}) => {
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <Modal
      open={openModal}
      onClose={handleClose}
    >
      <Box sx={style}>
        <p>invite form here</p>
      </Box>
    </Modal>
  )
}

export default InviteModal