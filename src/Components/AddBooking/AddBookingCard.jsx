/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Swal from "sweetalert2";
import "aos/dist/aos.css";
import Aos from "aos";
import { Link } from "react-router-dom";
import axios from "axios";

const AddBookingCard = ({ bookRoom, addedBookRoom, setBookRooms }) => {
  const {
    _id,
    image1,
    price,
    description,
    roomSize,
    roomAvailability,
  } = bookRoom;

  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 200,
    });
  }, []);

  const handelDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5001/books/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");

              const remaining = addedBookRoom.filter(
                (bookRoom) => bookRoom._id !== _id
              );
              setBookRooms(remaining);
            }
          })

          // const availability = bookRoom?.availability
          // const patchData = { availability };
          // const link = `http://localhost:5001/Bookings/${_id}`;
          // axios.patch(link, patchData).then((res) => {
          //   if (res.data.modifiedCount > 0) {
          //     toast.success("Successfully You Change Booking Availability !!");
          //   }
          // })

          .catch((error) => {
            console.error("Error deleting the record:", error);
          });
      }
    });
  };
  // return <div>True</div>

  return (
    <div className="card  md:w-[40rem] h-[50rem] bg-base-100 border border-[#BA8A3E] rounded-none my-6  hover:shadow-xl mx-auto">
      <figure className="">
        <img src={image1} alt="Shoes" className="" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-[#BA8A3E]">{description}</h2>
        <p>Room-Size: {roomSize}</p>
        <p>Availability: {roomAvailability}</p>
        <p className="text-[#BA8A3E] font-thin">
          For Giving Please Hit on Give Rating Button
        </p>
        <p className="text-2xl text-[#BA8A3E] my-8">Price: <span className="font-semibold text-[#BA8A3E]"> ${price} </span></p>
        <div className="card-actions">
          <button
            onClick={() => handelDelete()}
            className=" btn rounded-none bg-[#BA8A3E] border-0 hover:text-[#BA8A3E] text-white"
          >
            Cancel Booking
          </button>

          <Link to={`/rating/${_id}`}>
            <button className="btn rounded-none bg-[#BA8A3E] border-0 hover:text-[#BA8A3E] text-white">
              Give Rating
            </button>
          </Link>
          <Link to={`/update/${_id}`}>
            <button className="btn rounded-none bg-[#BA8A3E] border-0 hover:text-[#BA8A3E] text-white">
              Update Date
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddBookingCard;
