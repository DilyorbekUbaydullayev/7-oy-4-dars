import React from "react";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../lib/slices/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.cart);
  if (!products.length)
    return (
      <h1 className="text-xl text-center my-5 text-primary">Корзина пуста</h1>
    );
  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <div>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mt-10">Корзина</h1>
        <div className="flex flex-col gap-5 my-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="  flex justify-between items-center gap-6 border-2 border-gray-200 p-5 rounded-4xl"
            >
              <div className="w-[20%] aspect-square border-2 border-primary overflow-hidden rounded-2xl p-2">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full "
                />
              </div>
              <div className="w-[80%]">
                <h2 className="text-xl font-bold mt-5 ">{product.title}</h2>
                <p className="text-gray-500 mt-2 line-clamp-2">{product.description}</p>
                <div className="flex justify-between items-center mt-5">
                  <p className="text-primary  h-full ">{product.price} ₽</p>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="bg-primary text-white px-5 py-2 rounded-full cursor-pointer"
                  >
                    Удалить
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cart;
