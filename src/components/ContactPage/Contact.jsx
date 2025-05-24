import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Contact = () => {
  const Items = [
    {
      img:"./Influencer.png",
      heading:"Become an Influencer",
      des:"Join a company that’s passionate about design and technology",
      website:"chills@chillsbay.com"
    },
    {
      img:"./headphone.png",
      heading:"Need Help?",
      des:"Questions about using  Market? Our support team is here to help.",
      website:"chills@chillsbay.com"
    },
    {
      img:"./search.png",
      heading:"Refunds & Others",
      des:"",
      website:"chills@chillsbay.com"
    },
  ]
  return (
    <section>
        
      <div className='lg:w-[90%] mx-auto mt-7 lg:flex lg:ml-5'>
     
        {/* left side */}
          <div className='container lg:w-1/2 w-full  lg:text-start p-4 ml-8 lg:mt-24 lg:ml-44'>
             
           <h2 className='text-[#26395C] text-[42px] font-bold '>Contact Us</h2>
            <p className='text-[16px] text-[#656B89] w-[60%] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo nunc, quisque ultricies netus elit massa aliquam quis cras. Enim leo, in massa sapien facilisi netu.</p>
             <p className='flex gap-4 mt-5'>
                <img src="./phone.png" alt="" className='w-[23px] h-[20px] text-[#26395C]'/>
                <span>(840) 371 - 2514</span>
             </p>
             <p className='flex gap-3 mt-5'>
                <img src="./email.png" alt="" className='w-[23px] h-[20px] text-[#26395C]'/>
                <span>chills@chillsbay.com</span>
             </p>
 </div>
          
          {/* right side */}
            <div className='lg:w-1/2 w-full bg-white rounded-2xl shadow-xl mt-9 border border-gray-300 p-6 '>
         
       <form>

            <div className='lg:flex items-center lg:justify-between gap-3 md:ml-0 ml-8'>
              <span className='grid '>
              <label htmlFor="" >First Name </label>
        <input type="text" name="text" id="text" placeholder='Frist Name' className='bg-[#eaf0f5]  w-[240px]   lg:w-[260px] lg:h-[49px] text-shadow-emerald-300 rounded-lg p-2 lg:px-3 mt-2' />
          </span><br/>
              <span>
              <label htmlFor="">Last Name </label><br/>
        <input type="text" name="text" id="text" placeholder='Last Name' className='bg-[#eaf0f5] w-[240px]   lg:w-[260px] lg:h-[49px] text-shadow-emerald-300 rounded-lg p-2 lg:px-3 mt-2' />
          </span>
     </div>

     
            
            <div className='lg:flex items-center justify-between mt-6 lg:ml-0 ml-7'>
              <span>
              <label htmlFor="" >Email Address </label><br/>
        <input type="email" name="email" id="email" placeholder='Enter your email Address...' className='bg-[#eaf0f5] w-[240px] text-sm  lg:w-[260px]  lg:h-[49px] text-shadow-emerald-300 rounded-lg p-3 lg:px-3 mt-2'/>
          </span><br/>
              <span>
              <label htmlFor="" >Phone number </label><br/>
        <input type="number" name="number" id="num" placeholder='Phone number' className='bg-[#eaf0f5]  w-[240px] lg:w-[260px] lg:h-[49px] text-shadow-emerald-300 rounded-lg p-3 lg:px-3 mt-2'/>
          </span>
     </div>

<div className='w-full mx-auto ml-7  md:ml-2'>
  <select name="text" id="" className='w-[240px] lg:w-[550px] h-[49px] bg-[#eaf0f5] mt-6 p-2 lg:px-3 rounded-md'>
    <label htmlFor="">Subject</label>
    <option value="">Select Option</option>
    <option value="Bangla">Bangla</option>
    <option value="English">English</option>
    <option value="Computer">Computer</option>
   
  </select>
</div>
<div className='mt-5 mb-5'>
<textarea name="tex" id="" placeholder='Message' className='w-[240px] lg:w-[556px] h-[137px] bg-[#eaf0f5] p-4 ml-7 md:ml-0'></textarea>

</div>

</form>

     <Button variant="contained" className='mt-5 w-[240px] lg:w-[550px] rounded-xl md:ml-0 '>SEND MESSAGE</Button>   
          

       




</div>
     
       
         

     
</div>


<div className='container mt-24 mb-24'>
  <div className='grid grid-cols-1 lg:grid-cols-3 gap-3   m-9
   lg:ml-38'>
    {
     Items.map((item, i) => (
      <div key={i} className='text-center justify-center items-center w-[232px] h-auto ' >
       <img src={item.img} alt="" className='w-12 h-12 rounded-full mb-4 mx-auto mt-5'/>
       <h2 className='lg:w-[218px]  text-[20px] ml-4  font-bold text-[#26395C]'>{item.heading}</h2>
       <p className='text-sm text-[#656B89] w-[277px] h-[60px] mt-2'>{item.des}</p>
       <a href={item.website} className='text-[#0E8BFF]'>{item.website}</a>
      </div>
     ))
    }
  </div>

</div>

    </section>
  )
}

export default Contact;
