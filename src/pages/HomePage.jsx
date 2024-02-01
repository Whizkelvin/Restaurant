import React from 'react'


import HeroSection from "../components/HeroSection";


function HomePage() {
  return (
    <>
      <div>
        <div className="w-full relative">
          <div className="w-full ">
            <img
              src="https://res.cloudinary.com/dnkk72bpt/image/upload/v1706566570/Raw_Fresh_Meat_Striploin_Steak_And_Seasoning_Stock_Photo_-_Image_of_uncooked_pepper__46104324_ocwrnx.jpg"
              alt="food"
              className="w-full h-screen object-cover"
            />
          </div>
          <div className="absolute px-[3%] text-white top-0">
            <HeroSection />
          </div>
          <div>
         
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;


