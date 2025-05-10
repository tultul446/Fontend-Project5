import React, { useState } from 'react'



const HeroArea = () => {
const [location, setLocation] = useState("");
const [date, setDate ] = useState("");
const [activity, setActivity] = useState("")




  return (
    <section className='bg-cover bg-center h-screen flex items-center justify-center text-white'  style={{ backgroundImage:"url('/hero.png')"}}>
      <div className='container lg:w-[80%] mx-auto px-3'>
       <h1 className='text-3xl md:text-3xl lg:text-5xl md:w-[30%]  lg:w-[50%] font-bold py-7 lg:py-10 px-10 text-white leading-tight'>Find amazing things to do anytime, anywhere in Lagos.</h1>

       <div className='bg-[#FBFCFF]   lg:w-[650px] lg:h-[130px] py-5  lg:py-10 px-5 lg:px-10 ms-10 rounded-xl shadow-lg flex flex-col md:flex-row gap-4 items-center justify-between'>
       
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


         <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          Search
        </button>







       </div>






      </div>
    </section>
  )
}

export default HeroArea;
