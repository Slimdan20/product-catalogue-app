import React from 'react'

const Products = () => { return ( 
<section className="min-h-screen bg-gray-100 px-6 py-10"> 
    <div className="mx-auto max-w-7xl"> 
        <h1 className="mb-8 text-3xl font-bold text-gray-900"> Product Catalogue </h1> 
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"> 
            {/* Product cards will be rendered here after connecting the API */}
        </div> 
    </div> 
</section> 
); }; 

export default Products




