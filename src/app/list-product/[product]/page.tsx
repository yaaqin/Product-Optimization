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
        <div>
            {selectedProduct ? (
                <div>
                    <h1>{selectedProduct.name}</h1>
                    <img src={selectedProduct.image} alt={selectedProduct.name} />
                    <p>Price: {selectedProduct.price} $</p>
                    <p>Category: {selectedProduct.category}</p>
                </div>
            ) : (
                <p>Loading product details...</p>
            )}
        </div>
    );
};

export default ProductDetail;
