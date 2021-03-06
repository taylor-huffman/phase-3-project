import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioButtons() {
  return (
    <FormControl>
      <FormLabel id="userRole">Choose Your Role</FormLabel>
      <RadioGroup
        row
        aria-labelledby="userRole"
        name="userRole"
      >
        <FormControlLabel value="student" control={<Radio />} label="Student" />
        <FormControlLabel value="teacher" control={<Radio />} label="Teacher" />
      </RadioGroup>
    </FormControl>
  );
}