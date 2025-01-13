import { useEffect, useState } from "react";
import ProductCard from "./productCard.jsx";
import { withAddToCartButton } from "./productCard.jsx";  // Make sure this is a component
import getAllProducts from "../hooks/getAllProducts.jsx";  // Unused import, can be removed if not used
import {add} from "../redux/cartSlice.js"
import { useDispatch } from "react-redux";

const ProductList = ({ addCart }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);
    const dispatch = useDispatch();

    const addToCartHandler = async (product) => {
        try {
            // Dispatch to Redux store to add the product to the cart
            dispatch(add(product));

            // Make API call to update the cart on the server
            const response = await fetch("http://localhost:8000/api/v1/cart/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",  // Ensure the user's session/cookie is sent
                body: JSON.stringify({ productId: product._id, }),
            });

            const data = await response.json();
            
            if (response.ok) {
                console.log("Product added to cart on the server", data);
            } else {
                console.log("Failed to add product to cart on server", data);
            }
        } catch (error) {
            console.error("Error adding product to cart:", error);
        }
    };

    const fetchProducts = async () => {
        try {
            const raw = await fetch("http://localhost:8000/api/v1/product/view", {
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });
            const data = await raw.json();
            console.log(data);
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
    {products?.map((product) => (
        <div key={product._id} className="product-item">
            <ProductCard product={product} />
            {addCart && (
                <button
                    onClick={addToCartHandler}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-md hover:bg-blue-600 transition"
                >
                    Add to Cart
                </button>
            )}
        </div>
    ))}
</div>

    );
};

export default ProductList;
