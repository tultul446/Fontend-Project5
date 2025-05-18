
import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const DrinkHero = () => {
  return (
 <section className=' bg-cover bg-center h-screen flex items-center justify-center '  style={{ backgroundImage:"url('/drink-hero-bg.png')"}}>
    <div className='bg-[#FBFCFF] w-auto md:w-[650px] h-auto lg:h-[260px] py-6 m-4 sm:m-1 lg:py-10 px-6 lg:px-10 rounded-xl shadow-lg   space-y-2 lg:-ml-6 lg:mr-96 '>
      <div className='space-y-1 text-start'>
      <h1 className='text-2xl md:text-[42px] font-bold text-[#26395C]'>Our top pick for the week!</h1>
       <h4 className='text-xl sm:text-[30px] font-semibold text-[#26395C]'>Nok by Alara</h4>
        <p className='text-[#26395C] text-sm '>Lorem ipsum dolor sit amet, consectetur <br/>
adipiscing elit, sed do eiusmod tempor .</p>

</div>
<div className='text-end lg:ml-[24rem]'>
  <Stack spacing={2} direction="row">
     
      <Button variant="contained" className='w-[182px] h-[36px] text-[15px] ml:ml-24'>Reserve Now</Button>
     
    </Stack>
</div>
    </div>
 </section>
  )
}

export default DrinkHero;
