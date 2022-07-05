import React, { useContext } from 'react'
import { Button } from '@mui/material'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DatePicker from './DatePicker';
import { UserContext } from '../context/user'

export default function CreateAppointmentForm({
        handleClose,
        subjects,
        partners,
        chooseSubject,
        setChooseSubject,
        choosePartner,
        setChoosePartner,
        date,
        setDate,
        setAllAppointments
    }) {

    const { user, setUser } = useContext(UserContext)

    const handleSubjectChange = (event) => {
        setChooseSubject(event.target.value);
    };

    const handlePartnerChange = (event) => {
        setChoosePartner(event.target.value)
    }

    const handleSetDate = (event) => {
        setDate(event.target.value)
    }

    const userRole = user !== null && user.user_role.role.toLowerCase() === 'teacher' ? 'students' : 'teachers'

      function handleOnSubmit(e) {
        e.preventDefault()
        fetch(`http://localhost:9292/appointments`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                date: date,
                student_id: user !== null && user.user_role.role.toLowerCase() === 'teacher' ? choosePartner : user.id,
                teacher_id: user !== null && user.user_role.role.toLowerCase() === 'student' ? choosePartner : user.id,
                subject_id: chooseSubject
            })
        })
        .then(r => r.json())
        .then((newAppointment) => {
            setAllAppointments(appointments => [...appointments, newAppointment])
            let userData = JSON.parse(localStorage.currentUser)
            userData.appointments.push(newAppointment)
            setUser(userData)
            localStorage.setItem('currentUser', JSON.stringify(userData))
            handleClose()
            // localStorage.clear()
            // fetch(`http://localhost:9292/${user.user_role.role.toLowerCase()}s/${user.id}`)
            // .then(r => r.json())
            // .then(userObj => {
            //     setUser(userObj)
            //     localStorage.setItem('currentUser', JSON.stringify(userObj))
            //     handleClose()
            // })
        })
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
                    value={choosePartner}
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
                    value={chooseSubject}
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
                date={date}
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