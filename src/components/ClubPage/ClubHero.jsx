
import React, { useState } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";



const ClubHero = () => {

const CarouselDate = [
 {
   id :1,
   heading:'Club Quilox ',
   title:'Amaarae & Tems on June 3rd '
 },
 {
   id :2,
   heading:'Our top pick for the week! ',
   title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, '
 },
 {
   id :3,
   heading:'Club Quilox 4th',
   title:'Amaarae & Tems on June 3rd '
 },

]







  const [currentIndex, setCurrentIndex] = useState(0)
const CurrentSlider = CarouselDate[currentIndex]
const handleDotClick = (index) => {
  setCurrentIndex(index)
}

 const handlePrev = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex ===  0 ? CarouselDate.length - 1  : prevIndex - 1 
      )
    };
    const handleNext = () => {
          setCurrentIndex((prevIndex) => 
        prevIndex === CarouselDate.length - 1 ? 0 : prevIndex + 1 
      )
     };



  return (
 <section className=' bg-cover bg-center h-screen  '  style={{ backgroundImage:"url('/club-hero.png')"}}>
    <div className='flex items-center justify-center mx-auto p-3'>
    
      <button
           onClick={handlePrev}
           className='absolute left-0 transform-translate-x-6 flex items-center justify-between text-white  w-9 lg:w-12 h-9 lg:h-12 text-center '
           >
            <AiOutlineLeft className='mx-auto  '/>
         
           </button>

    <div className=' clubColors w-[350px] md:w-[650px] h-auto lg:h-[260px] py-12 m-4 sm:m-1 lg:mt-24 lg:py-16 px-6 lg:px-10 rounded-xl shadow-lg   space-y-2 lg:-ml-6 lg:mr-96 '>
    
          <div className='space-y-1 text-start'>
      <h1 className='text-xl  md:text-[40px] font-bold text-[#F5FAFF]'>{CurrentSlider.heading}</h1>
       <h4 className='text-lg sm:text-[26px] font-semibold text-[#F5FAFF]'>{CurrentSlider.title} </h4>
     

</div>
    
<div className='text-end lg:ml-[24rem]'>
  <Stack spacing={2} direction="row">
     
      <Button variant="contained" className='w-[182px] h-[36px] text-[15px] ml:ml-24'>Reserve Now</Button>
     
    </Stack>
</div>

</div>


    <button
          onClick={handleNext}
          className='absolute right-0 transform-translate-x-6 flex items-center justify-between text-[#fff] w-9 lg:w-12 h-9 lg:h-12 text-center mr-10 '
          >
           
        <AiOutlineRight  className='mx-auto  '/>
   
          </button>


 

    </div>
<div className='flex justify-center items-center gap-2 mt-6'>
      {CarouselDate.map((_, index) => (
        <button
        key={index}
        onClick={()=> handleDotClick(index)}
         className={` w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-600'}`}>
         
        </button>
      ))}

     </div>

 </section>
  )
}

export default ClubHero;
