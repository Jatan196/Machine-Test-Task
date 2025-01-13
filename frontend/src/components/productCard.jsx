import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 hover:shadow-lg transition">
      <div className="w-full h-48 bg-gray-200 rounded-md overflow-hidden">
        <img
          src={product.imageURL}
          alt={product.title}
          className="w-full h-full object-cover"
        />  
        <div>{product.name}</div>
      </div>

      <h3 className="text-lg font-bold mt-4 text-gray-800">{product.title}</h3>
    </div>
  );
};
// export const withAddToCartButton = (ProductCard) => {
//     return ({ product, onAddToCart }) => {
//       return (
//         <div>
//       
//           <ProductCard product={product} />
//           <button
//             onClick={() => onAddToCart(product)}
//             className="mt-4 px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-md hover:bg-blue-600 transition"
//           >
//             Add to Cart
//           </button>
//         </div>
//       );
//     };
//   };
export default ProductCard;
