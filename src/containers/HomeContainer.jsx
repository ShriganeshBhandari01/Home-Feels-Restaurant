import About from "../components/About";
import Blog from "../components/Blog";
import Delivery from "../components/Delivery";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import Reviews from "../components/Reviews";

const HomeContainer = () => {
  return (
    <>
      <Hero />
      <Menu />
      <div className="bg-[#F9F9F7] mb-8 py-8">
        <About />
      </div>
      <Reviews />
      <div className="bg-[#F9F9F7] mb-8 py-8">
        <Delivery />
      </div>
      <Blog/>
    </>
  );
};

export default HomeContainer;
