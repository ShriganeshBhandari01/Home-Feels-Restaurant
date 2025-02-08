import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#474747] text-white py-10 px-5 sm:px-[5vw] lg:px-[9vw]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold">Home Feels Restaurant</h3>
            <p className="mt-3 text-[#ADB29E]">
              A place where flavors come alive and memories are made. Dine with
              us and enjoy the best meals in town.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="/"
                  className="text-[#ADB29E] hover:text-white transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/menu"
                  className="text-[#ADB29E] hover:text-white transition"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-[#ADB29E] hover:text-white transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-[#ADB29E] hover:text-white transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social Media */}
          <div>
            <h3 className="text-xl font-semibold">Get in Touch</h3>
            <p className="mt-3 text-[#ADB29E]">📍 123 Main Street, Your City</p>
            <p className="text-[#ADB29E]">📞 (123) 456-7890</p>
            <p className="text-[#ADB29E]">✉ support@homefeels.com</p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-[#ADB29E] hover:text-white transition"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                className="text-[#ADB29E] hover:text-white transition"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-[#ADB29E] hover:text-white transition"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-[#ADB29E] hover:text-white transition"
              >
                <FaYoutube size={20} />
              </a>
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
