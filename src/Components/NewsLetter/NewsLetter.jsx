import React from 'react';

const NewsLetter = () => {

    const handelSubsCribe=(e)=>{
        e.preventDefault()
        const name=e.target.name.value;
        const email=e.target.email.value

        const users={
            name,email
        }
        console.log(users)
    }
    return (
       <div >
<h2 className="text-2xl text-center font-sans font-thin mt-6 mb-7">
        NewsLetter of <span className="text-[#BA8A3E]">Golden Place</span>{" "}
      </h2>        
      <div className='bg-[#BA8A3E]  gap-3 p-8 flex '>
            <div className=' flex-1'>
            <h2 className='text-xl text-white font-bold mb-3'>Subscribe To Our NewsLetter</h2>
            <p className='text-white font-thin'>Implement an intuitive and user-friendly booking system on your website or app. <br />
            Provide a calendar for selecting check-in and check-out dates. <br />
            Include options for specifying the number of guests and rooms.</p>
            </div>
            <div className='flex-1'>
            <form onSubmit={handelSubsCribe}>
            <button className='btn bg-[#BA8A3E] border border-[#F6DE92] rounded-none hover:text-[#BA8A3E] text-white '>Subscribe</button>

       <div className='mt-3 mb-2'>
        <input type="text" name='name' placeholder="Name" className="input border-none rounded-none input-accent w-full max-w-[30rem]" />
        
        </div>
        <div>
        <input type="email" name='email' placeholder="Email" className="input border-none rounded-none input-accent w-full max-w-[30rem]" />
        
        </div>
       </form>
            </div>
        </div>
       </div>
    );
};

export default NewsLetter;