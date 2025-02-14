import About from "../components/About";
import Blog from "../components/Blog";
import Delivery from "../components/Delivery";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Reviews from "../components/Reviews";

const HomeContainer = () => {
  return (
    <>
      <Hero />
      <div className="bg-[#F9F9F7] mb-8 py-8">
        <About />
      </div>
      <Reviews />
      <div className="bg-[#F9F9F7] mb-8 py-8">
        <Delivery />
      </div>
      <Blog/>
      <Footer/>
    </>
  );
};

export default HomeContainer;
