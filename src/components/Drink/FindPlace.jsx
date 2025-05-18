import React from 'react'
import { useState } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



const FindPlace = () => {
const [location, setLocation] = useState("");
const [date, setDate ] = useState("");
const [activity, setActivity] = useState("")
 const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  return (
    <section>  
    <div className='bg-[#FBFCFF]   lg:w-[11
    50px] lg:h-[130px] py-5  lg:py-10 px-5 lg:px-10 ms-10 rounded-xl shadow-lg flex flex-col md:flex-row gap-3 items-center justify-between'>
       
         <select
         className='p-2 border border-gray-300 rounded w-full md:w-auto text-black'
       
         value={location}
         onChange={(e) => setLocation(e.target.value)}
         aria-label='location'
       
         >
          <option value="">Location</option>
          <option value="Oshodi">Oshodi</option>
          <option value="">Oshodi</option>
          <option value="">Dhaka</option>
         </select>
     


    
      <input 
      type="date"
     
       className='p-2 border border-gray-300 rounded w-full md:w-auto text-black'
      value={date}
      onChange={(e) => setDate(e.target.value)}
      />
   


     <select
          className="text-black p-2 border border-gray-300 rounded w-full md:w-auto"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        >
          <option value="">Activities</option>
          <option value="Night Clubs">Night Clubs</option>
          <option value="Paintball">Paintball</option>
        </select>

<div className='w-auto '>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['TimePicker']}>
        <TimePicker label=" Time" />
      </DemoContainer>
    </LocalizationProvider>

</div>
   <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={''}>Bangladeah</MenuItem>
          <MenuItem value={''}>India</MenuItem>
          <MenuItem value={''}>Chine</MenuItem>
        </Select>
      </FormControl>
    </Box>

         <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          Search
        </button>


       </div>
      
    </section>
  )
}

export default FindPlace
