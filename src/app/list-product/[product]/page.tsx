"use client";

import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Product } from '../interface';

const ProductDetail = () => {
    const { product } = useParams();
    const [selectedProduct, setSelectedProduct] = useState<Product>();

    useEffect(() => {
        const storedProduct = localStorage.getItem('selectedProduct');
        if (storedProduct) {
            setSelectedProduct(JSON.parse(storedProduct));
        }
    }, []);

    return (
        <div className="max-w-7xl mx-auto p-8 bg-[#fff]">
            <div className="flex flex-col md:flex-row bg-white  rounded-lg overflow-hidden">
                <div className="w-full md:w-1/2">
                    <img
                        src={selectedProduct?.image}
                        alt="Product"
                        className="object-cover w-[700px] h-[700px] rounded-[48px] object-cover"
                    />
                </div>

                <div className="w-full md:w-1/2 p-8">
                    <div className="mb-4">
                        <h1 className="text-3xl font-bold text-[#000]">{selectedProduct?.name}</h1>
                        <p className="text-sm text-gray-500">{selectedProduct?.category}</p>
                    </div>

                    <div className="mb-4">
                        <p className="text-2xl text-blue-600 font-semibold">{selectedProduct?.price} $</p>
                    </div>





                    <div className="flex space-x-4">
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-md">
                            cart
                        </button>
                        <button className="bg-green-600 text-white px-6 py-2 rounded-md">
                            Buy
                        </button>
                    </div>

                    <div className="mt-4 flex space-x-4 text-gray-600">
                        <p>{selectedProduct?.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
