import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border-2 rounded-2xl overflow-hidden shadow-lg transition transform hover:-translate-y-1 hover:shadow-xl">
      {/* Image Section */}
      <div className="overflow-hidden h-[300px]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-3 text-center items-center justify-center px-4 py-6">
        <p className="text-lg font-bold text-green-600">${product.price}</p>
        <p className="text-xl font-semibold">{product.name}</p>
        <p className="text-gray-500 text-sm line-clamp-2">
          {product.description}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
