import React, { useState } from 'react'
import { AiOutlineLeft } from "react-icons/ai";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { AiOutlineRight } from "react-icons/ai";
import { cn } from '../../lib/utils';

const clubCarousel = ({ isDark }) => {
const CarouselDate =[
  {
    id:1,
    image:'./parson12.png',
    heading:`GTCO Food and Drink Festival 2022: Africa’s Biggest Food and Drink Festival`,
    des:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat`
  },
  {
    id:2,
    image:'./Shadow6.png',
    heading:`GTCO Food and Drink Festival 2022: Africa’s Biggest Food and Drink Festival`,
    des:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `
  },
  {
    id:3,
    image:'./Mask4.png',
    heading:`GTCO Food and Drink Festival 2022: Africa’s Biggest Food and Drink Festival`,
    des:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`
  },

];

const TagData =[
  {
    id:1,
    img:'./Calendar.png',
    title:'Dec 12 2022'

  },
  {
    id:2,
    img:'./Mark.png',
    title:'TBS  Lagos'

  },
  {
    id:3,
    img:'./Clock.png',
    title:'9:00 PM '

  },
  {
    id:4,
    img:'./Tag.png',
    title:'N20,000'

  },
]



const [currentIndex, setCurrentIndex] = useState(0);
const currentSlider = CarouselDate[currentIndex]
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
    <section className='mb-5 mt-5'>
     

      <div className='relative w-full max-w-screen-2xl mx-auto'>
        <div className='flex items-center justify-between'>
       

       <button
       onClick={handlePrev}
       className='absolute left-0 transform-translate-x-6 flex items-center justify-between text-[#fff]  w-9 lg:w-12 h-9 lg:h-12 text-center '
       >
        <AiOutlineLeft className='mx-auto  '/>
     
       </button>

      <div className='flex flex-col lg:flex-row items-center gap-6 w-full px-12'> 
       {/* left side*/}
     <div className='w-full lg:w-1/2'>
      <h3 className={cn("text-xl lg:text-2xl font-semibold text-[#26395C] lg:ms-10", isDark && "text-white")}>See How People are Chilling On Chillsbay</h3>
     <img className='object-cover w-full h-auto' 
     src={currentSlider.image} alt=""/> 
     </div>



       {/* Right */}
     <div className='w-full lg:w-1/2 flex flex-col gap-4 p-3'>
        <h2 className={cn("text-xl lg:text-4xl font-bold text-[#26395C] lg:w-[70%] leading-tight",isDark && "text-white")}>{currentSlider.heading}</h2>
         <p className={cn("text-gray-700 lg:w-[70%] text-sm lg:text-lg", isDark && "text-white")}>{currentSlider.des}</p>

       <div className='grid grid-cols-2 lg:w-55%] '>
        {
          TagData.map((item, id) => (
         <div key={id} className='flex  items-center gap-2.5 mt-5 mb-5'>
          <img src={item.img} alt="" />
          <p className={cn("text-[#26395C] text-sm  lg:text-lg  font-semibold", isDark && "text-gray-400")}>{item.title}</p>
         </div>
          ))
        }
       </div>

      {/* Button */}
      <div>
           <Stack spacing={2} direction="row">
     <Button variant="outlined">Add to cart</Button>
      <Button variant="contained">Book Now</Button>
      
    </Stack>
      </div>


       <div className='flex items-center space-x-6 mb-5'>
        <p className={cn("text-[#26395C] text-sm lg:text-xl mt-5", isDark && "text-gray-500")}>Connect with us on:</p>
        <div className='flex space-x-3 mt-4 '>
        <img src="./Twitter.png" alt=""/>
        <img src="./Instagram.png" alt="" />
        </div>
       </div>
        </div>
 </div>
       

  <button
       onClick={handleNext}
       className='absolute right-0 transform-translate-x-6 flex items-center justify-between text-white w-9 lg:w-12 h-9 lg:h-12 text-center  '
       >
        
     <AiOutlineRight  className='mx-auto  '/>

       </button>

        </div>

     <div className='flex justify-center items-center gap-2 mt-6'>
      {CarouselDate.map((_, index) => (
        <button
        key={index}
        onClick={()=> handleDotClick(index)}
         className={` w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}>
         
        </button>
      ))}

     </div>



      </div>
    </section>
  )
}

export default clubCarousel;
