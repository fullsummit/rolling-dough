"use client";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function DemoOverlay() {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return open ? (
    <div className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white px-10 rounded-md shadow-lg relative max-w-lg py-20">
      <button onClick={toggleOpen} className="absolute top-0 right-0 m-4 z-10" aria-label="close demo modal">
        <FontAwesomeIcon icon={faTimes} className="text-black fa-lg" />
      </button>
        <h2 className="text-3xl font-bold mb-2">Demo</h2>
        <p className="text-lg font-light">
          This site is a demo built by Full Summit. It is not a real pizza place. All content is fictional. For demonstration purposes only.
        </p>
      </div>
    </div>
  ) : (
    <div
      onClick={toggleOpen}
      aria-label="Toggle Demo Modal"
      className="hover:cursor-pointer fixed right-0 top-[50%] rounded-l-full shadow bg-blue-600 font-semibold border-none text-white pl-4 pr-2 py-2 z-50"
    >
      <span>Demo</span>
    </div>
  );
}
