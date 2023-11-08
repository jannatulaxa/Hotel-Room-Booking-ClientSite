import React, { useState,useEffect } from 'react';
import Swal from 'sweetalert2';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { Link } from 'react-router-dom';
const AddBookingCard = ({ bookRooms}) => {

    const [Rooms, setRooms] = useState(bookRooms);
    console.log(bookRooms)

    const style={
        width:'200px',
        height:'150px',
    }
    const Cardstyle={
        width:'300px',
        height:'500px'
    }
    useEffect(() => {
        Aos.init({
          duration: 1000, 
          offset: 200,
        });
      }, []);

    const handelDelete=(id)=>{

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            
              fetch(`http://localhost:5001/books/${id}`,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                
                if(data.deletedCount > 0){
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )

                      const remaining=bookRooms.filter(bookRoom=>bookRoom._id !== id)
                      setRooms(remaining)

                }
            })
            .catch((error) => {
                console.error('Error deleting the record:', error);
            });
            }
          })
        

    }
    return (

        <div className="grid grid-cols-1 md:grid-cols-3  gap-3">
          {Rooms?.map((bookRoom) => (
        <div key={bookRoom._id} data-aos="zoom-in-left">
            <div className="card w-3/5 bg-base-100 shadow-xl mx-auto" style={Cardstyle}>
                <figure className="px-10 pt-10">
                    <img style={style} src={bookRoom?.image1} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{bookRoom?.description}</h2>
                    <p>Room-Size: {bookRoom?.roomSize}</p>
                    <p>Availability: {bookRoom?.availability}</p>
                    <p>SpecialOffers:{bookRoom?.specialOffers}</p>
                    <p>Price: {bookRoom?.price}</p>
                    <div className="card-actions">
                    <button onClick={()=>handelDelete(bookRoom._id)} className="btn btn-outline btn-secondary">Delete</button>
                   <Link to={`/update/${bookRoom?._id}`}>
                   <button className="btn btn-outline btn-secondary">Update Date</button>
                   </Link>
                    </div>
                </div>
            </div>
        </div>

          ))}
        </div>
    );
};

export default AddBookingCard;