import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [details, setDetails] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  //   const [quantityCount, setQuantityCount] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setDetails(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    getProductDetails();
  }, [id]);

  if (!details) {
    return <div>Loading...</div>;
  }

  //   const handleAddToCart = () => {dispatch(addCartItem())};

  const images = Array.isArray(details.images)
    ? details.images
    : [details.images];
  const reviewsCount = details?.reviews?.length || 0;

  return (
    <div className="max-w-6xl mx-auto p-4 bg-white">
      <div className="flex flex-col md:flex-row items-start">
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <img
            className="w-full h-auto"
            src={images[imageIndex]}
            alt="Product"
          />
          <div className="flex mt-4 space-x-2 overflow-auto">
            {images.map((img, index) => (
              <img
                key={index}
                onClick={() => setImageIndex(index)}
                className={`${
                  index === imageIndex ? "border-gray-300" : "border-gray-100"
                } w-16 h-16 object-cover cursor-pointer border-[1px] rounded-sm`}
                src={img}
                alt={`Product ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 md:ml-8 mt-8 md:mt-0">
          <h1 className="text-3xl font-bold">{details?.title}</h1>
          <p className="text-sm text-gray-500 my-5">{details?.description}</p>
          <div className="flex items-center mt-2">
            <div className="flex text-yellow-500">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z" />
              </svg>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z" />
              </svg>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z" />
              </svg>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z" />
              </svg>
              <svg
                className="w-5 h-5 text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z" />
              </svg>
            </div>
            <p className="text-gray-600 ml-2">{`(${reviewsCount} reviews)`}</p>
          </div>
          <p className="text-2xl font-semibold mt-4">${details?.price}</p>
          <p className="text-sm text-gray-500">inclusive of all taxes</p>
          <div className="flex items-center justify-between md:justify-start mt-4 space-x-2">
            <div className="w-[30%] flex gap-3 items-center justify-between border-[1px] border-gray-200">
              <button
                // onClick={() => dispatch(decreaseQuantity(details?.id))}
                className="border-r-[1px] border-gray-200 p-2 text-xl hover:bg-gray-800 hover:text-white w-[3rem] transition-all duration-200"
              >
                -
              </button>
              <span className="text-md text-gray-500">{1}</span>
              <button
                // onClick={() => dispatch(increaseQuantity(details?.id))}
                className="border-l-[1px] border-gray-200 p-2 text-xl hover:bg-gray-800 hover:text-white w-[3rem] transition-all duration-200"
              >
                +
              </button>
            </div>
            <p className="text-md text-gray-600">Quantity</p>
          </div>
          <button
            // onClick={() => dispatch(addCartItem({}))}
            className="mt-4 px-4 py-2 bg-black text-white rounded w-full md:w-auto"
          >
            Add to cart
          </button>
          <button className="mt-4 px-4 py-2 border border-gray-300 text-black rounded w-full md:w-auto md:ml-2">
            Wishlist
          </button>
          <div className="mt-4 text-gray-600">
            <p>Free delivery on order over $30.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
