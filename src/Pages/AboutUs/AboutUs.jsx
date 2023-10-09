/* eslint-disable react/no-unescaped-entities */
import image_1 from "/src/assets/EventPlanner.jpg"
import image_2 from "/src/assets/6-2.jpg"
import image_3 from "/src/assets/3-3.jpg"
import image_4 from "/src/assets/5-2.jpg"
import image_5 from "/src/assets/2-1.jpg"
import image_6 from "/src/assets/7-2.jpg"
import image_7 from "/src/assets/8-2.jpg"
import { PiMaskHappyLight } from "react-icons/pi";
import { BsBalloon } from "react-icons/bs";
import { GiGlassCelebration } from "react-icons/gi";
import { MdOutlineCelebration } from "react-icons/md";

const AboutUs = () => {
    return (
        <div>
            <div className="hero bg-center bg-cover min-h-[350px] lg:min-h-[500px] md:min-h-[400px] mb-10" style={{backgroundImage: `url(${image_1})`}}>
  <div className="w-full h-full text-[#fd614a] text-center bg-black bg-opacity-80 grid content-center items-center">
    <div className="px-">
      <h2 className="mb-5 text-3xl underline md:text-5xl font-bold">About Us</h2>
    </div>
  </div>
</div>
        {/* 1st about */}
        <div className="md:flex gap-10 my-10 px-5">
            <div className="grid md:w-1/2 lg:w-4/5 mb-5 content-center items-center">
                <h2 className="text-4xl font-bold ">Who We Are?</h2>
                <p className="text-black font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis semper tortor. Quisque non felis elementum augue ullamcorper laoreet. Nam porta leo ut felis suscipit, vel semper lectus vehicula. Nulla vitae porta leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce bibendum arcu in lacinia condimentum.</p>
            </div>
            <div className=" md:w-1/2 lg:1/5">
            <img className="rounded-md w-full" src={image_2} alt="" />
            </div>
        </div>
        {/* 2nd About */}
        <div className="md:flex gap-10 flex-row-reverse my-10 px-5">
            <div className="grid md:w-1/2 lg:w-4/5 mb-5 content-center items-center">
                <h2 className="text-4xl font-bold ">What We Can Do?</h2>
                <p className="text-black font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis semper tortor. Quisque non felis elementum augue ullamcorper laoreet. Nam porta leo ut felis suscipit, vel semper lectus vehicula. Nulla vitae porta leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce bibendum arcu in lacinia condimentum.</p>
            </div>
            <div className=" md:w-1/2 lg:1/5">
            <img className="rounded-md w-full" src={image_3} alt="" />
            </div>
        </div>


        <div className="my-10 bg-[#ff4e50] text-center py-10">
            <h2 className="text-4xl font-bold text-white">Four Reasons Why You Should Choose Us</h2>
        </div>
        

        {/* 3nd About */}
        <div className="md:flex flex-row-reverse">
        <div className="md:w-1/2">
            <div className="grid content-center items-center">
          <div className="card-body items-center text-center">
            <PiMaskHappyLight className="text-7xl text-[#ff5b00]"></PiMaskHappyLight>
            <h2 className="card-title">Friendly Team</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis semper tortor.Quisque non felis elementum augue ullamcorper laoreet. Nulla vitae porta leo.</p>
          </div>
        </div>
            </div>
            <div className=" md:w-1/2">
            <img className=" w-full" src={image_4} alt="" />
            </div>
        </div>
        {/* 4nd About */}
        <div className="md:flex ">
        <div className="md:w-1/2">
            <div className="grid content-center items-center">
          <div className="card-body items-center text-center">
            <BsBalloon className="text-7xl text-[#ff5b00]"></BsBalloon>
            <h2 className="card-title">Perfect Venues</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis semper tortor.Quisque non felis elementum augue ullamcorper laoreet. Nulla vitae porta leo.</p>
          </div>
        </div>
            </div>
            <div className=" md:w-1/2">
            <img className=" w-full" src={image_5} alt="" />
            </div>
        </div>
        {/* 5nd About */}
        <div className="md:flex flex-row-reverse">
        <div className="md:w-1/2">
            <div className="grid content-center items-center">
          <div className="card-body items-center text-center">
            <GiGlassCelebration className="text-7xl text-[#ff5b00]"></GiGlassCelebration>
            <h2 className="card-title">Unique Scenarios</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis semper tortor.Quisque non felis elementum augue ullamcorper laoreet. Nulla vitae porta leo.</p>
          </div>
        </div>
            </div>
            <div className=" md:w-1/2">
            <img className=" w-full" src={image_6} alt="" />
            </div>
        </div>
        {/* 6nd About */}
        <div className="md:flex ">
        <div className="md:w-1/2">
            <div className="grid content-center items-center">
          <div className="card-body items-center text-center">
            <MdOutlineCelebration className="text-7xl text-[#ff5b00]"></MdOutlineCelebration>
            <h2 className="card-title">Unforgettable Time</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis semper tortor.Quisque non felis elementum augue ullamcorper laoreet. Nulla vitae porta leo.</p>
          </div>
        </div>
            </div>
            <div className=" md:w-1/2">
            <img className=" w-full" src={image_7} alt="" />
            </div>
        </div>
        
{/* 5th section(customer review) */}
<div className="mt-10 border-t-2">
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

export default AboutUs;