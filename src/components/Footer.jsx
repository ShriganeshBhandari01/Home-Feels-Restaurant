import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router";
import logo from "../assets/restaurant-white.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#474747] text-white py-10 px-5 sm:px-[5vw] lg:px-[9vw]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About Section */}
          <div className="flex flex-col gap-1">
            <div className="-mt-2">
              <Link to="/" onClick={() => scrollTo(0, 0)}>
                <div className="flex gap-3">
                  <img src={logo} alt="" className="w-10 lg:w-12" />
                  <div className="text-center pt-[8px] lg:pt-[10px]">
                    <p className="text-2xl lg:text-3xl font-Francois text-white">
                      HOME FEELS
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <p className="mt-3 text-[#ADB29E] font-DMSans">
                A place where flavors come alive and memories are made. Dine
                with us and enjoy the best meals in town.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="font-DMSans">
            <h3 className="text-xl font-semibold font-DMSans">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  to="/"
                  onClick={() => scrollTo(0, 0)}
                  className="text-[#ADB29E] hover:text-white transition font-DMSans"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  onClick={() => scrollTo(0, 0)}
                  className="text-[#ADB29E] hover:text-white transition"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  to="/table-booking"
                  onClick={() => scrollTo(0, 0)}
                  className="text-[#ADB29E] hover:text-white transition font-DMSans"
                >
                  Book a Table
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => scrollTo(0, 0)}
                  className="text-[#ADB29E] hover:text-white transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => scrollTo(0, 0)}
                  className="text-[#ADB29E] hover:text-white transition"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  onClick={() => scrollTo(0, 0)}
                  className="text-[#ADB29E] hover:text-white transition font-DMSans"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social Media */}
          <div className="font-DMSans">
            <h3 className="text-xl font-semibold">Get in Touch</h3>
            <p className="mt-3 text-[#ADB29E]">📍 123 Main Street, Your City</p>
            <p className="text-[#ADB29E]">📞 (123) 456-7890</p>
            <p className="text-[#ADB29E]">✉ support@homefeels.com</p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <Link
                to="#"
                className="text-[#ADB29E] hover:text-white transition"
              >
                <FaFacebookF size={20} />
              </Link>
              <Link
                to="#"
                className="text-[#ADB29E] hover:text-white transition"
              >
                <FaInstagram size={20} />
              </Link>
              <Link
                to="#"
                className="text-[#ADB29E] hover:text-white transition"
              >
                <FaTwitter size={20} />
              </Link>
              <Link
                to="#"
                className="text-[#ADB29E] hover:text-white transition"
              >
                <FaYoutube size={20} />
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright Section */}
      <div className="bg-[#474747] text-white text-center py-4 text-sm">
        © {new Date().getFullYear()} Home Feels Restaurant. All rights reserved.
      </div>
    </>
  );
};

export default Footer;
