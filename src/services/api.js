const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

export const uploadImage = async (file, cropData) => {

  const formData = new FormData();

  formData.append("file", file);

  // 🔥 ADD THESE
  formData.append("crop_x", cropData?.x || 0);
  formData.append("crop_y", cropData?.y || 0);
  formData.append("crop_width", cropData?.width || 100);
  formData.append("crop_height", cropData?.height || 100);
console.log("CROP DATA:", cropData);
console.log("X:", cropData?.x);
console.log("Y:", cropData?.y);
console.log("WIDTH:", cropData?.width);
console.log("HEIGHT:", cropData?.height);
  const res = await fetch(`${BASE_URL}/upload`, {
    method: "POST",
    body: formData,
  });

  const data = await res.json();

  return data;
};

export async function analyzeImage(imageId) {
  const res = await fetch(`${BASE_URL}/analyze/${imageId}`, {
    method: "GET",
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API Error: ${text}`);
  }

  return res.json();
}