import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import LoginTabs from './LoginTabs';


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

function LoginModal() {
  const [openLoginModal, setOpenLogingModal] = useState(false);
  const handleOpen = () => setOpenLogingModal(true);
  const handleClose = () => setOpenLogingModal(false);

  return (
    <>
      <Button onClick={handleOpen} sx={{ color: "#ffffff" }}>Login</Button>
      <Modal
        open={openLoginModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          <LoginTabs />
        </Box>
      </Modal>
    </>
  );
}

export default LoginModal