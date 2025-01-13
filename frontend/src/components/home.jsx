import React from 'react';
import ProductList from './productList';
import Cart from './cart';

const Home = () => {
    
    return (
        <div claasName='flex '>
            <ProductList addCart={1}/>  
            <Cart />
        </div>  
    );
}

export default Home;
