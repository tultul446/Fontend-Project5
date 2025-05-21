import React, { useState } from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";
import PayModal from './PayModel';

const Payment = () => {
const [showPaymentInfo, setShowPaymentInfo ] =   useState(false)



  const [CardItem, setCardItem] = useState([
    {
      Id:1,
      img:'./men1.png',
       title:'The 90s with Dj Neptune',
       date:'Dec 12 2022',
       location:'Quilox Club',
       time:'9:00 PM ',
       price:45000.00,
       Quantity:1

    },
    {
      Id:1,
      img:'./person2.png',
       title:'The 90s with Dj Neptune',
       date:'Dec 12 2025',
       location:'Quilox Club',
       time:'9:00 PM ',
       price:45000.00,
       Quantity:2

    },
  ]);

const upDateQuantity = (id, increment) => {
setCardItem ((items) => (
  items.map((item) => (
    item.Id === id ? 
    {
      ...item,
      Quantity: Math.max(item.Quantity + increment, 1 ),
      price:
      Math.max(item.Quantity + increment, 1 ) * 
       (item.price / item.Quantity)
    }
    : item
  ))
))
};

const removeItem = (Id) => {
setCardItem(CardItem.filter((item) => item.Id !== Id))
};


const addNewItem = () => {
  const NewItem = {
    Id:CardItem.length + 1,
    img: "./person2.png",
     title:'The 90s with Dj Neptune',
      date:'Dec 12 2025',
        location:'Quilox Club',
       time:'9:00 PM ',
       price:500.00,
       Quantity:1
  }
  setCardItem([...CardItem, NewItem ])
}



  return (
    <section className='flex flex-col lg:flex-row gap-6 border border-gray-300 w-[80%] mx-auto mt-24'>
      {/* left side */}
      <div className='flex-1 p-6'>
       <h2 className='text-xl font-semibold text-[#969DAA] mb-5'>Your Cart</h2>
       {
        CardItem.map((item) => (
         <div key={item.Id} className='md:flex items-center gap-4 mb-6 p-4 border-b-1 border-gray-200 ' >
          <img src={item.img} alt="" className='w-24 h-24 rounded-lg '/>
           
           <div className=' flex-1 space-y-1.5 ml-3'>
             <h3>{item.title}</h3>
             <div className='mt-4'>
              <div className='space-y-2 md:space-y-[2] md:flex  gap-3 items-center '>
               <div className='flex items-center gap-2'>
             <img src="./Calendar.png" alt="" className='w-4 h-4'/>
             <p className='text-sm text-gray-600'>{item.date}</p>
               </div>
               <div className='flex items-center gap-2'>
             <img src="./Clock.png" alt="" className='w-4 h-4'/>
             <p className='text-sm text-gray-600'>{item.time}</p>
               </div>
               <div className='flex items-center gap-2'>
             <img src="./Mark.png" alt="" className='w-4 h-4'/>
             <p className='text-sm text-gray-600'>{item.location}</p>
               </div>
               </div>

              <div>

              </div>
             </div>


          {/* Quantity control */}
         
           <div className='flex items-center gap-4 bg-gray-200 rounded w-[90px] sm:w-[190px] md:w-[24%] lg:-[15%] justify-center md:ml-5'>
          <button className='px-2 py-1 hover:bg-gray-300'
          onClick={()=> upDateQuantity(item.Id, - 1)}
          > -</button>
          <span>{item.Quantity}</span>

          <button className='px-2 py-1 hover:bg-gray-300'
            onClick={()=> upDateQuantity(item.Id, + 1 )}
          >+</button>
           </div>

          <p className='mt-2 text-lg font-bold '> ₦{item.price}</p>
            {/* Remove item button */}
        
          </div>
 <button 
           onClick={() => removeItem(item.Id)}
           >
          <AiOutlineClose />
           </button>
          


         </div>
        ))}

       <button 
       className='bg-sky-500 text-white p-2 rounded-lg'
       onClick={addNewItem}>
        Add new Item
       </button>


      </div>
      
     {/* left item */}
   
       <div className='flex-1 p-7 border-1 border-gray-200'>
         {/* Account information */}
         <div className='mb-6'>
          <div className='flex gap-2'>
          <img src="./check.png" alt="" className='w-[26px] h-[26px] mt-2'/>
          <h3 className='text-[#26395C] text-2xl font-semibold'>Account information</h3>
       </div>
          <div className='!ms-8'>
            <p className='text-lg text-[#26395C]'>Tunde Chukwu</p>
            <p className='text-lg text-[#26395C]'>tundechukwu12@gmail.com</p>
          </div>
         </div>

   
     {/* Phone Information */}
 <div className='mb-6'>
          <div className='flex gap-2'>
          <img src="./check.png" alt="" className='w-[26px] h-[26px] mt-2'/>
          <h3 className='text-[#26395C] text-2xl font-semibold'>Phone number</h3>
       </div>
          <div className='!ms-8'>
            <p className='text-lg text-[#26395C]'>+2341123465799</p>
          </div>
         </div>

          {/* Payment Field with toggle */}

       <div>
          <h3 
          onClick={() => setShowPaymentInfo(!showPaymentInfo)}
          className='flex gap-2'> 
        <img src="./check.png" alt="" className='w-[26px] h-[26px]'/>
          <span className='text-[#26395C] text-xl font-semibold'>Payment <span className='text-gray-300'>card</span></span>
          <span className='mt-1.5'><AiOutlineDown /></span>
         </h3>
         {
          showPaymentInfo && (
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 p-2 mt-5 '>
              <input type="number" placeholder='Card Number' className='w-full p-2 mb-4 border rounded-lg focus:ring-blue-500 focus:border-blue-500'/>
              <input type="text" placeholder='Card holder name' className='w-full p-2 mb-4 border rounded-lg focus:ring-blue-500 focus:border-blue-500'/>
              <input type="date" placeholder='MM/YY' className='w-full p-2 mb-4 border rounded-lg focus:ring-blue-500 focus:border-blue-500'/>
              <input type="time" placeholder='CVV' className='w-full p-2 mb-4 border rounded-lg focus:ring-blue-500 focus:border-blue-500'/>
            </div>
          )
         }

       </div>
       <div className='bg-gray-200 p-4 rounded-lg text-[#26395C] mt-5 '>
        <ul className='mb-4'>
         {
    CardItem.map((item) => (
     <li key={item.Id} className="flex justify-between text-sm py-4 border-b-1 border-gray-200 p-2">
        <span className='md:text-lg font-semibold'>{item.title} x{item.Quantity}</span>
        <span className='md:text-xl font-bold'>₦{item.price.toLocaleString()}</span>
     </li> 
    ))
  }
        </ul>

        <hr  className='my-4 text-gray-50'/>
        <div className='flex justify-between text-md font-bold text-[#26395C] p-2'>
          <span>SubTotal:</span>
          <span>₦{CardItem.reduce((sum, item) => sum + item.price, 0 ).toLocaleString()
            }
            </span>
        </div>
        {/* text calculation */}

        <div className='flex justify-between mt-2 p-2'>
          <span>Tax (5%): </span>
          <span>
            ₦{(
             CardItem.reduce((sum, item) => sum + item.price, 0) * 0.05 ).toLocaleString() }
          </span>
        </div>
      


      {/* Total Calculator */}
       <hr  className='my-2 text-gray-100'/>
       <div className='flex justify-between font-bold p-2'>
      <span>  Total Amount:</span>
      <span> ₦ {(
        CardItem.reduce((sum, item) => sum + item.price, 0) * 1.05
      ).toLocaleString()
      } </span>
       </div>
     
     <PayModal/>
       </div>
       
 </div>




    </section>
  )
}

export default Payment
