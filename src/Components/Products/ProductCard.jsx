import React from 'react'

const ProductCard = ({image, title, description, price}) => {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex h-64 items-center justify-center bg-gray-50 p-6"> 
        <img src={image} alt={title} className="h-full w-full object-contain" /> 
      </div> 
      <div className="flex min-h-65 flex-col p-5"> 
        <h2 className="mb-5 h-16 text-lg font-semibold text-gray-900"> {title.slice(0, 50)} </h2> 
        <p className="mb-4 text-sm leading-6 text-gray-600"> {description.slice(0, 90)} </p> 
        <div className="mb-5 mt-auto"> <span className="text-2xl font-bold text-green-700"> ${price} </span> </div> 
        <button className=" w-full rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-black"> Add to Cart </button> 
        </div>
    </div>
  )
}

export default ProductCard




