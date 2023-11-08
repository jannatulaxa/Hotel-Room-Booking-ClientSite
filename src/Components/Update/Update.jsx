import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
   const loadData=useLoaderData()
   const{_id,date}=loadData;
   const {id}=useParams()
    const handelUpdate=(e)=>{
      e.preventDefault()
      const date=e.target.date.value

      const updateDate={
        date
      }
      console.log(updateDate)
      fetch(`http://localhost:5001/books/${id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"

            },
            body:JSON.stringify(updateDate)

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                Swal.fire({
                    position:'top-end',
                    icon: 'success',
                    title: 'Updated Date  Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    return (
        <div className='bg-[#F4F3F0] p-24  w-full'>
        <h2 className='text-3xl font-bold'>Update Booking Date</h2>
        
        <form onSubmit={handelUpdate}>
            {/* Form row */}
            <div className=' md:flex gap-4'>
                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">Update Date</span>
                    </label>
                    <label className="input-group">

                        <input type="date" name='date' placeholder="data" className="input input-bordered w-full" />
                    </label>
                </div>
                
                </div>
                
           
            <button className="btn mt-4 btn-block bg-[#D2B48C]">Update Date</button>
        </form>
    </div>
    );
};

export default Update;