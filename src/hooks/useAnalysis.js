import { useState } from "react";
import { uploadImage, analyzeImage } from "../services/api";

export default function useAnalysis() {
  const [file, setFile] = useState(null);
  const [imageId, setImageId] = useState(null);
  const [result, setResult] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);

  // 🔥 NEW: file metadata state
  const [fileMeta, setFileMeta] = useState(null);

  // ✅ Upload function (UPDATED)
const upload = async () => {
  if (!file) return;

  setUploading(true);

  try {
  const data = await uploadImage(file);

  setImageId(data.image_id);

  // 🔥 THIS IS THE MISSING LINE
  setFileMeta(data);

    return data;

  } catch (err) {
    console.error("Upload error:", err);
  } finally {
    setUploading(false);   // ✅ ALWAYS RUNS
  }
};

  // ✅ Analyze function (same)
const analyze = async () => {
  if (!imageId) return;

  setAnalyzing(true);

  try {
    const data = await analyzeImage(imageId);
    setResult(data);
  } catch (err) {
    console.error("Analyze error:", err);
  } finally {
    setAnalyzing(false);   // ✅ ALWAYS RUNS
  }
};

return {
  setFile,
  upload,
  analyze,
  result,
  uploading,
  analyzing,
  imageId,
  fileMeta
};
}