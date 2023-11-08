import React, { useEffect, useState } from "react";
import BookingCard from "./BookingCard";
import { Helmet } from "react-helmet";
const BookingsRoom = () => {
  const [rooms, setRooms] = useState([]); // Use square brackets to destructure the state

  useEffect(() => {
    fetch("http://localhost:5001/Bookings")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []);
  console.log(rooms)

  if (rooms.length > 0) {
    return (
      <div>
        <Helmet>
          <title>Booking Page</title>
        </Helmet>
        <h2 className="text-2xl font-bold text-center my-20 underline">
          Booking <span className="text-[#BA8A3E]">Room</span>:{" "}
          {rooms.length}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {rooms?.map((room) => (
            <BookingCard key={room._id} room={room}></BookingCard>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Helmet>
          <title>Booking Page</title>
        </Helmet>
        <h2 className="text-2xl font-bold text-center underline">
          Booking <span className="text-[#BA8A3E]">Room</span>:{"  "}
          {rooms.length}
        </h2>

        <div className="py-56 text-center text-xl lg:text-3xl ">
          No Room Abaleavale Booking Yet
        </div>
      </div>
    );
  }
};

export default BookingsRoom;
