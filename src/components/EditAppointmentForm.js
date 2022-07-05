import React, { useContext } from 'react'
import { Button } from '@mui/material'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DatePicker from './DatePicker';
import { UserContext } from '../context/user'

export default function EditAppointmentForm({
        subjects,
        partners,
        editSubject,
        setEditSubject,
        editPartner,
        setEditPartner,
        editDate,
        setEditDate,
        appointment,
        setCollapse,
        setAllAppointments
    }) {

    const { user, setUser } = useContext(UserContext)

    const handleSubjectChange = (event) => {
        setEditSubject(event.target.value);
    };

    const handlePartnerChange = (event) => {
        setEditPartner(event.target.value)
    }

    const handleSetDate = (event) => {
        setEditDate(event.target.value)
    }

    const userRole = user !== null && user.user_role.role.toLowerCase() === 'teacher' ? 'students' : 'teachers'

      function handleOnSubmit(e) {
        e.preventDefault()
        setCollapse(collapse => !collapse)
        fetch(`http://localhost:9292/appointments/${appointment.id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                date: editDate,
                student_id: user !== null && user.user_role.role.toLowerCase() === 'teacher' ? editPartner : user.id,
                teacher_id: user !== null && user.user_role.role.toLowerCase() === 'student' ? editPartner : user.id,
                subject_id: editSubject
            })
        })
        .then(r => r.json())
        .then((editedAppointment) => {
            setAllAppointments(appointments => {
                return appointments.map(appointment => {
                    if (appointment.id === editedAppointment.id) {
                        return editedAppointment
                    } else {
                        return appointment
                    }
                })
            })
            let userData = JSON.parse(localStorage.currentUser)
            userData.appointments = userData.appointments.map(appointment => {
                if (appointment.id === editedAppointment.id) {
                    return editedAppointment
                } else {
                    return appointment
                }
            })
            setUser(userData)
            localStorage.setItem('currentUser', JSON.stringify(userData))
        })
        .catch(r => console.log(r))
    }

      

  return (
    <form
        onSubmit={handleOnSubmit}
        style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '10px'
        }}
    >
        <Box sx={{ marginTop: '20px' }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                    {userRole.slice(0,1).toUpperCase() + userRole.slice(1)}
                </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={editPartner}
                    label={userRole.slice(0,1).toUpperCase() + userRole.slice(1)}
                    onChange={handlePartnerChange}
                >
                    {partners.map(partner => {
                        return (
                            <MenuItem
                                key={partner.id}
                                value={partner.id.toString()}>
                                {partner.name}
                            </MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
        </Box>
        <Box sx={{ marginTop: '20px' }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                    Subject
                </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={editSubject}
                    label="Subject"
                    onChange={handleSubjectChange}
                >
                    {subjects.map(subject => {
                        return (
                            <MenuItem
                                key={subject.id}
                                value={subject.id.toString()}>
                                {subject.name}
                            </MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
        </Box>
        <Box sx={{ marginTop: '20px' }}>
            <DatePicker
                handleSetDate={handleSetDate}
                date={editDate}
            />
        </Box>
        <Box sx={{ marginTop: '20px' }}>
            <Button
                variant="contained"
                sx={{
                    '& > :not(style)': {
                        m: 1,
                        margin: 0,
                        width: '100%'
                    }
                }}
                type="submit"
                size="large">
                Submit
            </Button>
        </Box>
    </form>
  )
}