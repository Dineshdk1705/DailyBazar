import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products`);
      const data = await response.json();
      setProducts(data.products);
      console.log(data.products);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="w-screen p-4">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            rating={product.rating}
            image={product.images[0]}
            imagesCount={product.images}
            reviews={product.reviews}
            brand={product.brand}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
