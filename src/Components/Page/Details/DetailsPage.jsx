import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
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
    roomAvailability,
  } = room;

  const handleAddToBook = () => {
    const cartItem = {
      image1,
      image2,
      image3,
      image4,
      price,
      description,
      roomName,
      roomSize,
      setInRoom,
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
        <h2 className="text-2xl font-bold mb-3">
          Booking <span className="text-purple-700">Details</span>
        </h2>

        <div className="grid grid-cols-3 w-[80rem] mx-auto">
          <figure>
            <img src={image2} alt="Movie" />
          </figure>
          <figure>
            <img src={image3} alt="Movie" />
          </figure>
          <figure>
            <img src={image4} alt="Movie" />
          </figure>
        </div>

        <div className="card card-side bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-center">{description}</h2>
            <p>Room-Size: {roomSize}</p>
            <p>Room-Availability: {roomAvailability}</p>
            <span>Select Booking Date:</span>
            <DatePicker
              id="date"
              className="input input-bordered lg:w-[17rem] md:w-[27rem] w-[15rem] rounded-tl-none rounded-bl-none text-[#a8a6a6]"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
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
                  <p className="card-title">Price: {price}</p>
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
                  className="btn btn-outline btn-secondary"
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
  } else {
    return (
      <div className="my-10">
        <h2 className="text-2xl font-bold mb-3">
          Booking <span className="text-purple-700">Details</span>
        </h2>

        <div className="grid lg:grid-cols-3 lg:w-[80rem] mx-auto">
          <figure>
            <img className="w-[20rem] mx-auto" src={image2} alt="Movie" />
          </figure>
          <figure>
            <img className="w-[20rem] mx-auto" src={image3} alt="Movie" />
          </figure>
          <figure>
            <img className="w-[20rem] mx-auto" src={image4} alt="Movie" />
          </figure>
        </div>

        <div className="card card-side bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-center">{description}</h2>
            <p>Room-Size: {roomSize}</p>
            <p>Room-Availability: Unavailable</p>
            <span>Select Booking Date:</span>
            <DatePicker
              id="date"
              className="input input-bordered lg:w-[17rem] md:w-[27rem] w-[15rem] rounded-tl-none rounded-bl-none text-[#a8a6a6]"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
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
                  <p className="card-title">Price: {price}</p>
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
            {/*Start Work For 2nd Modal */}

            {/* You can open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="my_modal_4" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-lg">Opps!!</h3>
                <p className="py-4 font-serif font-bold text-2xl">
                  Seats Are Not Available Now
                </p>
              </div>
            </dialog>

            {/*End Work For 2nd Modal */}
            <div className="card-actions flex">
              {user ? (
                <button
                  onClick={() =>
                    document.getElementById("my_modal_4").showModal()
                  }
                  className="btn btn-outline btn-secondary"
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
