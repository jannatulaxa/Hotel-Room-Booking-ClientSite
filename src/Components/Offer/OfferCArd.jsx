import Aos from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
const OfferCArd = ({ offer }) => {
    const { offerName, img, offerDescription, discountPercentage } = offer;

    const style={
        width:'200px',
        height:'150px',
    }
    const Cardstyle={
        width:'300px',
        height:'400px'
    }
    useEffect(() => {
        Aos.init({
          duration: 1000, 
          offset: 200,
          
          
        });
      }, []);
    return (
        <div data-aos="zoom-in">
            <div className="card w-72 mx-auto bg-base-100 shadow-xl " style={Cardstyle}>
                <figure className="px-10 pt-10">
                    <img style={style} src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{offerName}</h2>
                    <p>{offerDescription}</p>
                    <div className="card-actions">
                    <button className="btn btn-outline btn-secondary">OFFER</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfferCArd;