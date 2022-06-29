import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CreateAppointmentForm from './CreateAppointmentForm';


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

function EditAppointmentModal({ icon, color, border, minWidth, marginTop, subjects, setSubjects, partners, setPartners, chooseSubject, setChooseSubject, choosePartner, setChoosePartner, date, setDate, openAppointmentModal, handleClose, handleOpen, setOpenAppointmentModal, appointmentForm, appointment }) {
  // const [openAppointmentModal, setOpenAppointmentModal] = useState(false);
  // const handleOpen = () => setOpenAppointmentModal(true);
  // const handleClose = () => setOpenAppointmentModal(false);

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
          <CreateAppointmentForm setOpenAppointmentModal={setOpenAppointmentModal} subjects={subjects} setSubjects={setSubjects} partners={partners} setPartners={setPartners} chooseSubject={chooseSubject} setChooseSubject={setChooseSubject} choosePartner={choosePartner} setChoosePartner={setChoosePartner} date={date} setDate={setDate} appointmentForm={appointmentForm} appointment={appointment} />
        </Box>
      </Modal>
    </>
  );
}

export default EditAppointmentModal