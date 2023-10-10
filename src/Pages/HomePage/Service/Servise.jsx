import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Servise = ({Event}) => {
    return (
        <div data-aos="zoom-in-down" className="card bg-base-100 shadow-2xl">
  <figure><img src={Event.images[0]} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{Event.name}</h2>
    <p>{Event.description.slice(0,80)}...</p>
    <p className="text-[#ff4e50] font-bold block text-lg hover:underline">Cost: {Event.price}</p>
    <div className="card-actions justify-end">
      <button className="px-4 md:px-5 rounded-full py-1 md:py-2 bg-[#ff4e50] text-white font-semibold text-sm md:text-lg hover:bg-[#ff6000]"><Link to={`/services/${Event.id}`}>Show Details</Link></button>
    </div>
  </div>
</div>
    );
};

export default Servise;