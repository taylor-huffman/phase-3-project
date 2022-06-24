import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import LoginTabs from './LoginTabs';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '400px',
  width: '80%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

function LoginModal({ text, color, marginTop }) {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const handleOpen = () => setOpenLoginModal(true);
  const handleClose = () => setOpenLoginModal(false);

  return (
    <>
      <Button onClick={handleOpen} sx={{ color: color, border: "1px solid", marginTop: marginTop }}>{text}</Button>
      <Modal
        open={openLoginModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <LoginTabs setOpenLoginModal={setOpenLoginModal} />
        </Box>
      </Modal>
    </>
  );
}

export default LoginModal