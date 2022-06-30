import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CreateAppointmentForm from './CreateAppointmentForm';
import { Add } from '@mui/icons-material';


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

function AppointmentModal({
    subjects,
    partners,
    chooseSubject,
    setChooseSubject,
    choosePartner,
    setChoosePartner,
    date,
    setDate,
    openAppointmentModal,
    handleClose,
    handleOpen
  }) {

  return (
    <>
      <Button
        onClick={handleOpen}
        sx={{
          color: "#000000",
          border: "1px solid",
          marginTop: "15px",
          minWidth: "64px"
        }}>
        <Add fontSize="large" />
      </Button>
      <Modal
        open={openAppointmentModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h4">
            Create An Appointment
          </Typography>
          <CreateAppointmentForm
            handleClose={handleClose}
            subjects={subjects}
            partners={partners}
            chooseSubject={chooseSubject}
            setChooseSubject={setChooseSubject}
            choosePartner={choosePartner}
            setChoosePartner={setChoosePartner}
            date={date}
            setDate={setDate}
          />
        </Box>
      </Modal>
    </>
  );
}

export default AppointmentModal