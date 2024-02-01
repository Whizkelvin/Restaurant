import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";

function HeroSection() {
  return (
    <>
      <div className=" mt-[20%] md:mt-[16%] lg:mt-[6%] ">
        <div className="mb-[2%]">
          <h3 className=" italic font-bold text-2xl md:text-5xl ">We invite you to our restaurant</h3>
          <h4 className="font-bold text-[30px] md:text-[70px]">Where we serve  </h4>
          <h1 className="font-bold text-[60px] md:text-[70px]">
            <ReactTyped strings = {['Delicious', 'Afordable', 'Healthy']} typeSpeed = {190} backSpeed = {140} loop />
            <br /><span  className=" text-[80px] md:text-[160px] ">Food</span> 
          </h1>
          {/* <h1   className="font-bold text-[120px] md:[150px]">FOOD</h1> */}
          
        </div>
        <div className="md:block flex gap-2">
          <Link to={"/menu"}>
            <button className="text-white  hover:bg-red-700 hover:duration-500 px-10 mr-8 py-3 rounded-3xl border border-solid border-white">Log In</button>
          </Link>
          <Link>
            <button className="text-white  hover:bg-red-700 hover:duration-500 px-10 mr-8 py-3 rounded-3xl border border-solid border-white">Sign up</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default HeroSection;