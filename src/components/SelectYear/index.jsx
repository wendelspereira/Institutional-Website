import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectYear({ curYear, setYear, yearsNumbers }) {
  const handleChange = (event) => {
    setYear(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 100 }}>
      <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label">Ano</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={curYear}
          label="Ano"
          onChange={handleChange}
        >
          {yearsNumbers.map(item => <MenuItem key={item} value={item}>{item}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>
  );
}