import React from 'react'

const Galary = () => {
    const galary = [
        {img:'./Mask1.png'},
        {img:'./Mask2.png'},
        {img:'./Mask3.png'},
        {img:'./Mask4.png'},
        {img:'./Mask5.png'},
        {img:'./Mask6.png'},
    ]
    return (
    <section className='container border border-gray-100 p-10'> 
      <div  className=''>
        <h3 className='text-[#26395C] text-xl lg:text-3xl'>See How people are chilling on <span className='text-[#0E8BFF]'> Chillsbay </span></h3>
        <div className='grid  space-y-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 mt-6'>
          {galary.map((item , i) => (
            <div key={i} >
            <img src={item.img} alt=""  className='w-full'/>
            </div>
          ))

          }
        </div>
   
   
   
      </div>
    </section>
  )
}

export default Galary
