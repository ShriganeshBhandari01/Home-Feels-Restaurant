import aboutTwo from "../assets/about-two.jpg";
import aboutFive from "../assets/about-five.jpg";
import aboutSix from "../assets/about-six.jpg";
import leaf from "../assets/leaf.png";
import offers from "../assets/money-bags.png";
import star from "../assets/star.png";

const Delivery = () => {
  return (
    <div className="px-3 sm:px-[5vw] lg:px-[9vw] flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
      {/* Image Section */}
      <div className="flex flex-col lg:flex-row gap-4 w-full lg:w-1/2">
        <div className="w-full lg:w-1/2 overflow-hidden rounded-2xl">
          <img
            src={aboutTwo}
            alt="Healthy food"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="hidden w-full lg:w-1/2 lg:flex flex-col gap-3">
          <div className="h-96 overflow-hidden rounded-2xl">
            <img
              src={aboutFive}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-60 overflow-hidden rounded-2xl">
            <img src={aboutSix} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 space-y-6 font-DMSans flex flex-col gap-5">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-PlayFair">
            Finest Dining <br /> Experience in the City
          </h2>
          <p className="text-gray-600">
            At Home Feels Restaurant, we bring you a warm and inviting
            atmosphere where every meal is a celebration. Our chefs craft
            exquisite dishes using the freshest ingredients, blending
            traditional flavors with a modern touch. Whether you&lsquo;re here
            for a casual meal or a special occasion, we promise an unforgettable
            dining experience.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="bg-[#AD343E] rounded-[50%] w-7 h-7 flex justify-center items-center">
              <img src={leaf} alt="" className="w-5" />
            </div>
            <p className="font-medium text-xl leading-7 font-DMSans">
              Authentic & Fresh Ingredients
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-[#AD343E] rounded-[50%] w-7 h-7 flex justify-center items-center">
              <img src={offers} alt="" className="w-5" />
            </div>
            <p className="font-medium text-xl leading-7 font-DMSans">
              Best Offers & Prices
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-[#AD343E] rounded-[50%] w-7 h-7 flex justify-center items-center">
              <img src={star} alt="" className="w-5" />
            </div>
            <p className="font-medium text-xl leading-7 font-DMSans">
              Exceptional Service & Ambiance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
