import { useRef, useState } from "react";

export default function Upload({ setFile, upload }) {
  const fileRef = useRef();
  const [stepPercent, setStepPercent] = useState(5);
  return (
    <div>
      {/* Hidden input */}
      <input
        type="file"
        ref={fileRef}
        className="hidden"
        onChange={(e) => {
          console.log("File selected:", e.target.files[0]);
          setFile(e.target.files[0]);
        }}
      />

      {/* Button to open file explorer */}
      <button
        onClick={() => fileRef.current.click()}
        className="bg-gray-500 px-4 py-2 cursor-pointer"
      >
        Choose File
      </button>
<div className="mt-3">
  <label className="text-sm font-medium text-gray-700">
    Sampling Step (%)
  </label>

  <input
    type="range"
    min="1"
    max="20"
    value={stepPercent}
    onChange={(e) => setStepPercent(Number(e.target.value))}
    className="w-full mt-1 accent-[#5e8a86]"
  />

  <p className="text-xs text-gray-600 mt-1">
    {stepPercent}%
  </p>
</div>

<p>Step: {stepPercent}%</p>
      {/* Upload button */}
      <button
        onClick={upload}
        className="bg-blue-500 px-4 py-2 ml-2 cursor-pointer"
      >
        Upload
      </button>
    </div>
  );
}