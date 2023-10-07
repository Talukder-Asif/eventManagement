import { PiMaskHappyLight } from "react-icons/pi";
import { BsBalloon } from "react-icons/bs";
import { GiGlassCelebration } from "react-icons/gi";
import { MdOutlineCelebration } from "react-icons/md";
import image_1 from "/src/assets/2-1.jpg"
import { useEffect, useState } from "react";
import Servise from "./Service/Servise";
import { Link } from "react-router-dom";
const Home = () => {


  const [Events, setEvents] = useState();
  useEffect(() => {
    fetch('/public/Events.json')
    .then(res => res.json())
    .then(data => setEvents(data?.slice(0,6)))
  },[])
console.log(Events)
  return (
    <div>
    {/* 1st Part */}
      <div className="">




      <div className="carousel w-screen">
  <div id="slide1" className="carousel-item bg-center bg-cover bg-[url('https://demo.ovatheme.com/dvents/wp-content/uploads/2017/06/bg-1-1.jpg')] relative w-full">
    <div className="w-full h-full p-10 md:p-40 text-center bg-black bg-opacity-60">
      <p className="italic text-base md:text-2xl md:mb-10 font-bold text-white">Birthday Event Management Specialists</p>
      <h3 className="text-2xl md:text-5xl font-bold text-white ">CELEBRATE YOUR EVENTSTHAT LASTS LONGER</h3>

    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item bg-center bg-cover bg-[url('https://demo.ovatheme.com/dvents/wp-content/uploads/2017/06/bg-2-1.jpg')] relative w-full">
    
  <div className="w-full h-full p-10 md:p-40 text-center bg-black bg-opacity-60">
      <p className="italic text-base md:text-2xl md:mb-10 font-bold text-white">Birthday Event Management Specialists</p>
      <h3 className="text-2xl md:text-5xl font-bold text-white ">CELEBRATE YOUR EVENTSTHAT LASTS LONGER</h3>
    </div>
    
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>





      </div>

      {/* 2nd part */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 w-11/12 m-auto my-10">
        <div className="card   bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <PiMaskHappyLight className="text-7xl text-[#ff5b00]"></PiMaskHappyLight>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Friendly Team</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <div className="card-actions">
              <button className="text-[#ff4e50] font-bold text-lg hover:underline">
                About Us
              </button>
            </div>
          </div>
        </div>

        <div className="card   bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <BsBalloon className="text-7xl text-[#ff5b00]"></BsBalloon>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Perfect Venues</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <div className="card-actions">
              <button className=" text-[#ff4e50] font-bold text-lg hover:underline">
                Events
              </button>
            </div>
          </div>
        </div>

        <div className="card   bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <GiGlassCelebration className="text-7xl text-[#ff5b00]"></GiGlassCelebration>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Unique Scenarios</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <div className="card-actions">
              <button className=" text-[#ff4e50] font-bold text-lg hover:underline">
                Our Team
              </button>
            </div>
          </div>
        </div>

        <div className="card   bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <MdOutlineCelebration className="text-7xl text-[#ff5b00]"></MdOutlineCelebration>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Unforgettable Time</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <div className="card-actions">
              <button className=" text-[#ff4e50] font-bold text-lg hover:underline">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* 3rd Section */}

      <div className="pt-10">
      <h3 className="text-5xl text-center font-bold text-[#242120] py-10">Our Services</h3>
      <div className="grid grid-cols-3 gap-5">
          {
            Events?.map((Event)=>
              <Servise key={Event.id} Event={Event}></Servise>)
          }
      </div>
      <div className="text-center"><button className="px-10 my-10 rounded-full py-5 bg-[#ff4e50] text-white font-semibold text-lg hover:bg-[#ff6000]"><Link to={`/services`}>Show Details</Link></button></div>
      </div>

      {/* 4rd section */}
      <div className="hero bg-center bg-cover min-h-[500px] lg:min-h-[700px] md:min-h-[600px] my-10" style={{backgroundImage: `url(${image_1})`}}>
  <div className=" text-center text-neutral-content">
    <div className="max-w-2xl">
      <h2 className="mb-5 text-5xl font-bold">Celebrate With Us!</h2>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="px-10 rounded-full py-5 bg-[#ff4e50] text-white font-bold text-lg hover:bg-[#ff6000]">Let Gets Started!</button>
    </div>
  </div>
</div>

      {/* 5th Section (Review) */}

      <div className=" m-auto text-center my-10">
      <h3 className="text-5xl font-bold text-black py-10">Our Galary</h3>
      
      </div>


    </div>
  );
};

export default Home;
