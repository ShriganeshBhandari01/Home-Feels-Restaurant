
const ProductCard = ({ product }) => {
  return (
    <div className="border-2 border-green-400 rounded-2xl overflow-hidden shadow-lg transition transform hover:-translate-y-1 hover:shadow-xl">
      {/* Image Section */}
      <div className="overflow-hidden h-[300px]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-3 text-center px-4 py-4">
        <div className="flex justify-between">
          <p className="text-xl font-semibold">{product.name}</p>
          <p className="text-lg font-bold text-green-600">${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
