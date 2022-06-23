import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DatePicker from './DatePicker';


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

function AppointmentModal({ icon, color, border, minWidth, marginTop }) {
  const [openAppointmentModal, setOpenAppointmentModal] = useState(false);
  const handleOpen = () => setOpenAppointmentModal(true);
  const handleClose = () => setOpenAppointmentModal(false);

  return (
    <>
      <Button onClick={handleOpen} sx={{ color: color, border: border, marginTop: marginTop, minWidth: minWidth }}>{icon}</Button>
      <Modal
        open={openAppointmentModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h4">
            Create An Appointment
          </Typography>
          <DatePicker />
        </Box>
      </Modal>
    </>
  );
}

export default AppointmentModal