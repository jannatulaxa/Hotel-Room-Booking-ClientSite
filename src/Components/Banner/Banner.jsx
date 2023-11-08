import "./banner.css"

const Banner = () => {
  return (
    <div className="banner flex  justify-center items-center h-[40rem] relative z-10">
      <div className="text-center  p-[1rem] md:p-[3.5rem] bg-black opacity-70 border border-[#FCD767]">
      <p className="font-serif font-bold lg:text-6xl md:text-4xl text-3xl">Welcome To The Hotel Of
</p>

        <div className="flex justify-center  items-center gap-x-4"><div className="w-[2rem] md:w-[10rem] h-[1px] bg-[#FCD767]" />
        <p className="font-serif font-bold lg:text-8xl md:text-5xl text-4xl">Golden Palace</p>


        <div className="w-[2rem]  md:w-[10rem] h-[1px] bg-[#FCD767]" /></div>
        <p className=" md:w-[36rem] mt-8 mb-4 italic text-xl mx-auto  text-center">
          You know the various flavor profiles of said beans, you know the
          different ways to brew a cup, and you know all the specialty coffee
          drinks that exist.
        </p>
      <p className="text-center text-xl italic shadow-2xl text-[#FCD767] mb-10">There’s a little love in every cup.....</p>
      <div><button className="btn bg-[#BA8A3E] border-0 hover:text-[#BA8A3E] text-white">Go Now --></button></div>
      </div>
    </div>
  );
};

export default Banner;
