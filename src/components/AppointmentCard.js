import React, { useContext, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { UserContext } from '../context/user'
import EditAppointmentForm from './EditAppointmentForm';
import Collapse from '@mui/material/Collapse';

export default function AppointmentCard({
        appointment,
        subjects,
        partners
    }) {

    const { user, setUser } = useContext(UserContext)
    const [editSubject, setEditSubject] = useState(appointment.subject.id)
    const [editPartner, setEditPartner] = useState(
        user !== null && user.user_role.role.toLowerCase() === 'teacher' ? `${appointment.student.id}` : `${appointment.teacher.id}`
    )
    const [editDate, setEditDate] = useState(appointment.date)
    const [collapse, setCollapse] = useState(false);

    function handleOnClick() {
        setCollapse(collapse => !collapse)
    }

    function handleDeleteOnClick() {
        fetch(`http://localhost:9292/appointments/${appointment.id}`, {
            method: 'DELETE'
        })
        .then(r => r.json())
        .then(() => {
            localStorage.clear()
            fetch(`http://localhost:9292/${user.user_role.role.toLowerCase()}s/${user.id}`)
            .then(r => r.json())
            .then(userObj => {
                setUser(userObj)
                localStorage.setItem('currentUser', JSON.stringify(userObj))
            })
        })
    }

    return (
        <Card sx={{ minWidth: 275, margin: "10px 0" }}>
            <CardContent>
                <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom>
                    Date: {appointment.date}
                </Typography>
                <Typography
                    variant="h4"
                    component="h4">
                    {user !== null && user.user_role.role.toLowerCase() === 'teacher' ? `${appointment.student.name}` : `${appointment.teacher.name}`}
                </Typography>
                <Typography
                    sx={{ mb: 1.5 }}
                    color="text.secondary">
                    Subject: {appointment.subject.name}
                </Typography>
                <Button
                    onClick={handleOnClick}
                    sx={{ minWidth: 'unset' }}>
                    <EditOutlinedIcon />
                </Button>    
                <Button
                    onClick={handleDeleteOnClick}
                    sx={{ minWidth: 'unset' }}>
                    <CancelOutlinedIcon />
                </Button>
                <Collapse in={collapse}>
                    <EditAppointmentForm
                        subjects={subjects}
                        partners={partners}
                        editDate={editDate}
                        editSubject={editSubject}
                        editPartner={editPartner}
                        setEditPartner={setEditPartner}
                        setEditSubject={setEditSubject}
                        setEditDate={setEditDate}
                        appointment={appointment}
                        setCollapse={setCollapse} />
                </Collapse>
            </CardContent>
        </Card>
    );
}