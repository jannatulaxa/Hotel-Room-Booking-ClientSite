import React, { useEffect, useState } from 'react';
import GalaryCard from './GalaryCard';
import { Helmet } from 'react-helmet';
const Gallary = () => {
    const [gallerys, setGallerys] = useState([]); // Use square brackets to destructure the state

    useEffect(() => {
        fetch('https://hotel-room-booking-server-site.vercel.app/Bookings')
        .then(res => res.json())
        .then(data => setGallerys(data))
    }, []);

    return (
        <div>
             <Helmet>
                <title>Gallery Room</title>
                
            </Helmet>
            <h2 className='text-2xl font-bold'>Gallery <span className='text-purple-600'>Room</span></h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    gallerys?.map(gallery=><GalaryCard key={gallery._id} gallery={gallery}></GalaryCard>)
                }
            </div>
        </div>
    );
};

export default Gallary;