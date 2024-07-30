import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../store/slices/productSlice";

const ProductsList = () => {
  const dispatch = useDispatch();

  const cartIds = useSelector((state) => state.cartItem.cartIds);
  const wishlistIds = useSelector((state) => state.wishlistItem.wishlistIds);
  const productsData = useSelector((state) => state.productsItem.productsList);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  const checkIdIsInCart = (id) => {
    return cartIds.includes(id);
  };

  const checkIdIsInWishlist = (id) => {
    return wishlistIds.includes(id);
  };

  return (
    <div className="w-screen p-4">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center">
        {productsData?.products?.map((product) => (
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
            inCart={checkIdIsInCart(product.id)}
            inWishlist={checkIdIsInWishlist(product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
