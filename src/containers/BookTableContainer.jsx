import Footer from "../components/Footer";
import Title from "../components/Title";
import map from "../assets/map.png";

const BookTableContainer = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="bg-[#F9F9F7] w-full h-[50vh]">
        <div className="flex flex-col gap-5 items-center justify-center pt-8">
          <Title title="Book a Table" />
          <p className="max-w-[600px] text-center text-gray-600">
            Reserve your spot and enjoy an unforgettable dining experience. We
            look forward to serving you with exceptional food and hospitality.
          </p>
        </div>
      </div>

      {/* Form and Contact Info Section */}
      <div className="w-full h-[55vh]">
        <img src={map} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute top-[14%] lg:top-[18%] left-1/2 transform -translate-x-1/2 w-[90%] max-w-5xl bg-white p-8 shadow-xl rounded-2xl flex flex-col lg:flex-row gap-8">
        {/* Form Section */}
        <form className="flex-1 flex gap-6 flex-col">
          <div className="flex gap-4 flex-col lg:flex-row">
            <div className="flex flex-col flex-1 gap-2 w-full">
              <label
                htmlFor="date"
                className="font-DMSans font-bold text-[16px]"
              >
                Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="date"
                className="rounded-[72px] border border-[#DBDFD0] py-2 px-4 w-full"
                required
              />
            </div>
            <div className="flex flex-col flex-1 gap-2 w-full">
              <label
                htmlFor="time"
                className="font-DMSans font-bold text-[16px]"
              >
                Time <span className="text-red-500">*</span>
              </label>
              <input
                type="time"
                id="time"
                className="rounded-[72px] border border-[#DBDFD0] py-2 px-4 w-full"
                required
              />
            </div>
          </div>
          <div className="flex gap-4 flex-col lg:flex-row">
            <div className="flex flex-col flex-1 gap-2">
              <label
                htmlFor="name"
                className="font-DMSans font-bold text-[16px]"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="rounded-[72px] border border-[#DBDFD0] py-2 px-4"
                required
              />
            </div>
            <div className="flex flex-col flex-1 gap-2">
              <label
                htmlFor="phone"
                className="font-DMSans font-bold text-[16px]"
              >
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                className="rounded-[72px] border border-[#DBDFD0] py-2 px-4"
                pattern="[0-9]{10}"
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="persons"
              className="font-DMSans font-bold text-[16px]"
            >
              Total Persons
            </label>
            <select
              id="persons"
              className="rounded-[72px] border border-[#DBDFD0] py-2 px-4"
              required
            >
              <option value="">Select number of persons</option>
              {[...Array(10)].map((_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1} {i === 0 ? "Person" : "Persons"}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full">
            <button
              type="submit"
              className="px-6 py-3 bg-green-600 text-white rounded-full w-full hover:bg-green-700 transition duration-300"
            >
              Book a Table
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default BookTableContainer;
