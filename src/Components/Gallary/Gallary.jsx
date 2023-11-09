// import React, { useEffect, useState } from 'react';
// import GalaryCard from './GalaryCard';
import { Helmet } from "react-helmet";
import img1 from "../../assets/overview-Gallery/1.jpg";
import img2 from "../../assets/overview-Gallery/2.jpg"
import img3 from "../../assets/overview-Gallery/3.jpg"
import img4 from "../../assets/overview-Gallery/4.jpg"
import img5 from "../../assets/overview-Gallery/5.jpg"
import img6 from "../../assets/overview-Gallery/6.jpg"
import img7 from "../../assets/overview-Gallery/7.jpg"
import img8 from "../../assets/overview-Gallery/8.jpg"
import img9 from "../../assets/overview-Gallery/9.jpg"
import img10 from "../../assets/overview-Gallery/10.jpg"
import img11 from "../../assets/overview-Gallery/11.jpg"
import img12 from "../../assets/overview-Gallery/12.jpg"
import img13 from "../../assets/overview-Gallery/13.jpg"
import img14 from "../../assets/overview-Gallery/14.jpg"
import img15 from "../../assets/overview-Gallery/15.jpg"
import img16 from "../../assets/overview-Gallery/16.jpg"
import img17 from "../../assets/overview-Gallery/17.jpg"
import img18 from "../../assets/overview-Gallery/18.jpg"
import img19 from "../../assets/overview-Gallery/19.jpg"
import img20 from "../../assets/overview-Gallery/20.jpg"
import img21 from "../../assets/overview-Gallery/21.jpg"


const Gallary = () => {
  // const [gallerys, setGallerys] = useState([]); // Use square brackets to destructure the state

  // useEffect(() => {
  //     fetch('http://localhost:5001/Bookings')
  //     .then(res => res.json())
  //     .then(data => setGallerys(data))
  // }, []);

  return (
    <div>
      <Helmet>
        <title>Gallery Room</title>
      </Helmet>
      <h2 className="text-2xl text-center font-sans font-thin mt-6 mb-7">
        Overview of <span className="text-[#BA8A3E]">Golden Place</span>{" "}
      </h2>

      <div className="w-[90%] mx-auto mb-20">
        <div className="grid grid-cols-4 mb-2 gap-2">
        
        <img className="w-[25rem] " src={img1} alt="image-1" />
        <img className="w-[25rem] " src={img2} alt="image-2" />
        <img className="w-[25rem] " src={img3} alt="image-3" />
        <img className="w-[25rem] " src={img4} alt="image-4" />
        <img className="w-[25rem] " src={img5} alt="image-1" />
        <img className="w-[25rem] " src={img6} alt="image-1" />
        <h2 className="text-2xl text-center font-sans font-thin mt-6 ">
        Overall   <span className="text-[#BA8A3E]">Area</span>{" "}
      </h2>
        <img className="w-[25rem] " src={img7} alt="image-1" /> 
        <img className="w-[25rem] " src={img8} alt="image-1" />
        </div>
        <div className="grid grid-cols-4 mb-2 gap-2">
        <h2 className="text-2xl text-center font-sans font-thin mt-6 ">
        Our   <span className="text-[#BA8A3E]">Dainning Area</span>{" "}
      </h2>
        <img className="w-[25rem] " src={img9} alt="image-1" />
        <img className="w-[25rem] " src={img10} alt="image-1" />
        <img className="w-[25rem] " src={img11} alt="image-1" />
        <img className="w-[25rem] " src={img12} alt="image-1" />
        </div>
        <div className="grid grid-cols-4 mb-2 gap-2">
        
        <img className="w-[25rem] " src={img13} alt="image-1" />
        <img className="w-[25rem] " src={img15} alt="image-1" />
        <img className="w-[25rem] " src={img15} alt="image-1" />
        <h2 className="text-2xl text-center font-sans font-thin mt-6 ">
        Swemming   <span className="text-[#BA8A3E]">Pool Area</span>{" "}
      </h2>
        <img className="w-[25rem] " src={img16} alt="image-1" />
        
        <img className="w-[25rem] " src={img17} alt="image-1" />
        <img className="w-[25rem] " src={img18} alt="image-1" />
        <img className="w-[25rem] " src={img19} alt="image-1" />
        <img className="w-[25rem] " src={img20} alt="image-1" />
        <img className="w-[25rem] " src={img21} alt="image-1" />
        </div>
      </div>

      {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    gallerys?.map(gallery=><GalaryCard key={gallery._id} gallery={gallery}></GalaryCard>)
                }
            </div> */}
    </div>
  );
};

export default Gallary;
