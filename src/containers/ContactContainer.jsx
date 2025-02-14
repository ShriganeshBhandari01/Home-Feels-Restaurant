import { useState } from "react";
import Footer from "../components/Footer";
import Title from "../components/Title";

const ContactContainer = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  return (
    <>
      <div className="bg-[#F9F9F7] min-h-screen flex flex-col items-center py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Title title="Contact Us" />
          <p className="max-w-[600px] text-gray-600 mx-auto mt-4">
            Reach out to us with any questions or inquiries. We’re here to help
            and look forward to hearing from you!
          </p>
        </div>

        {/* Form & Contact Info Section */}
        <div className="w-[90%] max-w-5xl bg-white p-8 shadow-xl rounded-2xl flex flex-col lg:flex-row gap-8">
          {/* Form Section */}
          <form className="flex-1 flex flex-col gap-6">
            <div className="flex gap-4 flex-col lg:flex-row">
              <div className="flex flex-col flex-1 gap-2">
                <label className="font-DMSans font-bold text-[16px]">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-[72px] border border-[#DBDFD0] py-2 px-4 focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col flex-1 gap-2">
                <label className="font-DMSans font-bold text-[16px]">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-[72px] border border-[#DBDFD0] py-2 px-4 focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-DMSans font-bold text-[16px]">
                Subject
              </label>
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="rounded-[72px] border border-[#DBDFD0] py-2 px-4 focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-DMSans font-bold text-[16px]">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="rounded-2xl border border-[#DBDFD0] py-2 px-4 focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>
            <button className="px-6 py-3 bg-green-600 text-white rounded-full w-full hover:bg-green-700 transition duration-300">
              Submit
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="flex flex-col lg:flex-row justify-evenly w-[90%] max-w-5xl px-6 mt-12 mb-10 gap-7">
          <div>
            <p className="font-bold text-lg">Call Us:</p>
            <p className="text-gray-600">+1-234-567-8900</p>
          </div>
          <div>
            <p className="font-bold text-lg">Hours:</p>
            <p className="text-gray-600">Mon-Fri: 11am - 8pm</p>
            <p className="text-gray-600">Sat, Sun: 9am - 10pm</p>
          </div>
          <div>
            <p className="font-bold text-lg">Our Location:</p>
            <p className="text-gray-600">123 Bridge Street</p>
            <p className="text-gray-600">Nowhere Land, LA 12345</p>
            <p className="text-gray-600">United States</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactContainer;
