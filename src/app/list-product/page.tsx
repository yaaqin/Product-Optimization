"use client";
import { categoryList, ProductList } from '@/data/data'
import React, { useState } from 'react'
import { Product } from './interface';
import { useRouter } from 'next/navigation';

export default function page() {
    const data: Product[] = ProductList
    const category = categoryList
    const router = useRouter();
    const [activeCategory, setActiveCategory] = useState<string>('')

    const handleCategory = (ctgry: string) => {
        setActiveCategory(ctgry)
    }

    const filteredData = activeCategory
        ? data.filter((item) => item.category === activeCategory)
        : data;
        const handleProductClick = (product: Product) => {
            localStorage.setItem('selectedProduct', JSON.stringify(product));
            router.push(`/list-product/${product.name}`);
        };
    return (
        <div className='bg-[#fff] w-full min-h-[100vh] text-[#000]'>
            <section className='max-w-[1550px] shadow-md mx-auto py-[48px] px-[24px] rounded-[24px]'>
                <h6>Category</h6>
                <div className='flex gap-[16px]'>
                    <p
                        onClick={() => handleCategory('')}
                        className={`cursor-pointer ${activeCategory === '' ? 'text-blue' : 'text-black'}`}
                    >All</p>
                    {category.map((item, index) => (
                        <p
                            key={index}
                            onClick={() => handleCategory(item)}
                            className='cursor-pointer duration-300'>{item}</p>
                    ))}
                </div>
                <section className='flex gap-[36px] flex-wrap mt-[48px]'>
                    {filteredData.map((item, index) => (
                        <div
                            onClick={() => handleProductClick(item)}
                            key={index} className='w-[220px] p-[24px] rounded-[12px] border-[#DDE5E9] border-[1px] shadow-md flex flex-col items-center '>
                            <section>
                                <img src={item.image} alt='' className='w-[180px] h-[180px] object-cover rounded-[8px] mt-[12px]'></img>
                                <h6 className='mt-[8px]'>{item.name}</h6>
                                <p className='mt-[8px]'>{item.price} $</p>
                                <p className='mt-[8px]'>{item.category}</p>
                            </section>
                        </div>
                    ))}
                </section>
            </section>
        </div>
    )
}
