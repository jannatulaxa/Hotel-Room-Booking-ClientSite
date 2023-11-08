import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "aos/dist/aos.css";
import Aos from "aos";
import { Link } from "react-router-dom";
const AddBookingCard = ({ bookRooms }) => {
  const [Rooms, setRooms] = useState(bookRooms);


  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 200,
    });
  }, []);

  const handelDelete = (id) => {
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
        fetch(`https://hotel-room-booking-server-site.vercel.app/books/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");

              const remaining = bookRooms.filter(
                (bookRoom) => bookRoom._id !== id
              );
              setRooms(remaining);
            }
          })
          .catch((error) => {
            console.error("Error deleting the record:", error);
          });
      }
    });
  };
  console.log(Rooms?.length)
  if (Rooms?.length > 0) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-3 my-20 w-[90%] mx-auto">
        {Rooms?.map((bookRoom) => (
          <div key={bookRoom._id} data-aos="zoom-in">
            <div
              className="card md:w-[40rem] h-[50rem] bg-base-100 shadow-xl mx-auto"
            
            >
              <figure className="px-10 pt-10">
                <img
                 
                  src={bookRoom?.image1}
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{bookRoom?.description}</h2>
                <p>Room-Size: {bookRoom?.roomSize}</p>
                <p>Availability: {bookRoom?.availability}</p>
                <p>SpecialOffers:{bookRoom?.specialOffers}</p>
                <p>Price: {bookRoom?.price}</p>
                <div className="card-actions">
                  <button
                    onClick={() => handelDelete(bookRoom._id)}
                    className="btn btn-outline btn-secondary"
                  >
                    Cancel Booking
                  </button>

                  <Link to={`/rating/${bookRoom?._id}`}>
                    <button className="btn btn-outline btn-secondary">
                      Give Rating
                    </button>
                  </Link>
                  <Link to={`/update/${bookRoom?._id}`}>
                    <button className="btn btn-outline btn-secondary">
                      Update Date
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return <div className="py-20 text-center">No Booking yet</div>
  }
};

export default AddBookingCard;
