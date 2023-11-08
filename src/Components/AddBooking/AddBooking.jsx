import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AddBookingCard from "./AddBookingCard";
import { Helmet } from "react-helmet";
const AddBooking = () => {
  const addLoad = useLoaderData([]);

  const [bookRooms, setBookRooms] = useState(addLoad);

  if (bookRooms.length > 0) {
    return (
      <div>
        <Helmet>
          <title>My Booking Page</title>
        </Helmet>
        <h2 className="text-2xl font-bold">
          My Booking <span className="text-purple-600">Room</span>:{" "}
          {addLoad.length}
        </h2>
        <AddBookingCard
          bookRooms={bookRooms}
          setBookRooms={setBookRooms}
        ></AddBookingCard>
      </div>
    );
  } else {
    <div>
      <Helmet>
        <title>My Booking Page</title>
      </Helmet>
      <h2 className="text-2xl font-bold">
        My Booking <span className="text-purple-600">Room</span>:{" "}
        {addLoad.length}
      </h2>
      <div className="py-56 text-center text-xl lg:text-3xl ">
        NO Booking Yet
      </div>
      ;
    </div>;
  }
};

export default AddBooking;
