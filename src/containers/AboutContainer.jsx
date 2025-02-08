import About from "../components/About";
import heroOne from "../assets/hero.jpg";
import Reviews from "../components/Reviews";
import aboutimg from "../assets/about-img.jpg";
import Footer from "../components/Footer";
const AboutContainer = () => {
  return (
    <>
      <div className="bg-[#F9F9F7] py-8">
        <About />
      </div>
      <div className="w-full min-h-[300px] h-[70vh] relative">
        <img src={heroOne} alt="Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 flex items-center justify-center z-20 text-center px-4">
          <p className="text-white text-lg md:text-xl lg:text-4xl font-PlayFair">
            Feel the authentic & <br />
            original taste from us
          </p>
        </div>
      </div>
      <div className="px-3 sm:px-[5vw] lg:px-[9vw] flex flex-col lg:flex-row gap-10 items-center my-8">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 space-y-8 font-DMSans">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-PlayFair">
              A little information <br /> for our valuable guest
            </h2>
            <p className="text-gray-600">
              At our place, we believe that dining is not just about food, but
              also about the overall experience. Our staff, renowned for their
              warmth and dedication, strives to make every visit an
              unforgettable event.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center border border-[#DBDFD0] p-8 rounded-lg text-2xl font-PlayFair">
              <p>3</p>
              <p>Locations</p>
            </div>
            <div className="flex flex-col items-center border border-[#DBDFD0] p-8 rounded-lg text-2xl font-PlayFair">
              <p>1995</p>
              <p>Founded</p>
            </div>
            <div className="flex flex-col items-center border border-[#DBDFD0] p-8 rounded-lg text-2xl font-PlayFair">
              <p>65+</p>
              <p>Staff Members</p>
            </div>
            <div className="flex flex-col items-center border border-[#DBDFD0] p-8 rounded-lg text-2xl font-PlayFair">
              <p>100%</p>
              <p>Satisfied Customers</p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <div className="w-full h-[300px] sm:h-[500px] lg:h-[700px] overflow-hidden rounded-2xl">
            <img
              src={aboutimg}
              alt="Healthy food"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      <Reviews />
      <Footer/>

    </>
  );
};

export default AboutContainer;
