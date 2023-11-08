import "./banner.css"

const Banner = () => {
  return (
    <div className="banner flex  justify-center items-center h-[40rem] relative z-10">
      <div className="text-center  p-[1rem] md:p-[3.5rem] bg-black opacity-70 border border-[#FCD767]">
      <p className="font-serif font-bold lg:text-6xl md:text-4xl text-3xl ">Welcome To The Hotel Of
</p>

        <div className="flex justify-center  items-center gap-x-4"><div className="w-[2rem] md:w-[10rem] h-[1px] bg-[#FCD767]" />
        <p className="font-serif font-bold lg:text-8xl md:text-5xl text-4xl">Golden Palace</p>


        <div className="w-[2rem]  md:w-[10rem] h-[1px] bg-[#FCD767]" /></div>
        <p className="text-center text-xl italic shadow-2xl text-[#FCD767] mt-8 mb-4 ">See life from a different perspective.....</p>
        <p className=" md:w-[36rem]  italic text-xl mx-auto mb-10 text-center">
        Come, stay and enjoy your day. · We give you a legendary welcome, every time you come back. · The best place to be.
        </p>
      
      <div><button className="btn bg-[#BA8A3E] border-0 hover:text-[#BA8A3E] rounded-none text-white">Go Now --></button></div>
      </div>
    </div>
  );
};

export default Banner;
