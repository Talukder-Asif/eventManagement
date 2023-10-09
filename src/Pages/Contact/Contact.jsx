import image_1 from "/src/assets/EventPlanner.jpg";
import { AiOutlinePhone } from "react-icons/ai";

const Contact = () => {
  return (
    <div>
      <div
        className="hero bg-center bg-cover min-h-[350px] lg:min-h-[500px] md:min-h-[400px] mb-10"
        style={{ backgroundImage: `url(${image_1})` }}
      >
        <div className="w-full h-full text-white text-center bg-black bg-opacity-80 grid content-center items-center">
          <div className="px-">
            <h2 className="mb-5 text-3xl md:text-5xl font-bold">Contact Us</h2>
          </div>
        </div>
      </div>

      <div className=" md:grid grid-cols-2 gap-5">
        <div>
        <h2 className="text-center text-4xl font-bold mb-4">FAQ</h2>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" checked="checked" />
            <div className="collapse-title text-xl font-medium">
              Why choice us...
            </div>
            <div className="collapse-content">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt ut ad aut rem deleniti nisi eaque dolores dolor, nemo minima officia neque quo, ratione necessitatibus quae velit corrupti suscipit nulla blanditiis nam! Natus tempore ad, cum enim sunt consectetur corrupti quibusdam nihil, tempora asperiores sed maiores officiis. Obcaecati, ea ab?</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Why we are best?
            </div>
            <div className="collapse-content">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo maiores harum sequi possimus, numquam quos animi earum ratione iste molestias dolore, eveniet, debitis quod ipsum omnis. Explicabo, aspernatur architecto eius, maiores itaque nesciunt accusantium modi laudantium quaerat ullam sunt ad?</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Our supports
            </div>
            <div className="collapse-content">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi possimus sunt placeat delectus distinctio nam vitae eius aperiam quae vel. Vitae explicabo minima itaque reprehenderit odio nostrum porro nemo, officiis quod ipsa fuga provident aliquid cum voluptatum consequatur. Consequuntur, aliquid?</p>
            </div>
          </div>
        </div>
        <div>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="Name"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="tel"
                placeholder="Your Phone Number"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Messages</span>
              </label>
              <input
                type="text"
                placeholder="Type your message"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn text-white hover:bg-[#ff792f] bg-[#ff4e50]">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
