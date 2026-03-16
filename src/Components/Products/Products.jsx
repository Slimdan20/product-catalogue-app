import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";


const Products = () => { 
    const [products, setProducts] = useState([]);

    useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
    } 
  };

  fetchProducts();
}, []); 
    return ( 
<section className="min-h-screen bg-gray-100 px-6 py-10"> 
    <div className="mx-auto max-w-7xl"> 
        <h1 className="mb-8 text-3xl font-bold text-gray-900"> Product Catalogue </h1> 
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"> 
            {products.map((product) => (
  <ProductCard
    key={product.id}
    image={product.image}
    title={product.title}
    description={product.description}
    price={product.price}
  />
))}
    </div> 
    </div> 
</section> 
); }; 

export default Products




