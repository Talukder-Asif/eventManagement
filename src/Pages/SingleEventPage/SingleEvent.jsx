import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleEvent = () => {
  const params = useParams();
  console.log(params.id);

  const [Events, setEvents] = useState();
  useEffect(() => {
    fetch("/Events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);
  const Event = Events?.find((events) => events?.id === params.id);
  console.log(Event);

  return (
    <div>
      <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={Event?.images[0]} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={Event?.images[1]} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={Event?.images[2]} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

    <div className="my-5 px-5 text-center">
    <h2 className="text-5xl inline px-10 font-bold border-b-2 border-[#fd614a] text-[#fd614a] ">{Event?.name}</h2>
    <div>
        <p className="text-justify mt-10">
            {Event?.description}
        </p>
    </div>
    </div>

    </div>
  );
};

export default SingleEvent;
