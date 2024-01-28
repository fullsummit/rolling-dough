"use client";
import { useEffect, useState } from "react";
import { addToCart, removeFromCart } from "../shared/cart/cart-total";

export default function Menu() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-7xl mx-auto p-4 items-center justify-center">
      <h1 className="text-4xl font-bold">Menu</h1>
      <p className="text-2xl font-light">Check out our menu.</p>
      <div className="flex flex-col sm:flex-row gap-2 w-full">
        <MenuCategory
          title="Pizza"
          items={[
            {
              name: "Margherita",
              price: 9.99,
              description: "A traditional margherita pizza.",
            },
            {
              name: "Pepperoni",
              price: 11.99,
              description: "A classic pepperoni pizza.",
            },
            {
              name: "Supreme",
              price: 13.99,
              description: "A classic supreme pizza.",
            },
          ]}
        />
        <MenuCategory
          title="Pasta"
          items={[
            {
              name: "Alfredo",
              price: 9.99,
              description: "A traditional Alfredo.",
            },
            {
              name: "Carbonara",
              price: 11.99,
              description: "A classic carbonary.",
            },
            {
              name: "Tomato Basil",
              price: 13.99,
              description: "A classic tomato basil spaghetti.",
            },
          ]}
        />
      </div>
    </div>
  );
}

function MenuCategory({ title, items }) {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm mx-auto p-4 items-start justify-center">
      <h2 className="font-semibold text-3xl">{title}</h2>
      <div className="flex flex-col gap-4">
        {items.map((item, index) => (
          <MenuItem {...item} key={item.id || index} />
        ))}
      </div>
    </div>
  );
}

function MenuItem({ name, price, description }) {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const item = cartItems.find((item) => item.name === name.toLowerCase());
    setQuantity(item?.quantity || 0);
  }, [addToCart, removeFromCart]);

  return (
    <div className="flex gap-2 w-full max-w-sm mx-auto items-center justify-center rounded-md">
      <img
        src="/pizza.jpg"
        className="w-1/3 rounded-md shadow-md"
        alt="pizza in front of brick oven"
      />
      <div className="flex flex-col w-2/3">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-base font-light">{description}</p>
        <p className="text-base font-light">{price}</p>
        <div className="flex items-center justify-start gap-4">
          {quantity > 0 && (
            <button
              aria-label="remove from cart"
              className="h-4 w-4 flex items-center justify-center rounded-full bg-red-600 text-white"
              onClick={() => removeFromCart(name.toLowerCase(), price)}
            >
              -
            </button>
          )}
          <span>{quantity}</span>
          <button
            aria-label="add to cart"
            className="h-4 w-4 flex items-center justify-center rounded-full bg-red-600 text-white"
            onClick={() => addToCart(name.toLowerCase(), price)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
