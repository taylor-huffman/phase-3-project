import React from 'react'
import { Button } from '@mui/material'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DatePicker from './DatePicker';

export default function CreateAppointmentForm() {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

  return (
    <form style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
        <Box sx={{ marginTop: '20px' }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
                >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </Box>
        <Box sx={{ marginTop: '20px' }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
                >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </Box>
        <Box sx={{ marginTop: '20px' }}>
        <DatePicker />
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