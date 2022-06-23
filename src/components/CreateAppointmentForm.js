import React, { useContext, useEffect } from 'react'
import { Button } from '@mui/material'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DatePicker from './DatePicker';
import { UserContext } from '../context/user'

export default function CreateAppointmentForm() {

    const { user } = useContext(UserContext)

    const [subjects, setSubjects] = React.useState([])
    const [partners, setPartners] = React.useState([])
    const [chooseSubject, setChooseSubject] = React.useState('')
    const [choosePartner, setChoosePartner] = React.useState('')
    const [date, setDate] = React.useState('')


    const handleSubjectChange = (event) => {
        setChooseSubject(event.target.value);
    };

    const handleStudentChange = (event) => {
        setChoosePartner(event.target.value)
    }

    const handleSetDate = (event) => {
        setDate(event.target.value)
    }

    const userRole = user !== null && user.user_role.role.toLowerCase() === 'teacher' ? 'students' : 'teachers'

    useEffect(() => {
        fetch('http://localhost:9292/subjects/all')
        .then(r => r.json())
        .then(data => setSubjects(data))
      }, [])
      

    useEffect(() => {
        fetch(`http://localhost:9292/${userRole}/all`)
        .then(r => r.json())
        .then(data => setPartners(data))
    }, [userRole])
      

    //   console.log(chooseSubject, choosePartner, date)
    //   console.log(user)

      function handleOnSubmit(e) {
        e.preventDefault()
        // const name = e.taget.name.value
        // const userRole = e.target.userRole.value
        // console.log(name, userRole)
        
        // setUser(e.target.name.value)
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
        .then(data => console.log(data))
    }

      

  return (
    <form onSubmit={handleOnSubmit} style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
        <Box sx={{ marginTop: '20px' }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{userRole.slice(0,1).toUpperCase() + userRole.slice(1)}</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={choosePartner}
                label="Student"
                onChange={handleStudentChange}
                >
                {/* <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem> */}
                {partners.map(student => {
                    return <MenuItem key={student.id} value={student.id.toString()}>{student.name}</MenuItem>
                })}
                </Select>
            </FormControl>
        </Box>
        <Box sx={{ marginTop: '20px' }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Subject</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={chooseSubject}
                label="Subject"
                onChange={handleSubjectChange}
                >
                {/* <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem> */}
                {subjects.map(subject => {
                    return <MenuItem key={subject.id} value={subject.id.toString()}>{subject.name}</MenuItem>
                })}
                </Select>
            </FormControl>
        </Box>
        <Box sx={{ marginTop: '20px' }}>
        <DatePicker handleSetDate={handleSetDate} date={date} />
        </Box>
        <Box sx={{ marginTop: '20px' }}>
        <Button
            variant="contained"
            sx={{'& > :not(style)': { m: 1, margin: 0, width: '100%' },}}
            type="submit"
            size="large">
                Submit
        </Button>
        </Box>
    </form>
  )
}