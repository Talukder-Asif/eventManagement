import { useEffect, useState } from "react";
import Servise from "../HomePage/Service/Servise";
import image_1 from "/src/assets/EventPlanner.jpg"


const ServicePage = () => {
    const [Events, setEvents] = useState();
  useEffect(() => {
    fetch('/public/Events.json')
    .then(res => res.json())
    .then(data => setEvents(data))
  },[])
    return (
    <div>


<div className="hero bg-center bg-cover min-h-[350px] lg:min-h-[500px] md:min-h-[400px] mb-10" style={{backgroundImage: `url(${image_1})`}}>
  <div className="w-full h-full text-white text-center bg-black bg-opacity-80 grid content-center items-center">
    <div className="px-">
      <h2 className="mb-5 text-3xl md:text-5xl font-bold">Our Awesome Services</h2>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
  </div>
</div>



        <div className="py-10 px-5">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {
            Events?.map((Event)=>
              <Servise key={Event.id} Event={Event}></Servise>)
          }
      </div>
      </div>
    </div>
    );
};

export default ServicePage;