import  { useEffect, useState } from 'react';
import OfferCArd from './OfferCArd';

const Offer = () => {
    const [offers, setOffers] = useState([]); // Use square brackets and setOffers to define the state

    useEffect(() => {
        fetch('https://hotel-room-booking-server-site.vercel.app/offer')
            .then(res => res.json())
            .then(data => setOffers(data)); // Use setOffers to update the state
    }, []);


    if (offers.length > 0) {
        return (
            <div>
                <h2 className='text-2xl font-bold mb-6 mt-6'>Special <span className='text-purple-700'>Booking Offers</span></h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {offers.map(offer => <OfferCArd key={offer._id} offer={offer} />)} 
                </div>
            </div>
        );
      } else {
        return (
          <div>
           
            <h2 className="text-2xl font-bold text-center underline">
              Booking <span className="text-[#BA8A3E]">Room</span>:{"  "}
              {offers.length}
            </h2>
    
            <div className="py-56 text-center text-xl lg:text-3xl ">
              No Room Abaleavale Booking Yet
            </div>
          </div>
        );
      }

    
};

export default Offer;
