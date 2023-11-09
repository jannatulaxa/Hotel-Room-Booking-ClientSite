import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import { ImLocation } from "react-icons/im";

const Map = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 200,
    });
  }, []);
  const imgStyle = {
    with: "500px",
    height: "400px",
  };
  return (
    <div data-aos="zoom-in" className="my-10">
      <h2 className="text-2xl text-center font-sans font-thin mt-6 mb-7">
        Location of <span className="text-[#BA8A3E]">Golden Place</span>{" "}
      </h2>
      <footer className="footer footer-center p-10 bg-[#BA8A3E] text-primary-content">
        <aside>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31212.0530951821!2d8.33548289326686!3d46.9947639071367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478ff9d1eb8bd639%3A0x5ce6835ef63d5168!2sB%C3%BCrgenstock%20Hotels%20%26%20Resort%20Lake%20Lucerne!5e0!3m2!1sen!2sbd!4v1699387708578!5m2!1sen!2sbd"
            className="h-[30rem] md:w-[40rem] lg:w-[70rem]" style={{ border: "0" }}
            allowFullScreen="" loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

            <ImLocation className="text-2xl "></ImLocation>
          <p className="font-thin text-white flex">
            Goo happy. Go anywhere. Stay here.<br />
             Live like a King. Simple made perfect. 
             Nice people taking care of nice people.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Map;
