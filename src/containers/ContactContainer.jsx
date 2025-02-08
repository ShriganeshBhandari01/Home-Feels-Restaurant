import Footer from "../components/Footer";
import Title from "../components/Title";

const ContactContainer = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="bg-[#F9F9F7] w-full h-[50vh]">
        <div className="flex flex-col gap-5 items-center justify-center pt-8">
          <Title title="Contact Us" />
          <p className="max-w-[600px] text-center text-gray-600">
            We consider all the drivers of change gives you the components you
            need to create something truly meaningful.
          </p>
        </div>
      </div>

      {/* Form and Contact Info Section */}
      <div className="w-full h-[40vh]"></div>
      <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 w-[90%] max-w-5xl bg-white p-8 shadow-xl rounded-2xl flex flex-col lg:flex-row gap-8">
        {/* Form Section */}
        <form className="flex-1 flex flex-col gap-6">
          <div className="flex gap-4">
            <div className="flex flex-col flex-1 gap-2">
              <label
                htmlFor="Name"
                className="font-DMSans font-bold text-[16px]"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="rounded-[72px] border border-[#DBDFD0] py-2 px-4"
              />
            </div>
            <div className="flex flex-col flex-1 gap-2">
              <label
                htmlFor="Email"
                className="font-DMSans font-bold text-[16px]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="rounded-[72px] border border-[#DBDFD0] py-2 px-4"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="Subject"
              className="font-DMSans font-bold text-[16px]"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Subject"
              className="rounded-[72px] border border-[#DBDFD0] py-2 px-4"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="Message"
              className="font-DMSans font-bold text-[16px]"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Your Message"
              className="rounded-2xl border border-[#DBDFD0] py-2 px-4"
            />
          </div>
          <div className="w-full">
            <button className="px-6 py-3 bg-green-600 text-white rounded-full w-full hover:bg-green-700 transition duration-300">
              Submit
            </button>
          </div>
        </form>
      </div>
      {/* Contact Info Section */}
      <div className="flex justify-evenly mx-auto w-[90%] px-3 sm:px-[5vw] lg:px-[9vw] -mt-11 mb-10">
        <div className="">
          <p className="font-bold text-lg">Call Us:</p>
          <p className="text-gray-600">+1-234-567-8900</p>
        </div>
        <div className="">
          <p className="font-bold text-lg">Hours:</p>
          <p className="text-gray-600">Mon-Fri: 11am - 8pm</p>
          <p className="text-gray-600">Sat, Sun: 9am - 10pm</p>
        </div>
        <div className="">
          <p className="font-bold text-lg">Our Location:</p>
          <p className="text-gray-600">123 Bridge Street</p>
          <p className="text-gray-600">Nowhere Land, LA 12345</p>
          <p className="text-gray-600">United States</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactContainer;
