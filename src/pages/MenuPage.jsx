import React from 'react'
import LocalFood from '../components/LocalFood'
import NigeriaFood from '../components/NigeriaFood'
import ContinentalFood from '../components/ContinentalFood'
import PizzaHub from '../components/PizzaHub'
import SpecialBeans from '../components/SpecialBeans'

function MenuPage() {
  return (
    <div className='mt-2 ' >
      <div className=' w-full'>
              <div className='bg-black  h-[70px] text-center justify-center items-center text-white'>
                <h1>Dishes</h1>
              </div>
           <div className='px-[5%]'>
              <div className='mt-2'>
                <LocalFood />
              </div>
              <div className='mt-2'>
                <NigeriaFood />
              </div>
              <div>
                <ContinentalFood />
              </div>
              <div>
                <PizzaHub />
              </div>
              <div>
                <SpecialBeans />
              </div>
            </div>
        </div>
      </div>
    
  )
}

export default MenuPage