const BASE_URL = "http://127.0.0.1:8000";

export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${BASE_URL}/upload`, {
    method: "POST",
    body: formData,
  });

  const data = await res.json();   // 🔥 IMPORTANT

  return data;                     // ✅ return actual data
};

export async function analyzeImage(imageId) {
  const res = await fetch(`http://127.0.0.1:8000/analyze/${imageId}`, {
    method: "GET",
  });

  return res.json();
}