import { useRef } from "react";

export default function Upload({ setFile, upload }) {
  const fileRef = useRef();

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