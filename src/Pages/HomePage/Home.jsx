/* eslint-disable react/no-unescaped-entities */
import { PiMaskHappyLight } from "react-icons/pi";
import { BsBalloon } from "react-icons/bs";
import { GiGlassCelebration } from "react-icons/gi";
import { MdOutlineCelebration } from "react-icons/md";
import image_1 from "/src/assets/2-1.jpg";
import { useEffect, useState } from "react";
import Servise from "./Service/Servise";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
const Home = () => {
  const [Events, setEvents] = useState();
  useEffect(() => {
    fetch("Events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data?.slice(0, 6)));
  }, []);
  console.log(Events);
  return (
    <div>
      {/* Reset 1st slider */}
      <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="h-[300px] lg:h-[600px] bg-center bg-cover bg-[url('https://demo.ovatheme.com/dvents/wp-content/uploads/2017/06/bg-1-1.jpg')] relative">
        <div className="w-full h-full p-5 md:p-40 text-center bg-black bg-opacity-70 grid content-center items-center">
          <p className="italic text-base md:text-2xl md:mb-10 font-bold text-white">
            Best Event Management Services in your city
          </p>
          <h3 className="text-2xl md:text-5xl font-bold text-white ">
            CELEBRATE YOUR SPECIAL EVENTS MORE SPECIAL
          </h3>
        </div>
      </div>

      {/* 2nd part */}
      <div className="grid px-5 md:grid-cols-2 lg:grid-cols-4 gap-5 w-11/12 m-auto my-10">
        <div data-aos="fade-up" className="card   bg-base-100 shadow-xl">
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

        <div data-aos="fade-up" className="card   bg-base-100 shadow-xl">
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

        <div data-aos="fade-up" className="card   bg-base-100 shadow-xl">
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

        <div data-aos="fade-up" className="card   bg-base-100 shadow-xl">
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

      <div className="pt-5 md:pt-10 px-5">
        <h3 className="text-3xl md:text-5xl text-center font-bold text-[#242120] py-10">
          Our Services
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Events?.map((Event) => (
            <Servise  key={Event.id} Event={Event}></Servise>
          ))}
        </div>
        <div className="text-center">
          <button className="px-5 md:px-10 my-10 rounded-full py-2 md:py-5 bg-[#ff4e50] text-white font-semibold text-base md:text-lg hover:bg-[#ff6000]">
            <Link to={`/services`}>Show More</Link>
          </button>
        </div>
      </div>

      {/* 4rd section */}
      <div
        className="hero bg-center bg-cover min-h-[350px] lg:min-h-[500px] md:min-h-[400px] my-10"
        style={{ backgroundImage: `url(${image_1})` }}
      >
        <div className=" text-center text-neutral-content">
          <div className="max-w-2xl">
            <h2 className="mb-5 text-3xl md:text-5xl font-bold">
              Celebrate With Us!
            </h2>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="px-5 md:px-10 rounded-full py-2 md:py-5 bg-[#ff4e50] text-white font-bold text-base md:text-lg hover:bg-[#ff6000]">
              <a href="/contact">Let Gets Started!</a>
            </button>
          </div>
        </div>
      </div>

        {/* 5th section(customer review) */}
      <div>
      <h2 className="text-5xl text-center mb-5 font-bold text-[#fd614a] ">Our Happy Clint</h2>
      <div className="grid mb-8 px-5 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
  <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
      
      <p className="my-4">
      I can't thank Happy Event enough for their exceptional service. They organized our company's annual gala, and it was a massive success. From the stunning decor to the seamless coordination, everything was top-notch. Our guests were thoroughly impressed, and I received countless compliments. Happy Event turned our vision into a reality, and I highly recommend their services.
      </p>
    </blockquote>
    <figcaption className="flex items-center justify-center space-x-3">
      <img
        className="rounded-full w-9 h-9"
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
        alt="profile picture"
      />
      <div className="space-y-0.5 font-medium dark:text-white text-left">
        <div className="text-[#fd614a]">Sarah Johnson</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
        Marketing Manager XYZ Corporation
        </div>
      </div>
    </figcaption>
  </figure>
  <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
      <p className="my-4">
      Happy Event truly exceeded our expectations. They flawlessly planned our product launch event, and it was a game-changer for us. Their attention to detail, creativity, and dedication to our brand's message were outstanding. The event was a massive hit, and it wouldn't have been possible without Happy Event. I'm grateful for their expertise.
      </p>
    </blockquote>
    <figcaption className="flex items-center justify-center space-x-3">
      <img
        className="rounded-full w-9 h-9"
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
        alt="profile picture"
      />
      <div className="space-y-0.5 font-medium dark:text-white text-left">
        <div className="text-[#fd614a]">Roberta Casas</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          CEO at Acme Industries
        </div>
      </div>
    </figcaption>
  </figure>
  <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
      <p className="my-4">
      We hired Happy Event for our annual employee appreciation day, and they delivered an unforgettable experience. From team-building activities to delightful catering, every aspect of the event was well thought out. Our employees were genuinely touched by the effort put into making them feel valued. Happy Event made us look like rock stars in front of our team!
      </p>
    </blockquote>
    <figcaption className="flex items-center justify-center space-x-3">
      <img
        className="rounded-full w-9 h-9"
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
        alt="profile picture"
      />
      <div className="space-y-0.5 font-medium dark:text-white text-left">
        <div className="text-[#fd614a]">Jese Leos</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
        HR Manager at Bright Future Inc.
        </div>
      </div>
    </figcaption>
  </figure>
  <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
      
      <p className="my-4">
      I celebrated my 50th birthday with Happy Event, and it was an absolute blast. They transformed my backyard into a magical party venue, complete with live music and exquisite cuisine. The attention to detail was remarkable, and the event felt tailor-made for me. I couldn't have asked for a better way to mark this milestone.
      </p>
    </blockquote>
    <figcaption className="flex items-center justify-center space-x-3">
      <img
        className="rounded-full w-9 h-9"
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
        alt="profile picture"
      />
      <div className="space-y-0.5 font-medium dark:text-white text-left">
        <div className="text-[#fd614a]">Joseph McFall</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
        Private Client
        </div>
      </div>
    </figcaption>
  </figure>
</div>
      </div>



    </div>
  );
};

export default Home;
