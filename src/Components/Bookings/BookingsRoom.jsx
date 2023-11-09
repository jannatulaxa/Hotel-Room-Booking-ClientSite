import React, { useEffect, useState } from "react";
import BookingCard from "./BookingCard";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom/dist/umd/react-router-dom.development";
import UseAuthProviderHooks from "../../Hook/UseAuthProviderHook";
import "aos/dist/aos.css";

const BookingsRoom = () => {
  const { loading } = UseAuthProviderHooks();
  const initialRooms = useLoaderData([]);
  const [rooms, setRooms] = useState(initialRooms);
  const [sortOrder, setSortOrder] = useState("lowToHigh");

  useEffect(() => {
    setRooms(initialRooms);
  }, [initialRooms]);

  const handleSort = () => {
    const sortedRooms = [...rooms];
    if (sortOrder === "lowToHigh") {
      sortedRooms.sort((a, b) => a.price - b.price);
      setSortOrder("highToLow");
    } else {
      sortedRooms.sort((a, b) => b.price - a.price);
      setSortOrder("lowToHigh");
    }
    setRooms(sortedRooms);
  };
  // return <div>BookungsRoom.jsx</div>

  if (!loading) {
    
    if (rooms?.length > 0) {
      return (
        <div>
          <Helmet>
            <title>Booking Page</title>
          </Helmet>

          <h2 className="text-2xl text-center font-sans font-thin mt-6 mb-7">
            Booking <span className="text-[#BA8A3E]">Room</span>: {rooms?.length}
          </h2>

          <div className="flex justify-end mb-4">
            <button onClick={handleSort} className="btn mr-4">
              {sortOrder === "lowToHigh" ? "Sort Low to High" : "Sort High to Low"}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {rooms?.map((room) => (
              <BookingCard key={room?._id} room={room}></BookingCard>
            ))}
          </div>
        </div>
      );
    } 
    else {
      return (
        <div>
          <Helmet>
            <title>Booking Page</title>
          </Helmet>
          <h2 className="text-2xl font-bold text-center underline">
            Booking <span className="text-[#BA8A3E]">Room</span>: {rooms.length}
          </h2>

          <div className="py-56 text-center text-xl lg:text-3xl ">
            No Room Available for Booking Yet
          </div>
        </div>
      );
    }
  } 
  else {
    return <progress className="progress w-56"></progress>;
  }
};

export default BookingsRoom;
