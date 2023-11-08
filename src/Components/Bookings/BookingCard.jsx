/* eslint-disable react/prop-types */
import Aos from "aos";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
const BookingCard = ({ room }) => {
  // console.log(Object.keys(booking).join(","))
  const { _id, image1, roomName, price } = room;

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
      <div className="card bg-base-100 shadow-xl mx-10" style={Cardstyle}>
        <figure className="w-[100%] p-0">
          <Link to={`/details/${_id}`}>
            <img
              style={style}
              src={image1}
              alt=""
              className="rounded-xl w-full"
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
          <div className="card-actions">
            <Link to={`/details/${_id}`}>
              <button className="btn btn-outline btn-secondary">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
