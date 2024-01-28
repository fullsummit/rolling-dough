"use client";
import { faShoppingCart, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

// add to cart
export const addToCart = (name, price) => {
  let cart = JSON.parse(localStorage.getItem("cart"));
  if (!cart) {
    cart = [];
  }
  const existingItem = cart.find((cartItem) => cartItem.name === name);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
};

// update cart
export const updateCart = (item, quantity) => {
  let cart = JSON.parse(localStorage.getItem("cart"));
  if (!cart) {
    cart = [];
  }
  const existingItem = cart.find((cartItem) => cartItem.name === item.name);
  if (existingItem) {
    existingItem.quantity = quantity;
  } else {
    cart.push({ ...item, quantity });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
};

// remove item from cart or substract 1 from quantity
export const removeFromCart = (name) => {
  let cart = JSON.parse(localStorage.getItem("cart"));
  if (!cart) {
    cart = [];
  }
  const existingItem = cart.find((cartItem) => cartItem.name === name);
  if (existingItem) {
    if (existingItem.quantity > 1) {
      existingItem.quantity -= 1;
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart));
};

export function CartTotal() {
  const [total, setTotal] = useState(0);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    setItems(cart);
  }, [items]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    let calculatedTotal = 0;
    cart?.forEach((item) => {
      calculatedTotal += item.price * item.quantity;
    });
    setTotal(calculatedTotal);
  }, []);

  const toggleShoppingCart = () => {
    setOpen(!open);
  };

  return (
    <div
      className="z-40 hover:cursor-pointer flex w-full items-baseline"
      tabIndex={0}
      onClick={() => toggleShoppingCart()}
    >
      {open && <ShoppingCart setOpen={setOpen} items={items} />}
      <FontAwesomeIcon icon={faShoppingCart} />
      <p className="text-xs font-light">${total.toLocaleString()}</p>
    </div>
  );
}

function ShoppingCart({ items = [], setOpen }) {
  return (
    <div className="top-0 right-0 fixed h-screen w-screen bg-gray-200 bg-opacity-50 flex flex-col items-center justify-center">
      <div className="sm:w-1/3 w-full ml-auto bg-white h-full flex flex-col items-center justify-center shadow-md">
        <button
          className="absolute top-0 right-0 m-4 z-10"
          aria-label="close shopping cart"
          onClick={() => setOpen()}
        >
          <FontAwesomeIcon icon={faTimes} className="text-black fa-lg" />
        </button>
        <h2 className="text-4xl font-semibold pb-2 border-b border-zinc-300 mb-4">
          <FontAwesomeIcon icon={faShoppingCart} className="mr-2" size="xs" />
          Shopping Cart
        </h2>
        {items.length > 0 ? (
            <>
          <div className="flex flex-col items-center justify-center">
            {items.map((item) => (
              <div className="flex w-full">
                <div className="flex gap-2 items-center justify-start w-full">
                  <p className="text-xs font-light h-4 w-4 rounded-full shadow items-center justify-center flex">{item.quantity}</p>
                  <p>{item.name.toUpperCase()}</p>
                  <p className="text-base font-semibold">
                    ${item.price * item.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 my-4">
              <button className="btn-red">
                Checkout
                </button>
                    <button className="btn-white">Clear Cart</button>
          </div>
            </>
        ) : (
          <p className="text-base font-extralight">No items in cart</p>
        )}
      </div>
    </div>
  );
}
