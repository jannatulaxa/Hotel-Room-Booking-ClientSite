import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { useLoaderData } from "react-router-dom/dist/umd/react-router-dom.development";

const Rating = () => {
  const room = useLoaderData();

  const id = useParams();
  const { count} = room;
  console.log(room)

  const handelRating = (e) => {
    e.preventDefault();
    const form = e.target;
    const Review = document.getElementById("Textarea").value;
    const Rating = form.photo.value;

    const fullForm = { id, Rating, Review, count };

    // console.log(bookId);
    // const link = `https://hotel-room-booking-server-site.vercel.app/booksRating/${bookId}`;
    // axios.patch(link, fullForm).then((res) => {
    //   if (res.data.acknowledged) {
    //     form.reset();
    //     Swal.fire("Thanks For!", "Successfully You Give Rating !!", "success");
    //   }
    // });

    // Swal.fire("Yeahh!", "Successfully added product", "success");
  };

  return (
    <div>
      <form
        onSubmit={handelRating}
        className="space-y-4 md:w-[40rem] mx-auto border-[1px] my-20"
      >
        <label className="input-group md:w-4/5 lg:w-full mx-auto lg:input-group-md">
          <span className="w-[10rem] bg-[#FE834C] text-white font-bold">
            Rating
          </span>
          <input
            name="photo"
            className="w-full input input-bordered input-md"
            type="text"
            placeholder="Give Rating Out of 5"
            required
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
