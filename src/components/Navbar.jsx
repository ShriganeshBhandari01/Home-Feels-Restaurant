import { Link, NavLink, useNavigate } from "react-router";
import { useState } from "react";
import menu_icon from "../assets/menu_icon.png";
import dropdown_icon from "../assets/dropdown_icon.png";
import logo from "../assets/restaurant.png";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [token, setToken] = useState("");

  const navigate = useNavigate();

  const handleNavbar = () => {
    setNavActive(!navActive);
  };
  return (
    <>
      <div className="flex justify-between items-center gap-4 py-4">
        <div className="-mt-2">
          <NavLink to="/">
            <div className="flex gap-3 items-center justify-center">
              <img src={logo} alt="" className="w-10 lg:w-12" />
              <div className="text-center pt-[8px] lg:pt-[10px]">
                <p className="text-2xl lg:text-3xl font-Francois text-black">
                  HOME FEELS
                </p>
              </div>
            </div>
          </NavLink>
        </div>

        <div className="hidden md:flex gap-4 uppercase font-medium text-[#2A2A2A] text-base font-DMSans">
          <NavLink to="/">
            <p>Home</p>
            <hr className="w-6/12 mx-auto h-[3px] bg-[#303030] hidden " />
          </NavLink>
          <NavLink to="/about">
            <p>About</p>
            <hr className="w-6/12 mx-auto h-[3px] bg-[#303030] hidden" />
          </NavLink>
          <NavLink to="/menu">
            <p>Menu</p>
            <hr className="w-6/12 mx-auto h-[3px] bg-[#303030] hidden" />
          </NavLink>
          <NavLink to="/contact">
            <p>Contact</p>
            <hr className="w-6/12 mx-auto h-[3px] bg-[#303030] hidden" />
          </NavLink>
        </div>

        <div className="flex gap-4 justify-center items-center">
          {token ? (
            <div className="group relative">
              <img
                onClick={() => navigate("/profile")}
                src={assets.profile_icon}
                alt="Profile"
                className="w-[24px] h-[24px] cursor-pointer"
              />
              <div className="group-hover:block hidden absolute right-0 pt-4">
                <div className="flex flex-col gap-2 w-40 py-3 px-5 bg-white text-gray-700 shadow-lg rounded">
                  <Link to="/profile" className="hover:text-black">
                    My Profile
                  </Link>
                  <Link to="/orders" className="hover:text-black">
                    Orders
                  </Link>
                  <p
                    className="cursor-pointer hover:text-black"
                    onClick={() => setToken("")}
                  >
                    Logout
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="hidden md:flex gap-4 items-center">
              <Link to="/login" className="text-green-600 hover:underline">
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700"
              >
                Signup
              </Link>
            </div>
          )}

          <div className="md:hidden">
            <img
              src={menu_icon}
              alt=""
              className="w-[18px] h-[18px] cursor-pointer"
              onClick={handleNavbar}
            />
          </div>
        </div>
      </div>
      <div>
        {navActive && (
          <div className="fixed top-0 left-0 bottom-0 w-full h-full bg-white md:hidden z-40">
            <div
              className="flex items-center cursor-pointer gap-2 px-4 py-4"
              onClick={handleNavbar}
            >
              <img src={dropdown_icon} alt="Close" className="w-4" />
              <p className="text-lg font-bold">Back</p>
            </div>
            <div className="flex flex-col text-lg font-DMSans">
              <NavLink
                to="/"
                onClick={() => setNavActive(false)}
                className="p-3 border-b hover:bg-gray-100"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => setNavActive(false)}
                className="p-3 border-b hover:bg-gray-100"
              >
                About
              </NavLink>
              <NavLink
                to="/menu"
                onClick={() => setNavActive(false)}
                className="p-3 border-b hover:bg-gray-100"
              >
                Menu
              </NavLink>
              <NavLink
                to="/contact"
                onClick={() => setNavActive(false)}
                className="p-3 border-b hover:bg-gray-100"
              >
                Contact
              </NavLink>
              {!token && (
                <div className="flex flex-col p-3 gap-2">
                  <Link
                    to="/login"
                    className="bg-green-600 text-white px-4 py-2 rounded-full text-center hover:bg-green-700"
                    onClick={() => setNavActive(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="bg-green-600 text-white px-4 py-2 rounded-full text-center hover:bg-green-700"
                    onClick={() => setNavActive(false)}
                  >
                    Signup
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
