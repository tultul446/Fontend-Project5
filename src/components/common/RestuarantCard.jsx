import React, { useState, useEffect} from 'react'
 import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { cn } from '../../lib/utils';

const RestaurantCard = ({ title, isDark, api }) => {
    const [data, setData] =useState([]);

    useEffect(()=> {
    fetch(api)
    .then((response) => {
    return response.json()
    })
     .then((jsonData) => {
        setData(jsonData)
     })

    }, [api])




  return (
    <section className={cn("bg-[#F5FAFF] p-10 border border-gray-100" , isDark && "bg-black border-gray-800")}>
      <div className='w-auto sm:w-[80%] mx-auto '>
        <div className='sm:flex justify-between items-center '>
            <h2 className={cn("text-[#26395C] text-[18px] md:text-[22px] mb-4 mt-2 sm:mt-4 font-bold" , isDark && "text-white")}>{title}</h2>
 
        
      <Button variant="text">See More</Button>
      
    
 </div>


        <div className=  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5 space-y-5">
            {
                data.map((myData) => (
                    <div key={myData.Id} className= "space-y-3 md:space-y-1"  >
                    <img src={myData.img} alt="" className='w-[400px] h-auto object-cover rounded-lg mb-3'/>
                    <h3 className={cn("text-[18px] md:text-[24px] font-semibold text-[#26395C] px-2 w-auto", isDark && "text-white")}>{myData.title}</h3>
                    <p className={cn("text-sm text-[#26395C] px-2 lg:w-[236px] w-auto", isDark && "text-gray-300")}>{myData.des}</p>
                    <p className={cn("text-sm text-[#26395C] px-2 lg:w-[236px] w-auto", isDark && "text-gray-300")}>{myData.tag}</p>
                     
              
               <Button variant="contained" >Reserve Now</Button>
                   
    
                    </div>
                ))
            }
        </div>
      </div>

    </section>
  )
}

export default RestaurantCard;
