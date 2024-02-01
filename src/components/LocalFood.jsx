
import React, { useState } from 'react'
import { TiArrowSortedDown } from "react-icons/ti";
import { RiArrowUpSFill } from "react-icons/ri";

function LocalFood() {

  const [displayLocal, setdisplayLocal] = useState(false)

  const displayFood = () => {
    setdisplayLocal (!displayLocal);
  }

  return (
    <div className='mb-10'>
      <div className='border-b border-black font-bold flex justify-between'>
        <div >
            <h1 className=' font-medium text-4xl'>Ghana Dishes</h1>
        </div>
        <div className=' ' onClick={displayFood}>
          {!displayLocal ? < RiArrowUpSFill size={30} /> : < TiArrowSortedDown size={30} />}   
        </div>
       </div>
        <div  className={displayLocal ? ' px-[5%] mt-5' : 'hidden'} onClick={displayFood} >
         <div className='grid lg:grid-cols-4 grid-cols-2 gap-10 mb-10'>
              <div className=' flex flex-col text-center  items-center justify-center shadow-lg px-3 w-full'>
                <img className=' h-28  rounded-full' src="https://res.cloudinary.com/dnkk72bpt/image/upload/v1706795719/1_wxsPQhI9h-7h6AOf3Hb1Gw_h8wtxi.jpg" alt="banku" />
                <p>Banku with Okro and Meat</p>
                <p className='text-red-700'>Ghc 30.00</p>
              </div>

              <div className=' flex flex-col text-center  items-center justify-center shadow-lg px-3 w-full'>
                <img className='h-32  rounded-full ' src="https://res.cloudinary.com/dnkk72bpt/image/upload/v1706795713/kontomire-stew_qr1vg9.jpg" alt="banku" />
                <p>Yam with Kontomire</p>
                <p className='text-red-700'>Ghc 20.00</p>
              </div>

              <div className='flex flex-col text-center  items-center justify-center shadow-lg px-3 w-full'>
                <img className='  h-24 rounded-full ' src="https://res.cloudinary.com/dnkk72bpt/image/upload/v1706795713/Fufu-is-a-popular-dish-from-Ghana_27s-Ashanti-region_qlchyx.jpg" alt="banku" />
                <p>Fufu with light soup and meat</p>
                <p className='text-red-700'>Ghc 40.00</p>
              </div>

              <div className='flex flex-col text-center  items-center justify-center shadow-lg'>
                <img className='h-32  rounded-full ' src="https://res.cloudinary.com/dnkk72bpt/image/upload/v1706795713/Jollof_me3gnj.jpg" alt="banku" />
                <p>Jollof Rice with Chicken and Eggs</p>
                <p className='text-red-700'>Ghc 70.00</p>
              </div>

              
              <div className='flex flex-col text-center  items-center justify-center shadow-lg'>
                <img className='h-32  rounded-full ' src="https://res.cloudinary.com/dnkk72bpt/image/upload/v1706795708/T0703WAAKYE_SS_HR_qwqni1.jpg" alt="banku" />
                <p>Waakye with Spag, Pear and Eggs</p>
                <p className='text-red-700'>Ghc 50.00</p>
              </div>

              
              <div className='flex flex-col text-center  items-center justify-center shadow-lg'>
                <img className='h-32 rounded-full ' src="https://res.cloudinary.com/dnkk72bpt/image/upload/v1706795709/220px-Ghanaian_Banku_cuisine_dish_food_rp5knd.jpg" alt="banku" />
                <p>Banku with fish and peper</p>
                <p className='text-red-700'>Ghc 70.00</p>
              </div>

              
              <div className='flex flex-col text-center  items-center justify-center shadow-lg'>
                <img className='h-32  rounded-full ' src="https://res.cloudinary.com/dnkk72bpt/image/upload/v1706795283/kenkey-and-Fish_cbr5zt.jpg" alt="banku" />
                <p>Hot Kenkey</p>
                <p className='text-red-700'>Ghc 60.00</p>
              </div>

              <div className='flex flex-col text-center  items-center justify-center shadow-lg'>
                <img className='h-32  rounded-full ' src="https://res.cloudinary.com/dnkk72bpt/image/upload/v1706795216/intro-1691173250_odeled.jpg" alt="banku" />
                <p>Plantail with Kontomire</p>
                <p className='text-red-700'>Ghc 60.00</p>
              </div>
          </div>
        </div>
    </div>
  )
}

export default LocalFood