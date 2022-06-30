import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import EditAppointmentForm from './EditAppointmentForm';


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

function EditAppointmentModal({ handleEditOnClick, icon, color, border, minWidth, marginTop, subjects, setSubjects, partners, setPartners, editSubject, setEditSubject, editPartner, setEditPartner, editDate, setEditDate, openEditAppointmentModal, handleCloseEdit, handleOpenEdit, setOpenEditAppointmentModal, appointment }) {
  // const [openAppointmentModal, setOpenAppointmentModal] = useState(false);
  // const handleOpen = () => setOpenAppointmentModal(true);
  // const handleClose = () => setOpenAppointmentModal(false);

  function handleOnClick() {
    handleOpenEdit()
    handleEditOnClick()
  }

  return (
    <>
      <Button onClick={handleOnClick} sx={{ color: color, border: border, marginTop: marginTop, minWidth: minWidth }}>{icon}</Button>
      <Modal
        open={openEditAppointmentModal}
        onClose={handleCloseEdit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h4">
            Edit Appointment
          </Typography>
          <EditAppointmentForm setOpenEditAppointmentModal={setOpenEditAppointmentModal} subjects={subjects} setSubjects={setSubjects} partners={partners} setPartners={setPartners} editSubject={editSubject} setEditSubject={setEditSubject} editPartner={editPartner} setEditPartner={setEditPartner} editDate={editDate} setEditDate={setEditDate} appointment={appointment} />
        </Box>
      </Modal>
    </>
  );
}

export default EditAppointmentModal