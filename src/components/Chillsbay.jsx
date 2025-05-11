import React from 'react'

const Chillsbay = () => {

 const  CardInfo =[
  {
   Logo:'./Frame4.png',
   title:`Your  entire  trip
in one checkout!`,
   des:'Add multiple experiences to your cart and checkout on one click.'
  },
  {
   Logo:'./Frame5.png',
   title:`Pay with Crypto on the go`,
   des:'Enjoy the freedom of universal payments for a seamless marketplace experience'
  },
  {
   Logo:'./Frame6.png',
   title:`Free Cancellation
and ticket transfer`,
   des:'Resell your tickets or cancel your reservations at zero cost 24 hours before.'
  },
  ]


  return (
    <section>
      <h1 className='text-center text-#26395C] text-2xl   lg:text-[42px] font-semibold mt-16 mb-10 '>Why Use Chillsbay?</h1>
      <div className='container bg-[#F5FAFF] grid grid-cols-1 lg:grid-cols-3 mx-auto mt-10 mb-10 p-12 rounded-2xl shadow-xl'>
      {CardInfo.map((info, i) => (
        <div key={i} className='w-[60%] mx-auto mt-4  lg:mt-5'>
       <img src={info.Logo} alt="" className=' lg:w-[82px] h-[82px]' />
       <h2 className='w-[288px]  text-3xl font-semibold text-[#000000]'>{info.title}</h2>
       <p className='w-[317.5px] h-[102px] mt-4 text-sm text-[#000000]'>{info.des}</p>
        </div>
      ))

      }
      </div>
    </section>
  )
}

export default Chillsbay
