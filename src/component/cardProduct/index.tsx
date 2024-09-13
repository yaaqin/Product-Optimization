"use client";
import React from 'react'
interface prodProps {
    name: string
    category: string
    price: number
    img: string
}

export default function CardProd({
    name,
    category,
    price,
    img
}: prodProps) {
    return (
        <div className='max-w-[230px] px-[24px] pt-[24px] rounded-[12px] border-[#DDE5E9] border-[3px] shadow-md flex-col'>
            <section>
                <img src={img} alt='' className='w-[80px] h-[80px] object-cover rounded-[8px] mt-[12px]'></img>
                <h6 className='mt-[8px]'>{name}</h6>
                <p className='mt-[8px]'>{price} $</p>
                <p className='mt-[8px]'>{category}</p>
            </section>
        </div>
    )
}
