/* eslint-disable react/prop-types */
import Aos from "aos";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
const BookingCard = ({ room }) => {
  // console.log(Object.keys(room).join(","))
  const { _id,image1,image2,image3,image4,price,description,roomName,roomSize,setInRoom,roomAvailability
  } = room;

  const style = {
    width: "[100%]",
    height: "150px",
  };
  const Cardstyle = {
    height: "400px",
  };
  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 200,
    });
  }, []);
  return (
    <div data-aos="zoom-in" className="mb-20">
      <div className=" rounded-none bg-base-100 border-[#BA8A3E] border hover:shadow-xl mx-10" style={Cardstyle}>
        <figure className="w-full">
          <Link to={`/details/${_id}`}>
            <img
              style={style}
              src={image1}
              alt=""
              className="h-[50rem] w-[100%]"
            />
          </Link>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{roomName}</h2>
          <h2 className="card-title">
            {" "}
            Reviews: {room?.reviewCount ? room?.reviewCount : "0"}
          </h2>
          <p>Price: {price}</p>
          <div className="card-actions text-[#BA8A3E]">
            <Link to={`/details/${_id}`}>
            <button className="btn rounded-none bg-[#BA8A3E] border-0 hover:text-[#BA8A3E] text-white">Explore Room</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
