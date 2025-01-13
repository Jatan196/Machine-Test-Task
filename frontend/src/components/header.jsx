import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";

const Header = () => {
    return (
        <header className="bg-white shadow-md py-4">
            <div className="container mx-auto flex justify-between items-center px-4">

                <h1 className="text-lg font-bold">
                    Exclusive
                </h1>

                <div className="flex space-x-6">
                    <p>
                        <a href="/" className="hover:text-gray-700">
                            Home
                        </a>
                    </p>
                    <p>
                        <a href="/login">
                            Login
                        </a>
                    </p>
                    <p>
                        <a href="/register" className="hover:text-gray-700">
                            Register
                        </a>
                    </p>
                </div>


                <div className="flex items-center space-x-4">
                    <div className="flex items-center border rounded-lg overflow-hidden">
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            className="p-2 outline-none w-full"
                        />
                        <button className="p-2 bg-gray-200">
                            <FaSearch />
                        </button>
                    </div>
                    <button className="text-gray-600 hover:text-black">
                        <FaHeart size={20} />
                    </button>
                    <button className="text-gray-600 hover:text-black">
                        <FaShoppingCart size={20} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
