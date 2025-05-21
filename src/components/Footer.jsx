import React from 'react'
import Button from '@mui/material/Button';
const footerData = {
     socialIcon : [
       "./facebook1.png",
        "./Twitter.png", 
       "./link.png", 
       "./youtube.png", 
       "./tiktok.png", 
       "./Instagram.png"
       
    ],

  sections : [
   {
    title:'Menu',

    menus: [

            {
             items : [ "home", "Eat", "Drink", "Events", "Club" ] },

            {
             items : ["Blog", "Careers", "Contact", "FAQs" ] }
         
       ]
    },

   {
    title:'Utility Pages',
    menus: [
            {
             items : ["Start Here", "Pay with Crypto", "Style Guide", "Password Protected", "404 Not Found", "Licenses", "Changelog"] },
       ]
           
    },
  ],

partnerSection: {

    image:'./Group96.png',
    title:'Become a Partner',
    des:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod pellentesque posuere.'

},

logo:"./Group1.png",
copyRight:"Copyright 2022 © "

}
const MenuSection = ({title, menus}) => {
 return (
     <div>
        <p className='font-semibold text-2xl  border-b-1 border-[#cdced3] mb-5 lg:w-[200px]  '>{title}</p>
        <div className='flex text-sm  lg:text-lg mx-auto gap-[2rem] lg:gap-[4.5rem] '>
            {menus.map((menu, i) => (
                 <ul key={i}>
                    {menu.items.map((item, idx) => (
                       <li key={idx} className='text-[#656B89] mt-2 '>{item}</li>
                    ))}
                </ul>
            ))}
            </div>
    </div>
 )
 }



  function Footer()  {
  const {socialIcon, sections, partnerSection, logo, copyRight} = footerData;
   
  return (
    <footer className=' py-10   lg:m-7 lg:p-5 h-auto'>
      <div className=' lg:flex space-x-1 justify-center  lg:justify-between items-center px-6 py-8'>
        {/* left side*/}


        <div className='sm:ml-34 lg:ml-9 p-2 mb-4 lg:-mt-34'>
         <img src={logo} alt=""  />
         <p className='text-[#26395C] text-[15px] font-sm mb-4'>{copyRight}</p>
         <div className='flex  space-x-4'>
            {socialIcon.map((icon, index) => (
            <a href="" key={index}>
                <img src={icon} alt="" className=' '/>
            </a>
  ))}
         </div>
        </div>
         
         {/* middle side */}
   <div className='flex-col-reverse flex lg:flex-row lg:justify-between gap-12 lg:-ml-9'>
       


         <div className='w-full flex justify-center  gap-4 lg:gap-15 mt-3 lg:mt-5'>
          {sections.map((section , i ) => (
           <MenuSection 
           key={i}
           title={section.title}
           menus={section.menus}
           
           />

           
          ))}  
        </div> 


      {/* right side */}
     <div className=''>
       <div  className='sm:ml-36  lg:ml-0 w-[298px] bg-[#F5FAFF]  h-fit rounded-lg p-5  '>
        <img src={partnerSection.image} alt="" className='px-4'/>
        <h2 className='text-[22px] text-[#26395C] font-bold px-1'>{partnerSection.title}</h2>
        <p className='text-[#656B89] text-[16px] px-1 py-4'>{partnerSection.des}</p>

          <div>
             <Button
             className='w-56 '
             variant="contained" disableElevation>
      Join Now
    </Button>
          </div>



       </div>
</div>

</div>
</div>
      
    </footer>
  )
}

export default Footer
