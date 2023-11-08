import React from 'react';
import { Helmet } from 'react-helmet';
const ContactUs = () => {
    const Cardstyle = {
        with:'300px',
        height: '300px'
    }
    return (
        <div className='mx-auto  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3'>
             <Helmet>
               
               <title>Contact Page</title>
               
           </Helmet>
            <div className=''>
            <div className="card  bg-primary text-primary-content" style={Cardstyle}>
                <div className="card-body">
                    <h2 className="card-title"></h2>
                    <h2 className='text-xl font-bold'>Name: Johan</h2>
                    <p>Phone:+1405551572</p>
                     <p>Email: email1@johan.com</p>
                    <div className="card-actions justify-end">
                       
                    </div>
                </div>
            </div>
            </div>
            <div>
            <div className="card  bg-primary text-primary-content" style={Cardstyle}>
                <div className="card-body">
                    <h2 className="card-title"></h2>
                    <h2 className='text-xl font-bold'>Name: Jon</h2>
                    <p>Phone:+1405551572</p>
                     <p>Email: email1@jon.com</p>
                    <div className="card-actions justify-end">
                        
                    </div>
                </div>
            </div>
            </div>
            <div>
            <div className="card  bg-primary text-primary-content" style={Cardstyle}>
                <div className="card-body">
                    <h2 className="card-title"></h2>
                    <h2 className='text-xl font-bold'>Name: Creblin</h2>
                     <p>Phone:+1405551572</p>
                     <p>Email: email1@crebline.com</p>
                    <div className="card-actions justify-end">
                       
                    </div>
                </div>
            </div>
            </div>

        </div>
    );
};

export default ContactUs;

