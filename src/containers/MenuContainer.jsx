import { useState } from "react";
import { food_list, menu_list } from "../assets/assets";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import Title from "../components/Title";

const MenuContainer = () => {
  const categories = menu_list;
  const [products] = useState(food_list);
  const [categoryProducts, setCategoryProducts] = useState(products);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCategory = (category, index) => {
    if (category === "All") {
      setCategoryProducts(products);
    } else {
      const categorisedProducts = products.filter(
        (product) => product.category === category
      );
      setCategoryProducts(categorisedProducts);
    }
    setActiveIndex(index);
  };

  return (
    <>
      <div className="px-3 sm:px-[5vw] lg:px-[9vw]">
        <div className="flex flex-col gap-5 items-center justify-center pt-8">
          <Title title="Our Menu" />
          <p className="max-w-[600px] text-center text-gray-600">
            We consider all the drivers of change to give you the components you
            need to create something truly remarkable.
          </p>

          {/* Category Buttons */}
          <div className="flex gap-4 overflow-x-auto no-scrollbar py-4 w-full lg:w-auto">
            <button
              onClick={() => handleCategory("All", 0)}
              className={`px-6 py-2 border rounded-full hover:bg-green-700 transition duration-300 cursor-pointer hover:text-white whitespace-nowrap ${
                activeIndex === 0 ? "bg-green-700 text-white" : ""
              }`}
            >
              All
            </button>
            {categories.map((category, index) => (
              <button
                key={index + 1}
                onClick={() => handleCategory(category.menu_name, index + 1)}
                className={`px-6 py-2 border rounded-full hover:bg-green-700 transition duration-300 cursor-pointer hover:text-white whitespace-nowrap ${
                  activeIndex === index + 1 ? "bg-green-700 text-white" : ""
                }`}
              >
                {category.menu_name}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-8 pb-8 gap-10">
          {categoryProducts.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MenuContainer;
