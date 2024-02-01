import React, { useState } from 'react'
import { TiArrowSortedDown } from "react-icons/ti";
import { RiArrowUpSFill } from "react-icons/ri";

function NigeriaFood() {

  const [displayLocal, setdisplayLocal] = useState(false)

  const displayFood = () => {
    setdisplayLocal (!displayLocal);
  }

  return (
    <div>
      <div className='border-b border-black font-bold flex justify-between'>
        <div className='border-b border-black font-bold mt-2 uppercase' >
            <h1 >Nigeria DISHES</h1>
        </div>
        <div className=' ' onClick={displayFood}>
          {!displayLocal ? < RiArrowUpSFill size={30} /> : < TiArrowSortedDown size={30} />}   
        </div>
       </div>
        <div  className={displayLocal ? ' px-[5%] mt-5' : 'hidden'} onClick={displayFood} >
         <div className='grid lg:grid-cols-4 grid-cols-2 gap-10 mb-10'>
             
          </div>
        </div>
    </div>
  )
}

export default NigeriaFood