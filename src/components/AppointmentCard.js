import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { UserContext } from '../context/user'
import EditAppointmentModal from './EditAppointmentModal'

export default function AppointmentCard({ appointment, subjects, setSubjects, partners, setPartners, chooseSubject, setChooseSubject, choosePartner, setChoosePartner, date, setDate, openAppointmentModal, handleClose, handleOpen, setOpenAppointmentModal, patchAppointment }) {

    const { user } = useContext(UserContext)

    function handleEditOnClick() {
        console.log("time to edit")
        setChooseSubject(appointment.subject.id)
        setChoosePartner(user !== null && user.user_role.role.toLowerCase() === 'teacher' ? `${appointment.student.id}` : `${appointment.teacher.id}`)
        setDate(appointment.date)
    }

  return (
    <Card sx={{ minWidth: 275, margin: "10px 0" }}>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Date: {appointment.date}
            </Typography>
            <Typography variant="h4" component="h4">
                {user !== null && user.user_role.role.toLowerCase() === 'teacher' ? `${appointment.student.name}` : `${appointment.teacher.name}`}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Subject: {appointment.subject.name}
            </Typography>
                <EditAppointmentModal icon={<EditOutlinedIcon onClick={handleEditOnClick} />} border="unset" minWidth="unset" marginTop="0" subjects={subjects} partners={partners} date={date} chooseSubject={chooseSubject} choosePartner={choosePartner} setChoosePartner={setChoosePartner} setChooseSubject={setChooseSubject} setDate={setDate} setSubjects={setSubjects} setPartners={setPartners} openAppointmentModal={openAppointmentModal} handleClose={handleClose} handleOpen={handleOpen} setOpenAppointmentModal={setOpenAppointmentModal} appointmentForm={patchAppointment} appointment={appointment} />
            <Button sx={{ minWidth: 'unset' }}>
                <CancelOutlinedIcon />
            </Button>
        </CardContent>
    </Card>
  );
}