import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../store/slices/wishlistSlice";
import { addCartItem, removeCartItem } from "../store/slices/cartSlice";
import { MdDelete } from "react-icons/md";

const Wishlist = () => {
  const wishlistItem = useSelector((state) => state.wishlistItem.wishlistItems);
  const cartIds = useSelector((state) => state.cartItem.cartIds);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const checkIdIsInCart = (id) => {
    const check = cartIds.includes(id);
    return check;
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        My Wishlist{" "}
        {wishlistItem && wishlistItem?.length > 0
          ? `(${wishlistItem.length} products)`
          : "is Empty"}
      </h1>
      {wishlistItem && wishlistItem?.length > 0 ? (
        <table className="min-w-full border-collapse block md:table">
          <thead className="block md:table-header-group">
            <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative">
              <th className="bg-gray-200 text-gray-700 font-bold md:border md:border-grey-500 text-left block md:table-cell"></th>
              <th className="bg-gray-200 p-2 text-gray-700 font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Product Name
              </th>
              <th className="bg-gray-200 p-2 text-gray-700 font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Price
              </th>
              <th className="bg-gray-200 p-2 text-gray-700 font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Stock Status
              </th>
              <th className="bg-gray-200 p-2 text-gray-700 font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="block md:table-row-group">
            {wishlistItem.map((item) => (
              <tr
                key={item.id}
                className="bg-white mb-2 md:mb-0  border border-grey-500 md:border-none block md:table-row"
              >
                <td className="hidden p-1 md:border-b md:border-grey-500 text-left md:table-cell">
                  <button
                    onClick={() => dispatch(removeFromWishlist(item?.id))}
                    className="ml-4 text-red-500"
                  >
                    <MdDelete size={23} color="red" />
                  </button>
                </td>
                <td className="p-2 md:border-b md:border-grey-500 text-left block md:table-cell">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 mr-4 inline-block"
                  />
                  <span>{item.title}</span>
                </td>
                <td className="p-2 md:border-b md:border-grey-500  text-left block md:table-cell">
                  <span className="">₹{item.price}</span>
                </td>
                <td className="p-2 md:border-b md:border-grey-500 text-left block md:table-cell">
                  In Stock
                </td>
                <td className="p-2 md:border-b md:border-grey-500 text-left block md:table-cell">
                  <div className="flex items-center">
                    {checkIdIsInCart(item.id) ? (
                      <button
                        onClick={() => dispatch(removeCartItem(item.id))}
                        className="bg-red-500 text-white px-4 py-2 rounded"
                      >
                        Remove Cart
                      </button>
                    ) : (
                      <button
                        onClick={() =>
                          dispatch(
                            addCartItem({
                              id: item.id,
                              title: item.title,
                              price: item.price,
                              brand: item.brand,
                              image: item.image,
                              quantity: 1,
                            })
                          )
                        }
                        className="bg-black text-white px-4 py-2 rounded"
                      >
                        Add to Cart
                      </button>
                    )}
                    <button
                      onClick={() => dispatch(removeFromWishlist(item?.id))}
                      className="ml-4 text-red-500 md:hidden block bg-gray-100 p-2 rounded-full"
                    >
                      <MdDelete size={24} color="red" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="flex items-center justify-center">
          <img
            height={500}
            width={500}
            src="/empty-wishlist.png"
            alt="empty-wishlist-image"
            className="object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default Wishlist;
