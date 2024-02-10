"use client";
import { faInfoCircle, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function DemoOverlay() {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return open ? (
    <div className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-50 z-50 flex justify-center items-center text-white">
      <div className="bg-zinc-900 shadow-blue-600 px-10 rounded-md shadow-lg relative max-w-lg py-20 mx-4 z-10">
        <button
          onClick={toggleOpen}
          className="absolute top-0 right-0 m-4 z-10"
          aria-label="close demo modal"
        >
          <FontAwesomeIcon icon={faTimes} className="fa-lg" />
        </button>
        <h2 className="text-3xl font-bold mb-2">Demo</h2>
        <p className="text-lg font-light">
          This site is a demo site built by Full Summit. All content is fictional. For demonstration purposes only.
        </p>
      </div>
      <div className="absolute w-full z-0 bg-transparent h-full" onClick={toggleOpen}></div>
    </div>
  ) : (
    <div
      onClick={toggleOpen}
      aria-label="Toggle Demo Modal"
      className="hover:cursor-pointer hover:pr-6 group transition-all fixed right-0 top-[50%] rounded-l-full shadow-lg bg-zinc-950 font-semibold shadow-blue-600 border-none text-white pl-6 pr-3 py-3 z-50 hover:bg-zinc-800"
    >
      <div className="flex items-center justify-center gap-2">
        <span className="text-sm text-blue">demo</span>
        <FontAwesomeIcon icon={faInfoCircle} className="hidden group-hover:flex" size="xs"/>
      </div>
    </div>
  );
}
