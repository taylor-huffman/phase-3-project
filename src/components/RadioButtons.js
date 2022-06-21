import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioButtons() {
//   const [value, setValue] = React.useState('female');

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };

  return (
    <FormControl>
      <FormLabel id="controlled-radio-buttons-group">Choose Your Role</FormLabel>
      <RadioGroup
        row
        aria-labelledby="controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        // value={value}
        // onChange={handleChange}
      >
        <FormControlLabel value="Student" control={<Radio />} label="Student" />
        <FormControlLabel value="Teacher" control={<Radio />} label="Teacher" />
      </RadioGroup>
    </FormControl>
  );
}