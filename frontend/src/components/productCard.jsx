import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 hover:shadow-lg transition">

      <div className="w-full h-48 bg-gray-200 rounded-md overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />  
      </div>

      <h3 className="text-lg font-bold mt-4 text-gray-800">{product.title}</h3>
    </div>
  );
};

export default ProductCard;
