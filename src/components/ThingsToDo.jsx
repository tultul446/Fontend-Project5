import React from 'react'

const ThingsToDo = () => {
  const ToDocard = [
    {
     ImgSrc:'./Shadow5.png',
     title:'Sight Seeing'
    },
    {
     ImgSrc:'./Shadow6.png',
     title:'Volley Ball Game'
    },
    {
     ImgSrc:'./Shadow7.png',
     title:'Wizkid Show'
    },
    {
     ImgSrc:'./Shadow7.png',
     title:'Wizkid Show'
    },
    {
     ImgSrc:'./Shadow5.png',
     title:'Sight Seeing'
    },
    {
     ImgSrc:'./Shadow6.png',
     title:'Volley Ball Game'
    },
    {
     ImgSrc:'./Shadow7.png',
     title:'Wizkid Show'
    },
    {
     ImgSrc:'./Shadow7.png',
     title:'Wizkid Show'
    },
  ]
  return (
    <section className='p-2 mx-auto bg-[#F5FAFF] '>

  <div className='container p-4 mx-auto'>

      <h1 className='text-[#26395C] text-center lg:text-start   mt-7 px-5 py-4 mb-8 text-[32px] ml-3 '>Top things to do in Lagos
</h1>
<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-5 mb-8 container mx-auto p-6 '>
{
  ToDocard.map((card, i) => (
    <div key={i} className='flex flex-col items-center overflow-hidden'>
       <img className='w-full h-[270px]' src={card.ImgSrc} alt="" />
       <h2 className='text-[#26395C]  text-[22px] font-semibold mb-5'>{card.title}</h2>
    </div>
  ))
}
</div>
</div>
    </section>
  )
}

export default ThingsToDo

