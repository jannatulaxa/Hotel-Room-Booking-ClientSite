import  { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import UseAuthProviderHooks from "../../../Hook/UseAuthProviderHook";
import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const DetailsPage = () => {
  const room = useLoaderData();
  const [startDate, setStartDate] = useState(new Date());
  const { user } = UseAuthProviderHooks();
  const navigate = useNavigate();


  const {
    _id,
    image1,
    image2,
    image3,
    image4,
    price,
    description,
    roomName,
    roomSize,
    setInRoom,
    count,
    roomAvailability,
  } = room;

  const handleAddToBook = () => {
    const cartItem = {
      _id,
      image1,
      image2,
      image3,
      image4,
      price,
      description,
      roomName,
      roomSize,
      setInRoom,
      count,
      roomAvailability,
    };

    fetch("http://localhost:5001/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Successfully You Booked The Room!!");
        }
      });
    const patchData = { roomAvailability };
    const link = `http://localhost:5001/Bookings/${_id}`;
    axios.patch(link, patchData).then((res) => {
      if (res.data.modifiedCount > 0) {
        toast.success("Successfully You Change Booking Availability !!");
      }
    });
  };
  const goto = () => {
    navigate("/login");
  };

  if (roomAvailability > 0) {
    return (
      <div className="my-10">
        <h2 className="text-2xl text-center font-sans font-thin mt-6 mb-7">
        Room <span className="text-[#BA8A3E]">Details</span>{" "}
      </h2>

        <div className=" flex flex-col lg:flex-row  w-[90%] mx-auto">
          <figure>
            <img className="lg:h-[20rem]" src={image2} alt="Movie" />
          </figure>
          <figure>
            <img className="lg:h-[20rem]" src={image3} alt="Movie" />
          </figure>
          <figure>
            <img className="lg:h-[20rem]" src={image4} alt="Movie" />
          </figure>
        </div>

        <div className="">
          <div className="card-body">
            <h2 className="card-title md:text-2xl text-start text-[#BA8A3E]">{description}</h2>
            <p>Room-Size: {roomSize}</p>
            <p>Room-Availability: {roomAvailability}</p>
            <p>Price: ${price}</p>
            <p>Review: {count}</p>
            <div className="">
            <span className="font-bold" >Select Booking Date:</span>
            <DatePicker
              id="date"
              className="input input-bordered md:ml-5 lg:w-[17rem] md:w-[27rem] w-[15rem] rounded-none text-[#BA8A3E] border-[#BA8A3E]"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
            </div>
            {/*Start Work For Modal */}

            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Room: {roomName}</h2>
                  <h2 className="card-title">
                    {" "}
                    Booking Time: {startDate.toDateString()}
                  </h2>
                  <p className="card-title">Price: ${price}</p>
                  <div className="card-actions text-[#BA8A3E]">
                    <Link to={`/details/${_id}`}>
                      <button
                        onClick={handleAddToBook}
                        className="btn rounded-none bg-[#BA8A3E] border-0 hover:text-[#BA8A3E] text-white"
                      >
                        Confirm Booking
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </dialog>
            {/*End Work For Modal */}
            <div className="card-actions flex">
              {user ? (
                <button
                  className="btn border-[#BA8A3E] rounded-none bg-[#BA8A3E] text-white "
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Book Now
                </button>
              ) : (
                <>
                  <button
                    onClick={goto}
                    className="btn btn-outline btn-secondary"
                  >
                    Book Now
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  } 
  else {
    return (
      <div className="my-10">
        <h2 className="text-2xl text-center font-sans font-thin mt-6 mb-7">
        Room <span className="text-[#BA8A3E]">Details</span>{" "}
      </h2>

        <div className=" flex flex-col lg:flex-row  w-[90%] mx-auto">
          <figure>
            <img className="lg:h-[20rem]" src={image2} alt="Movie" />
          </figure>
          <figure>
            <img className="lg:h-[20rem]" src={image3} alt="Movie" />
          </figure>
          <figure>
            <img className="lg:h-[20rem]" src={image4} alt="Movie" />
          </figure>
        </div>

        <div className="">
          <div className="card-body">
            <h2 className="card-title md:text-2xl text-start text-[#BA8A3E]">{description}</h2>
            <p>Room-Size: {roomSize}</p>
            <p>Room-Availability: Unavailable</p>
            <p>Price: ${price}</p>
            <p>Review: {count}</p>
            <div className="">
            <span className="font-bold" >Select Booking Date:</span>
            <DatePicker
              id="date"
              className="input input-bordered md:ml-5 lg:w-[17rem] md:w-[27rem] w-[15rem] rounded-none text-[#BA8A3E] border-[#BA8A3E]"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
            </div>
            {/*Start Work For Modal */}

            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Room is Not Available</h2>
                
                 
                </div>
              </div>
            </dialog>
            {/*End Work For Modal */}
            <div className="card-actions flex">
              {user ? (
                <button
                  className="btn border-[#BA8A3E] rounded-none bg-[#BA8A3E] text-white "
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Book Now
                </button>
              ) : (
                <>
                  <button
                    onClick={goto}
                    className="btn btn-outline btn-secondary"
                  >
                    Book Now
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  }
};

export default DetailsPage;
