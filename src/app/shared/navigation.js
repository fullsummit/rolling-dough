"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navigation() {
  const [openMenu, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!openMenu);
  };

  const closeMenuAndNavigate = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="md:mx-auto w-full text-black bg-white flex items-center fixed top-0 z-20 px-4">
      <nav
        className={`md:container flex items-center w-full mx-auto p-4 py-5 justify-between`}
      >
        <img src="logo.webp" className="h-8 w-auto m-2 flex" />
        <button
          aria-label="navigation menu"
          onClick={toggleMenu}
          className="md:hidden z-20"
        >
          <FontAwesomeIcon
            icon={openMenu ? faTimes : faBars}
            className={`text-black fa-lg`}
          />
        </button>
        <div
          className={`${
            openMenu
              ? "fixed top-0 right-0 h-screen w-full bg-white text-black"
              : "hidden bg-white"
          } md:relative md:flex md:w-fit items-center md:space-x-4 md:justify-center`}
        >
          <ul
            className={`${
              openMenu ? "p-4 gap-10 pt-[10vh]" : null
            } text-black flex list-none flex-col justify-center text-lg  overflow-scroll md:overflow-visible md:justify-center items-center h-full md:flex-row md:text-lg`}
          >
            <NavItem
              closeMenuAndNavigate={closeMenuAndNavigate}
              path="/"
              title="Home"
            />
            <NavItem
              closeMenuAndNavigate={closeMenuAndNavigate}
              path="/menu"
              title="Menu"
            />
            <NavItem
              closeMenuAndNavigate={closeMenuAndNavigate}
              path="/locations"
              title="Locations"
            />
            <NavItem
              closeMenuAndNavigate={closeMenuAndNavigate}
              path="/track"
              title="Track Order"
            />
            <NavItem
              closeMenuAndNavigate={closeMenuAndNavigate}
              path="/login"
              title="Sign In"
              button={true}
            />
          </ul>
        </div>
      </nav>
    </header>
  );
}

function NavItem({ closeMenuAndNavigate, path = "/", title, button = false }) {
  return (
    <li
      className={`w-fit border-b-2 border-b-transparent mx-2
        ${
          button
            ? "bg-red-600 text-white rounded-md font-bold px-4 py-2 hover:bg-red-700 hover:cursor-pointer"
            : "hover:text:red-600 pb-2 hover:border-b-red-600"
        }
      `}
      onClick={() => closeMenuAndNavigate(path)}
    >
      <Link href={path} className="w-fit">
        {title}
      </Link>
    </li>
  );
}
