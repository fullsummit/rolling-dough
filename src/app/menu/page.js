"use client";
import Link from "next/link";

export default function Menu() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-7xl mx-auto p-4 items-center justify-center">
      <h1 className="text-4xl font-bold">Menu</h1>
      <p className="text-2xl font-light">Check out our menu. <Link className="text-red-600 font-semibold" href={'/login'}>Sign in</Link>{" "}or{" "}<Link className="text-red-600 font-semibold" href={"/login"}>Sign up</Link> to order.</p>
      <div className="flex flex-col sm:flex-row gap-2 w-full">
        <MenuCategory
          title="Pizza"
          items={[
            {
              name: "Margherita",
              price: 9.99,
              description: "A traditional margherita pizza.",
              imageSrc: "/optimized/margherita-pizza-320px.jpg",
              imageAlt: "A margherita pizza.",
            },
            {
              name: "Pepperoni",
              price: 11.99,
              description: "A classic pepperoni pizza.",
              imageSrc: "/optimized/pepperoni-pizza-320px.jpg",
              imageAlt: "A pepperoni pizza.",
            },
            {
              name: "Supreme",
              price: 13.99,
              description: "A classic supreme pizza.",
              imageSrc: "/optimized/supreme-pizza-320px.jpg",
              imageAlt: "A supreme pizza with pepperoni, sausage, and peppers.",
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
              imageSrc: "/optimized/alfredo-pasta-320px.jpg",
              imageAlt: "A plate of alfredo pasta.",
            },
            {
              name: "Carbonara",
              price: 11.99,
              description: "A classic carbonary.",
              imageSrc: "/optimized/carbonara-pasta-320px.jpg",
              imageAlt: "A plate of carbonara pasta.",
            },
            {
              name: "Tomato Basil",
              price: 13.99,
              description: "A classic tomato basil spaghetti.",
              imageSrc: "/optimized/tomato-pasta-320px.jpg",
              imageAlt: "A plate of tomato basil pasta.",
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

function MenuItem({ name, price, description, imageSrc, imageAlt }) {
  return (
    <div className="flex gap-2 w-full max-w-sm mx-auto items-center justify-center rounded-md">
      <img
        src={imageSrc || "/tomato-pasta-320px.jpg"}
        className="w-20 h-20 object-cover rounded-md shadow-md"
        alt={imageAlt || "pizza in front of brick oven"}
      />
      <div className="flex flex-col w-2/3">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-sm font-light">{description}</p>
        <p className="text-lg font-normal">{price}</p>
      </div>
    </div>
  );
}
