"use client";
import { useRef, useState, useEffect } from "react";
import { BASE_URL } from "../config";
import Loader from "../components/Loader";
export default function CanvasDraw({ imageId, imageUrl, ready, onTrace, onClear, onUndoFiber }) {
  const canvasRef = useRef(null);
  const [points, setPoints] = useState([]);
  const [paths, setPaths] = useState([]);
  const [showMask, setShowMask] = useState(false);
  const [imgSize, setImgSize] = useState({ width: 1, height: 1 });
  const [fiberMetrics, setFiberMetrics] = useState([]);
  // =========================
  // DRAW IMAGE + POINTS + PATH
  // =========================
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = imageUrl;

    img.onload = () => {
      const realWidth = img.width;
      const realHeight = img.height;

      setImgSize({
        width: realWidth,
        height: realHeight,
      });

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      canvas.width = img.width;
      canvas.height = img.height;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);

      // ✅ MASK OVERLAY
      if (showMask) {
        const maskImg = new Image();
        maskImg.src = `${BASE_URL}/output/${imageId}/04_fiber_mask.png`;

        maskImg.onload = () => {
          ctx.globalAlpha = 0.4;
          ctx.drawImage(maskImg, 0, 0, canvas.width, canvas.height);
          ctx.globalAlpha = 1.0;
        };
      }

      // ✅ DRAW POINTS
      points.forEach(([y, x]) => {
        const drawX = (x / realWidth) * canvas.width;
        const drawY = (y / realHeight) * canvas.height;

        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(drawX, drawY, 4, 0, 2 * Math.PI);
        ctx.fill();
      });

      // ✅ DRAW PATHS
      paths.forEach((path, idx) => {
        ctx.strokeStyle = `hsl(${idx * 60}, 100%, 50%)`;
        ctx.lineWidth = 2;

        ctx.beginPath();

        path.forEach(([y, x], i) => {
          const drawX = (x / realWidth) * canvas.width;
          const drawY = (y / realHeight) * canvas.height;

          if (i === 0) ctx.moveTo(drawX, drawY);
          else ctx.lineTo(drawX, drawY);
        });

        ctx.stroke();

        // ✅ LABEL
        if (path.length > 0 && fiberMetrics[idx]) {
          const mid = path[Math.floor(path.length / 2)];

          const lx = (mid[1] / realWidth) * canvas.width;
          const ly = (mid[0] / realHeight) * canvas.height;

          const label = `F${idx + 1}`;

          ctx.font = "10px Arial";

          const textWidth = ctx.measureText(label).width;

          ctx.fillStyle = "black";
          ctx.fillRect(lx, ly - 12, textWidth + 10, 16);

          ctx.fillStyle = "yellow";
          ctx.fillText(label, lx + 5, ly);
        }
      });
    };
  }, [imageUrl, points, paths, showMask]);

  // =========================
  // HANDLE CLICK
  // =========================
  const handleClick = (e) => {
    const canvas = canvasRef.current;   // 🔥 ADD THIS
    const rect = canvas.getBoundingClientRect();

    const scaleX = imgSize.width / rect.width;
    const scaleY = imgSize.height / rect.height;

    const x = Math.floor((e.clientX - rect.left) * scaleX);
    const y = Math.floor((e.clientY - rect.top) * scaleY);

    setPoints((prev) => [...prev, [y, x]]);
  };

  // =========================
  // SEND TO BACKEND
  // =========================
  const sendToBackend = async () => {
    console.log("BASE_URL =", BASE_URL);
    console.log("FINAL URL =", `${BASE_URL}/trace`);
    const res = await fetch(`${BASE_URL}/trace`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image_id: imageId,
        points: points,
      }),
    });

    const data = await res.json();

    setPaths((prev) => [...prev, data.path || []]);
    setFiberMetrics((prev) => [...prev, data.metrics]);
    onTrace && onTrace(data);

    console.log("Sending points:", points);
    console.log("Response:", data);

    // 🔥🔥🔥 ADD THIS
    setPoints([]);   // ← VERY IMPORTANT
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row items-start gap-6 w-full max-w-7xl mx-auto">

        {/* CANVAS (LEFT - BIGGER) */}
        <div className="flex-1 w-full">
          <div className="bg-white p-4 rounded-xl shadow-lg w-full">

            <canvas
              ref={canvasRef}
              onClick={handleClick}
              className="border rounded-lg cursor-crosshair w-full h-auto max-h-[75vh]"
            />

          </div>
        </div>

        {/* TOOL PANEL (RIGHT) */}
        <div className="flex flex-col gap-3 w-full lg:w-[200px] mt-4 lg:mt-0 lg:self-start">
{!ready && (
  <div className="flex items-center justify-center gap-2 mt-2">
    <Loader />
    <span className="text-sm text-gray-500">
      Processing the image...
    </span>
  </div>
)}
          <button
            onClick={() => setPoints(points.slice(0, -1))}
            className="bg-black text-white py-2 hover:bg-[#5e8a86] rounded-md font-medium cursor-pointer"
          >
            Undo
          </button>

          <button
            onClick={async () => {
              setPoints([]);
              setPaths([]);
              setFiberMetrics([]);

              onClear && onClear();

              await fetch(`${BASE_URL}/clear_fibers`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ image_id: imageId }),
              });
            }}
            className="bg-black text-white py-2 hover:bg-[#5e8a86] rounded-md font-medium cursor-pointer "
          >
            Clear
          </button>

          <button
            onClick={() => {
              setPaths((prev) => prev.slice(0, -1));
              setFiberMetrics((prev) => prev.slice(0, -1));
              onUndoFiber && onUndoFiber();
            }}
            className="bg-black text-white py-2 hover:bg-[#5e8a86] rounded-md font-medium cursor-pointer "
          >
            Undo Fiber
          </button>

          <button
            onClick={sendToBackend}
            disabled={!ready}
            className={`py-2 rounded-md font-medium ${ready
                ? "bg-black text-white hover:bg-[#5e8a86] cursor-pointer"
                : "bg-gray-400 text-gray-700 cursor-not-allowed"
              }`}
          >
            Trace Fiber
          </button>

          <button
            onClick={() => setShowMask(!showMask)}
            disabled={!ready}
            className={`py-2 rounded-md font-medium ${ready
                ? "bg-black text-white hover:bg-[#5e8a86] cursor-pointer"
                : "bg-gray-400 text-gray-700 cursor-not-allowed"
              }`}
          >
            Toggle Mask
          </button>

        </div>
      </div>
    </div>
  );
}