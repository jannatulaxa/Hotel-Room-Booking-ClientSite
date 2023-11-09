import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AddBookingCard from "./AddBookingCard";
import { Helmet } from "react-helmet";
const AddBooking = () => {
  const bookRooms = useLoaderData([]);

  const [addedBookRoom, setBookRooms] = useState(bookRooms);

  if (addedBookRoom.length > 0) {
    return (
      <div>
        <Helmet>
          <title>My Booking Page</title>
        </Helmet>
        <h2 className="text-2xl font-bold">
          My Booking <span className="text-purple-600">Room</span>:{" "}
          {bookRooms.length}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-3 my-20 w-[90%] mx-auto">
          {addedBookRoom?.map((bookRoom) => (
            <AddBookingCard
              key={bookRoom._id}
              bookRoom={bookRoom}
              addedBookRoom={addedBookRoom}
              setBookRooms={setBookRooms}
            ></AddBookingCard>
          ))}
        </div>
      </div>
    );
  }
  
  // else {
  //   <div>
  //     <Helmet>
  //       <title>My Booking Page</title>
  //     </Helmet>
  //     <h2 className="text-2xl font-bold">
  //       My Booking <span className="text-purple-600">Room</span>:{" "}
  //       {addedBookRoom.length}
  //     </h2>
  //     <div className="py-56 text-center text-xl lg:text-3xl ">
  //       NO Booking Yet
  //     </div>
  //     ;
  //   </div>;
  // }
};

export default AddBooking;
