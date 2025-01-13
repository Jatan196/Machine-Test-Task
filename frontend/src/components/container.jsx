import React from 'react';
import ProductList from './productList';

const Container = () => {
    return (    
        <div className='p-5 flex flex-row flex-wrap justify-items-center'>
            <div>
                <img
                    src='https://media.istockphoto.com/id/918381560/photo/eletronic-department-store-with-bokeh-blurred-background.jpg?s=612x612&w=0&k=20&c=keZzS1F14f1Df9OMMw5Uutw_iqU4BCjLKOTN01f-JpU='
                    alt="Ad"
                />
            </div>
            <div>
                <div>
                    <h1 className='bg-red-500 text-white w-15 rounded-2xl p-2'>Best Selling</h1>
                    <ProductList />
                </div>
                <div>
                    <h1 className='bg-red-500 text-white w-15 rounded-2xl p-2'>Flash Sales Today</h1>
                    <ProductList />
                </div>
                <div>
                    <h1 className='bg-red-500 text-white w-15 rounded-2xl p-2'>Top picks</h1>
                    <ProductList />
                </div>
            </div>
        </div>
    );
}

export default Container;
