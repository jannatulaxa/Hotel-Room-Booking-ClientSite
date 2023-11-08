import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-[#252525]">
      <div className="w-[90%] mx-auto">
        <footer className="footer md:grid-rows-4 md:grid-cols-3 lg:grid-cols-3 lg:grid-rows-1 py-10  text-[#BA8A3E]">
          <nav className="text-lg">
            <header className="text-2xl font-serif  font-bold text-white">
              Company
            </header>
            <a className="link link-hover">OUR COMPANY</a>
            <a className="link link-hover">OUR COFFEEs</a>
            <a className="link link-hover">OUR COFFEE STORES</a>
            <a className="link link-hover">Volleyball Shoes</a>
            <a className="link link-hover">STORIES & NEWS</a>
          </nav>
          <nav className="text-lg">
            <header className="text-2xl font-serif font-bold text-white">
              Services
            </header>
            <a className="link link-hover">BREWING GUIDE</a>
            <a className="link link-hover">MENU</a>
            <a className="link link-hover">COFFEE SHOP</a>
            <a className="link link-hover">RESERVATIONS</a>
          </nav>
          <nav className="text-lg">
            <header className="text-2xl font-serif font-bold text-white">
              Contact
            </header>
            <a className="link link-hover">1000 S Eighth Ave, New York 0019</a>
            <a className="link link-hover">Phone (646) 652-9813</a>
            <a className="link link-hover">Saturday & Sunday</a>
            <a className="link link-hover">10a.m - 8 p.m</a>
          </nav>
          <form className="place-items-end w-[20rem] lg:w-[27rem]">
            <div className="flex justify-end gap-x-[2rem] md:gap-x-[8rem] items-center">
              <div className="flex   gap-6 mt-8 flex-wrap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <g clip-path="url(#clip0_12_5269)">
                    <path
                      d="M35.6248 17.6042C35.6248 26.3911 29.1869 33.6742 20.7713 34.9945V22.6929H24.8732L25.6537 17.6042H20.7713V14.302C20.7713 12.9095 21.4535 11.5527 23.6402 11.5527H25.86V7.22046C25.86 7.22046 23.8452 6.87663 21.919 6.87663C17.8983 6.87663 15.27 9.31371 15.27 13.7257V17.6042H10.8002V22.6929H15.27V34.9945C6.8544 33.6742 0.416504 26.3911 0.416504 17.6042C0.416504 7.88199 8.29849 0 18.0207 0C27.7428 0 35.6248 7.88199 35.6248 17.6042Z"
                      fill="#3B1E00"
                    />
                    <path
                      d="M24.8733 22.6929L25.6538 17.6042H20.7714V14.3019C20.7714 12.9098 21.4534 11.5527 23.6403 11.5527H25.8601V7.22046C25.8601 7.22046 23.8455 6.87663 21.9195 6.87663C17.8983 6.87663 15.2701 9.3137 15.2701 13.7257V17.6042H10.8003V22.6929H15.2701V34.9944C16.1664 35.135 17.085 35.2083 18.0208 35.2083C18.9565 35.2083 19.8751 35.135 20.7714 34.9944V22.6929H24.8733Z"
                      fill="#FFA800"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_12_5269">
                      <rect
                        width="35.2083"
                        height="35.2083"
                        fill="white"
                        transform="translate(0.416504)"
                      />
                    </clipPath>
                  </defs>
                </svg>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="26"
                  viewBox="0 0 52 36"
                  fill="none"
                >
                  <path
                    d="M50.0829 5.50921C49.5032 3.35502 47.8048 1.65698 45.651 1.07691C41.7159 0 25.9755 0 25.9755 0C25.9755 0 10.2355 0 6.30041 1.03586C4.18803 1.61555 2.44817 3.3554 1.86848 5.50921C0.833008 9.44393 0.833008 17.6042 0.833008 17.6042C0.833008 17.6042 0.833008 25.8055 1.86848 29.6991C2.44856 31.8529 4.14659 33.5513 6.30079 34.1314C10.2769 35.2083 25.9759 35.2083 25.9759 35.2083C25.9759 35.2083 41.7159 35.2083 45.651 34.1725C47.8052 33.5928 49.5032 31.8944 50.0833 29.7406C51.1188 25.8055 51.1188 17.6456 51.1188 17.6456C51.1188 17.6456 51.1602 9.44393 50.0829 5.50921Z"
                    fill="#FFA800"
                  />
                  <path
                    d="M20.9639 25.1429L34.0529 17.6042L20.9639 10.0655V25.1429Z"
                    fill="#3B1E00"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <rect
                    width="35.2083"
                    height="35.2083"
                    transform="translate(0.327637)"
                    fill="#FFA800"
                  />
                  <path
                    d="M32.0082 31.6875V31.6864H32.0153V21.3563C32.0153 16.3029 30.9273 12.4099 25.0194 12.4099C22.1791 12.4099 20.2733 13.9686 19.4952 15.4459H19.4132V12.8817H13.8115V31.6864H19.6445V22.3749C19.6445 19.9233 20.1092 17.5524 23.1453 17.5524C26.1369 17.5524 26.1813 20.3504 26.1813 22.5319V31.6875H32.0082Z"
                    fill="#3B1E00"
                  />
                  <path
                    d="M4.31348 12.8827H10.1535V31.6875H4.31348V12.8827Z"
                    fill="#3B1E00"
                  />
                  <path
                    d="M7.2311 3.52084C5.36365 3.52084 3.84863 5.03585 3.84863 6.9033C3.84863 8.77075 5.36365 10.3175 7.2311 10.3175C9.09855 10.3175 10.6136 8.77075 10.6136 6.9033C10.6122 5.03585 9.09714 3.52084 7.2311 3.52084Z"
                    fill="#3B1E00"
                  />
                </svg>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <g clip-path="url(#clip0_12_5266)">
                    <path
                      d="M35.2083 6.68738C33.899 7.26172 32.5039 7.64241 31.0493 7.82725C32.5457 6.93384 33.6878 5.52991 34.2247 3.83771C32.8296 4.66951 31.2892 5.25704 29.6476 5.58492C28.3229 4.17439 26.4349 3.30078 24.3752 3.30078C20.379 3.30078 17.1619 6.54435 17.1619 10.5207C17.1619 11.0928 17.2103 11.643 17.3291 12.1667C11.3283 11.874 6.01842 8.99793 2.45138 4.61669C1.82863 5.69715 1.46335 6.93384 1.46335 8.26516C1.46335 10.7649 2.75065 12.9809 4.66951 14.2638C3.50983 14.2418 2.37216 13.9051 1.40833 13.3748C1.40833 13.3968 1.40833 13.4254 1.40833 13.454C1.40833 16.9616 3.91033 19.8751 7.1913 20.5463C6.60376 20.7069 5.96341 20.7839 5.29885 20.7839C4.83674 20.7839 4.37023 20.7575 3.93233 20.6607C4.86755 23.5192 7.52138 25.6207 10.6769 25.6889C8.22115 27.6099 5.10301 28.7674 1.72741 28.7674C1.13547 28.7674 0.567734 28.741 0 28.6684C3.19736 30.7303 6.98665 31.9076 11.073 31.9076C24.3554 31.9076 31.6171 20.9049 31.6171 11.3679C31.6171 11.0488 31.6061 10.7407 31.5907 10.4349C33.0232 9.41823 34.2269 8.14853 35.2083 6.68738Z"
                      fill="#FFA800"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_12_5266">
                      <rect width="35.2083" height="35.2083" fill="white" />
                    </clipPath>
                  </defs>
                </svg>{" "}
              </div>
              <img src={logo} alt="Logo" className="w-[15%]" />
            </div>

            <fieldset className="form-control mt-10 w-[18rem]  md:w-[24rem] ">
              <div className="relative">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input border-t-0 border-l-0 bg-[#CF861326] border-b-[1px] border-[#CF8613CC] w-full pr-16 bg-[#3B1E00]"
                />
                <button className="btn bg-[#CF8613CC] text-white font-bold border-0 absolute top-0 right-0 rounded-l-none">
                  Send
                </button>
              </div>
            </fieldset>
          </form>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
