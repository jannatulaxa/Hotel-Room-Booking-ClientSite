import React, { useEffect } from 'react';
import 'aos/dist/aos.css'
import Aos from 'aos';
const Carosoul = () => {
    useEffect(() => {
        Aos.init({
          duration: 1000, 
          offset: 200,
          
      
        });
      }, []);
    return (
       <div data-aos="zoom-in">
        <h2 className='text-2xl font-bold mt-6 mb-6'>User <span className='text-purple-600'>Testimonial</span></h2>
         <div className="carousel w-full h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
            <img src="https://i.ibb.co/m8Xfj4y/entrepreneur-593358-640.jpg" className="w-full rounded-xl" />
            <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className='text-white space-y-7 pl-12 w-1/2'>
                    <h2 className='text-4xl font-bold'>John Doe</h2>
                    <p>Great service! I had a wonderful experience staying at this hotel. Highly recommended.</p>
                    <h2 className='text-xl font-bold'>Rating: 6</h2>
                    <div>
                        
                        <button className="btn btn-outline btn-secondary">Testimonial</button>
                    </div>
                </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
            <img src="https://i.ibb.co/TMg51r5/360-F-214746128-31-Jkea-P6r-U0-Nzzzd-FC4kh-Gkmqc8noe6h.jpg" className="w-full rounded-xl" />
            <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className='text-white space-y-7 pl-12 w-1/2'>
                    <h2 className='text-4xl font-bold'>Jane Smith</h2>
                    
                    <p>The staff was very friendly and the room was clean. I enjoyed my stay here.</p>
                    <h2 className='text-xl font-bold'>Rating: 6</h2>
                    <div>
                        
                        <button className="btn btn-outline btn-secondary">Testimonial</button>
                    </div>
                </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
            <img src="https://i.ibb.co/LzyZvP8/istockphoto-1440149713-170667a.webp" className="w-full rounded-xl" />
            <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className='text-white space-y-7 pl-12 w-1/2'>
                    <h2 className='text-4xl font-bold'>Smith Job</h2>
                    <p>Excellent location and amenities. I would definitely stay here again.</p>
                    <h2 className='text-xl font-bold'>Rating: 6</h2>
                    <div>
                        
                        <button className="btn btn-outline btn-secondary">Testimonial</button>
                    </div>
                </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
            <img src="https://i.ibb.co/grmH7mV/bearded-young-man.jpg" className="w-full rounded-xl" />
            <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className='text-white space-y-7 pl-12 w-1/2'>
                    <h2 className='text-4xl font-bold'>John Doe</h2>
                    <p>Great service! I had a wonderful experience staying at this hotel. Highly recommended.</p>
                    <h2 className='text-xl font-bold'>Rating: 5.6</h2>
                    <div>
                        
                        <button className="btn btn-outline btn-secondary">Testimonial</button>
                    </div>
                </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
        </div>
    </div>
       </div>
    );
};

export default Carosoul;