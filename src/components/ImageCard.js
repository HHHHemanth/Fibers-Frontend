"use client";

import { useState } from "react";

export default function ImageCard({ title, src, icon }) {
  const [isOpen, setIsOpen] = useState(false);

  const fullUrl = `${BASE_URL}${src}`;

  return (
    <>
      {/* CARD */}
<div className="relative overflow-hidden rounded-lg border border-gray-700 group cursor-pointer">

  {/* IMAGE */}
  <img
    src={fullUrl}
    className="w-full h-full object-cover transition duration-500 
               group-hover:scale-105 
               group-hover:contrast-110 
               group-hover:brightness-90 
               group-hover:grayscale-[20%]"
  />

<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-3">

  {/* ICON */}
  <div className="text-white text-3xl">
    {icon}
  </div>

  {/* TITLE */}
  <p className="text-white text-sm font-semibold tracking-wide">
    {title}
  </p>

  {/* BUTTONS */}
  <div className="flex gap-3 mt-2">

    {/* VIEW */}
    <button
      onClick={() => setIsOpen(true)}
      className="bg-black text-white px-3 py-1 text-xs rounded shadow hover:bg-white hover:text-black"
    >
      View
    </button>

    {/* DOWNLOAD */}
    <a
      href={fullUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-black text-white px-3 py-1 text-xs rounded shadow hover:bg-white hover:text-black"
    >
      Download
    </a>

  </div>

</div>

</div>

      {/* FULLSCREEN MODAL */}
      {isOpen && (
        <div className="fixed inset-0 backdrop-blur-md bg-black/30 flex items-center justify-center z-50">
          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white text-xl cursor-pointer"
          >
            ✕
          </button>

          {/* Download button */}
          <a
            href={fullUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="absolute top-4 right-14 bg-white text-black px-3 py-1 rounded cursor-pointer"
          >
            Download
          </a>

          {/* Image */}
          <img
            src={fullUrl}
            className="max-h-[90%] max-w-[90%] object-contain"
          />
        </div>
      )}
    </>
  );
}