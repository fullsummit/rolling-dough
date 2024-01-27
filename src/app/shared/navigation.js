"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navigation() {
  const [openMenu, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!openMenu);
    toggleDropdown("");
  };

  const closeMenuAndNavigate = () => {
    setMenuOpen(false);
    setDropdownOpen("");
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
    <header className="md:mx-auto w-full bg-white bg-opacity-20 shadow-md text-black flex justify-center items-center fixed top-0 z-20 px-4">
      <nav
        className={`md:container flex items-center w-full p-4 py-5 justify-between`}
      >
        <div className={`flex items-center z-30`}>
          <span className="text-2xl font-bold">Rolling Dough</span>
        </div>
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
              : "hidden bg-transparent"
          } md:relative md:flex md:w-auto full text-[calc(12px+10vh)]`}
        >
          <ul
            className={`${
              openMenu ? "p-4 pt-[10vh]" : null
            } text-black flex ml-0 list-none flex-col space-y-14 text-lg justify-start overflow-scroll md:overflow-visible md:justify-center items-center h-full md:flex-row md:space-x-6 md:space-y-0 md:text-sm`}
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
      className={button ? "text-sm bg-red-600 text-white rounded-md font-bold px-4 py-2" : "hover:text:red-600"}
      onClick={() => closeMenuAndNavigate(path)}
    >
      <Link href={path}>{title}</Link>
    </li>
  );
}
