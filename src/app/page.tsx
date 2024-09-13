import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center bg-[#fff] text-[#000] cursor-pointer'>
      <Link href="/list-product">
        <p>Click here to see all Products</p>
      </Link>
    </div>
  )
}
