
import ProductCard from "./productCard.jsx";

const products = [
  {
    id: 1,
    title: "Product 1",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Product 2",
    image: "https://via.placeholder.com/150",
  },
];

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
