import { Link, NavLink } from "react-router-dom";
import { BsPersonCircle } from "react-icons/Bs";
import logo from "../../assets/logo.png";
import UseAuthProviderHooks from "../../Hook/UseAuthProviderHook";

const Navbar = () => {
  const { user, userSingOut } = UseAuthProviderHooks();

  const handleLogout = () => {
    userSingOut();
  };
  const userName = user?.displayName;

  const navitems = (
    <>
      <li><NavLink to="/" className={({ isActive, isPending }) => isPending ? "text-black font-semibold" : isActive ? " text-[#CF8613] underline font-semibold" : "text-white font-semibold" }> Home</NavLink></li>      
      <li><NavLink to="/room" className={({ isActive, isPending }) => isPending ? "text-black font-semibold" : isActive ? " text-[#CF8613] underline font-semibold" : "text-white font-semibold"}>Rooms</NavLink></li>
      <li><NavLink to="/bookings" className={({ isActive, isPending }) => isPending ? "text-black font-semibold" : isActive ? " text-[#CF8613] underline font-semibold" : "text-white font-semibold"}>My Bookings</NavLink></li>
      <li><NavLink to="/gallery" className={({ isActive, isPending }) => isPending ? "text-black font-semibold" : isActive ? " text-[#CF8613] underline font-semibold" : "text-white font-semibold"}>Gallery</NavLink></li>
      <li><NavLink to="/contact" className={({ isActive, isPending }) => isPending ? "text-black font-semibold" : isActive ? " text-[#CF8613] underline font-semibold" : "text-white font-semibold"}>Contact</NavLink></li>
      
    
    </>
  );
  return (
  
      <div className="navbar justify-center bg-black h-[4rem]">
        <div className="navbar-start ">
          <div className="dropdown  ">
            <label tabIndex={0} className="text-white mx-10 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm hover:text-[#CF8613] dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
            >
              {navitems}
              <div className="flex items-center">
                {user != null ? (
                  <button className="px-3 py-2 rounded-lg mx-3  text-white bg-[#CF8613]">
                    {userName}
                  </button>
                ) : (
                  ""
                )}
                {user != null ? (
                  user?.photoURL ? (
                    <img
                      className="w-[20%] rounded-full mr-2"
                      src={user.photoURL}
                      alt="User"
                    />
                  ) : (
                    <BsPersonCircle className="text-2xl mr-2"></BsPersonCircle>
                  )
                ) : (
                  ""
                )}
              </div>
            </ul>
          </div>
          <img
            className="w-[5rem]  md:w-[6rem] lg:w-[6rem] ml-5 md:mx-10"
            src={logo}
            alt="logo"
          />
        </div>
        <div className="navbar-end col-span-3 hidden lg:flex lg:w-[70%]">
          <ul className="gap-5 menu-horizontal text-white ">{navitems}</ul>
          {/* <Theme></Theme> */}
        </div>
        <div className="navbar-end">
          {user != null ? (
            user?.photoURL ? (
              <img
                className={"w-[20%] md:w-[10%]  rounded-full mr-2"}
                src={user.photoURL}
                alt="User"
              />
            ) : (
              <BsPersonCircle className="text-4xl mr-2"></BsPersonCircle>
            )
          ) : (
            ""
          )}
          {user != null ? (
            <button className=" hidden lg:flex text-white  mr-7 font-bold ">
              {userName}
            </button>
          ) : (
            ""
          )}
        </div>
        <div className="navbar-center mx-10">
          {user != null ? (
            <span
              onClick={handleLogout}
              className="btn text-white border-2 border-[#CF8613] bg-transparent"
            >
              Logout
            </span>
          ) : (
            <div>
              <Link
                to={"/login"}
                className="mr-4 text-white px-4 py-2 rounded-lg  font-bold border-2 border-[#CF8613] bg-transparent "
              >
                Login
              </Link>
              <Link
                to={"/resister"}
                className=" bg-[#CF8613] px-4 py-2 rounded-lg  text-white font-bold border-2 border-[#CF8613] bg-transparent"
              >
                Resistration
              </Link>
            </div>
          )}
        </div>
      </div>
  
  );
};

export default Navbar;
