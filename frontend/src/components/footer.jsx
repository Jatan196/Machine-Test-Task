import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 px-4">
        {/* Subscribe  */}
        <div>
          <h3 className="font-bold text-lg mb-4">Exclusive</h3>
          <p>Subscribe</p>
          <p>Get 10% off your first order</p>
          <div className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 w-full border-none text-black"
            />
            <button className="bg-white text-black px-4">→</button>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Support</h3>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        {/* Account Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Account</h3>
          <ul>
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/*  Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Link</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Download App  */}
        <div>
          <h3 className="font-bold text-lg mb-4">Download App</h3>
          <p>Save $3 with App New User Only</p>
          <div className="flex items-center mt-4">
            <img
              src="https://via.placeholder.com/80x80.png" 
              alt="QR Code"
              className="mr-4"
            />
            <div>   
              <button className="block mb-2 bg-gray-700 p-2 rounded">
                Get it on Google Play
              </button>
              <button className="block bg-gray-700 p-2 rounded">
                Download on the App Store
              </button>
            </div>
          </div>
          {/* <div className="mt-4 flex space-x-4">
            <a href="#" className="text-xl">F</a>
            <a href="#" className="text-xl">T</a>
            <a href="#" className="text-xl">I</a>
            <a href="#" className="text-xl">L</a>
          </div> */}
        </div>
      </div>
      <p className="text-center mt-8">
        © Copyright All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
