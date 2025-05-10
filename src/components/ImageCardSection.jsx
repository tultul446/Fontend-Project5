import React from 'react'

const ImageCardSection = () => {
  const cards = [
    {
     ImgSrc:'./Shadow4.png',
     title:'Eat & Drink'
    },
    {
     ImgSrc:'./Shadow3.png',
     title:'Events'
    },
    {
     ImgSrc:'./Shadow2.png',
     title:'Club'
    },
    {
     ImgSrc:'./Shadow1.png',
     title:'Things to do'
    }
  ]
  return (
    <section className='text-center'>
      <h1 className='text-[#26395C] text-center   mt-10 mb-8 text-[42px] '>What are you in the mood for?
</h1>
<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-5 mb-8 container mx-auto p-6 '>
{
  cards.map((card, i) => (
    <div key={i} className='flex flex-col items-center overflow-hidden'>
       <img className='w-full h-[500px] lg:h-[650px]' src={card.ImgSrc} alt="" />
       <h2 className='text-[#26395C]  text-[32px] font-semibold'>{card.title}</h2>
    </div>
  ))
}
</div>
    </section>
  )
}

export default ImageCardSection
