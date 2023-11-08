import Aos from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
const GalaryCard = ({ gallery }) => {

    const { roomDescription, price, roomSize, availability, roomImages, specialOffers } = gallery

    const style={
        width:'200px',
        height:'150px',
    }
    const Cardstyle={
        with:'300px',
        height:'500px'
    }
    useEffect(() => {
        Aos .init({
          duration: 1000, 
          offset: 200,
        });
      }, []);
    return (
        <div data-aos="zoom-in-left">
            <div className="card  bg-base-100 shadow-xl" style={Cardstyle}>
                <figure className="px-10 pt-10">
                    <img style={style} src={roomImages} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{roomDescription}</h2>
                    <p></p>
                    <div className="card-actions">
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalaryCard;