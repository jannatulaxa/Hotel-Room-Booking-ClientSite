import { useParams } from "react-router-dom/dist/umd/react-router-dom.development";
import Swal from "sweetalert2";
import axios from "axios";

const Rating = () => {
    const id = useParams()


    const handelRating = (e) => {
        e.preventDefault();
        const form = e.target;
        const Review = document.getElementById("Textarea").value;
        const Rating = form.photo.value;
        const fullForm = { id,Rating, Review };
        
        
        // const link = `http://localhost:5001/BookingsRating/${id}`;
        // axios.patch(link, fullForm).then((res) => {
        //   if (res.data.modifiedCount > 0) {
        //     form.reset();
          Swal.fire("Yeahh!", "Successfully added product", "success");
        //   }
        // });
      };


  return (
    <div>
      <form onSubmit={handelRating} className="space-y-4 md:w-[40rem] mx-auto border-[1px] my-20">
        <label className="input-group md:w-4/5 lg:w-full mx-auto lg:input-group-md">
          <span className="w-[10rem] bg-[#FE834C] text-white font-bold">
            Rating
          </span>
          <input
            name="photo"
            className="w-full input input-bordered input-md"
            type="text"
            placeholder="Give Rating Out of 5"
          />
        </label>
        <label className="input-group md:w-4/5 lg:w-full mx-auto input-group-md">
        <span className="w-[10rem] bg-[#FE834C] text-white font-bold">
            Review
          </span>
          <textarea
            id="Textarea"
            className="textarea w-full text-black"
            placeholder="Enter your description"
          ></textarea>
        </label>
        <input
          className="w-full text-center btn text-white text-bold text-lg bg-[#FE834C]"
          type="submit"
          value="Post Rating"
        />
      </form>
    </div>
  );
};

export default Rating;