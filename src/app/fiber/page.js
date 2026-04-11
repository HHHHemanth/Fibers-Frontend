"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Upload from "../../components/Upload";
import AnalyzeButton from "../../components/AnalyzeButton";
import ImageViewer from "../../components/ImageViewer";
import ParticleTable from "../../components/ParticleTable";
import CanvasDraw from "../../components/CanvasDraw";
import useAnalysis from "../../hooks/useAnalysis";
import { RotateCcw, FileText  } from "lucide-react";
import { BASE_URL } from "../../config";
export default function Home() {
    const [fileDetails, setFileDetails] = useState(null);
    const [fibers, setFibers] = useState([]);
    const [imageUrl, setImageUrl] = useState(null);





    const {
    setFile,
    upload,
    analyze,
    result,
    uploading,
    analyzing,
    imageId,
    fileMeta
    } = useAnalysis();
        useEffect(() => {
  if (!imageId) return;

  const tryLoad = () => {
    const img = new Image();
    img.src = `${BASE_URL}/output/${imageId}/01_cropped.png`;

    img.onload = () => {
      setImageUrl(img.src);   // ✅ set only when ready
    };

    img.onerror = () => {
      setTimeout(tryLoad, 500);  // retry until ready
    };
  };

  tryLoad();
}, [imageId]);
    console.log("FILE META:", fileMeta);
    return (
        <div className="bg-white text-black min-h-screen">

            {/* HEADER */}
            <header className="bg-black border-b-2 border-[#5e8a86] px-6 py-4 md:px-12 flex justify-between items-center">
<div className="flex items-center justify-between w-full">
  
  {/* LEFT LOGO */}
  <Link href="/" className="cursor-pointer">
    <img
      src="/cmtilogo.png"
      alt="CMTI Logo"
      className="h-8 sm:h-10 md:h-12 bg-white/10 p-1 rounded-lg"
    />
  </Link>

  {/* RIGHT LOGO */}
  <Link href="/" className="cursor-pointer">
    <img
      src="/fiberLogo.png"
      alt="MHI Logo"
      className="h-8 sm:h-10 md:h-12 bg-white/10 p-1 rounded-lg"
    />
  </Link>

</div>
            </header>

            {/* CONTENT */}
            <div className="p-10">
                {/* <h1 className="text-3xl mb-6">Fiber Analyzer</h1> */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

                    {/* LEFT → Upload */}
<div
  className="flex items-center justify-center w-full"
  onDragOver={(e) => e.preventDefault()}
  onDrop={(e) => {
    e.preventDefault();

    const file = e.dataTransfer.files[0];
    if (!file) return;

    setFile(file);

    setFileDetails({
      name: file.name,
      size: (file.size / 1024 / 1024).toFixed(2) + " MB",
    });
  }}
>
  <div
    className="flex flex-col items-center justify-center w-full h-64 bg-gray-100 border border-dashed border-gray-400 rounded-lg cursor-pointer hover:bg-gray-200 transition"
    onClick={() => document.getElementById("fileInput").click()}
  >
    <p className="mb-2 text-sm">Click to upload TIFF file or drag and drop</p>
    <p className="text-xs mb-4">
      Max Size: <span className="font-semibold">30MB</span>
    </p>

    <input
      type="file"
      className="hidden"
      id="fileInput"
      accept=".tif,.tiff"
      onChange={(e) => {
        const file = e.target.files[0];
        setFile(file);

        if (file) {
          setFileDetails({
            name: file.name,
            size: (file.size / 1024 / 1024).toFixed(2) + " MB",
          });
        }
      }}
    />

    <button
      className="bg-[#5e8a86] text-white px-4 py-2 rounded-md hover:bg-black transition cursor-pointer"
    >
      Browse File
    </button>
  </div>
</div>

                    {/* RIGHT → File Details */}
                    <div className="bg-gray-50 border rounded-lg p-6 shadow-sm">
                        <h2 className="text-lg font-semibold mb-4 text-[#5e8a86]">
                            File Details
                        </h2>

                        {fileDetails ? (
                            <div className="space-y-2 text-sm">
                                <p><b>Name:</b> {fileDetails.name}</p>
                                <p><b>Size:</b> {fileDetails.size}</p>
                                <p><b>Resolution:</b> {fileMeta?.resolution?.join(" x ") || "—"}</p>
                                <p>
  <b>Pixel Size:</b>{" "}
  {fileMeta?.pixel_size !== null && fileMeta?.pixel_size !== undefined
    ? `${fileMeta.pixel_size} µm`
    : "—"}
</p>
                            </div>
                        ) : (
                            <p className="text-gray-500 text-sm">No file selected</p>
                        )}
                    </div>

                </div>
<div className="w-full mb-6 flex gap-4">

  {/* UPLOAD BUTTON */}
<button
  onClick={upload}
  disabled={uploading}
  className={`flex-1 py-3 rounded-md font-medium transition flex items-center justify-center gap-2
    ${uploading
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-black text-white hover:bg-[#5e8a86] cursor-pointer"
    }`}
>
  {uploading ? (
    <>
      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin text-white"></span>
      Uploading...
    </>
  ) : (
    "Upload"
  )}
</button>

  {/* REFRESH BUTTON */}
  <button
    onClick={() => window.location.reload()}
    className="flex items-center justify-center gap-2 px-5 bg-gray-200 text-black rounded-md hover:bg-[#5e8a86] hover:text-white transition cursor-pointer"
  >
    <RotateCcw size={18} />
    Refresh
  </button>

</div>
{/* CANVAS CARD */}
{imageUrl && (
  <div className="bg-white border rounded-xl shadow-md p-6 mb-6">

    <h2 className="text-lg font-semibold mb-4 text-[#5e8a86]">
      Fiber Tracing
    </h2>

    <CanvasDraw
      imageId={imageId}
      imageUrl={imageUrl}
      onTrace={(data) => {
        if (data.metrics) {
          setFibers((prev) => [
            ...prev,
            {
              id: prev.length + 1,
              ...data.metrics,
            },
          ]);
        }
      }}
      onClear={() => setFibers([])}
      onUndoFiber={() => {
        setFibers((prev) => prev.slice(0, -1));
      }}
    />

  </div>
)}

                {/* Analyze */}

                {/* {loading && <p>Processing...</p>} */}

                {/* Fiber Table */}
{fibers.length > 0 && (
  <div className="mt-6">
    <h2 className="text-xl mb-3 font-semibold text-[#5e8a86]">
      Fiber Measurements
    </h2>

    <div className="relative overflow-x-auto bg-gray-50 shadow-sm rounded-xl border border-gray-200">
      <table className="w-full text-sm text-left text-gray-700">

        {/* HEADER */}
        <thead className="text-sm bg-gray-100 border-b border-gray-200">
          <tr>
            <th className="px-6 py-3 font-medium">ID</th>
            <th className="px-6 py-3 font-medium">Length (µm)</th>
            <th className="px-6 py-3 font-medium">Min Width</th>
            <th className="px-6 py-3 font-medium">Max Width</th>
          </tr>
        </thead>

        {/* BODY */}
        <tbody>
          {fibers.map((f) => (
            <tr
              key={f.id}
              className="bg-white border-b border-gray-200 hover:bg-gray-50 transition"
            >
              <td className="px-6 py-3 font-medium text-gray-900">
                {f.id}
              </td>

              <td className="px-6 py-3">
                {f.length?.toFixed(2)}
              </td>

              <td className="px-6 py-3">
                {f.min_width?.toFixed(2)}
              </td>

              <td className="px-6 py-3">
                {f.max_width?.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  </div>
)}
                <AnalyzeButton
  analyze={analyze}
  disabled={!imageId}
  loading={analyzing}
/>

                {/* Results */}
                <ImageViewer result={result} />
                <ParticleTable particles={result?.particles} />

                {/* PDF */}
                {result?.pdf && (
<a
  href={`${BASE_URL}${result.pdf}`}
  target="_blank"
  rel="noopener noreferrer"
  className="bg-[#5e8a86] text-white px-4 py-2 mt-6 inline-flex items-center gap-2 rounded-md cursor-pointer hover:bg-black transition"
>
  <FileText size={18} />
  Download PDF
</a>
                )}
            </div>
                            {/* 4. Footer Section */}
                <footer className="bg-black text-slate-300 mt-20 py-20 px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-slate-800">

                            <div className="md:col-span-2">
                                <div className="flex items-center gap-3 mb-4">
                                    <img src="/cmtilogo.png" alt="CMTI Logo" className="h-10 bg-white/10 p-1.5 rounded-lg" />
                                    <img src="/fiberLogo.png" alt="MHI Logo" className="h-10 bg-white/10 p-1.5 rounded-lg" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Fiber & Particle Analysis System</h3>
                                <p className="text-sm text-slate-400 max-w-sm mb-4">
                                    High-precision system for fiber tracing, particle detection, and automated measurement reporting.
                                </p>
                            </div>



                            <div>
                                <h4 className="text-white font-semibold mb-4">Contact & Support</h4>
                                <ul className="space-y-2 text-sm z-50 relative pointer-events-auto">
                                    <li className="flex items-center gap-2">
                                        support@cmti.res.in
                                    </li>
                                    <li className="flex items-center gap-2">
                                        +91 (80) 9876 5234
                                    </li>
                                    <li className="mt-4 flex flex-col gap-1">
                                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                                        <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                            <p>&copy; {new Date().getFullYear()} Central Manufacturing Technology Institute. All rights reserved.</p>
                            <p className="mt-2 md:mt-0 font-mono">v1.0.0</p>
                        </div>
                    </div>
                </footer>
        </div>
    );
}