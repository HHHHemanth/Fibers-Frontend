const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "${BASE_URL}";
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
  const res = await fetch(`${BASE_URL}/analyze/${imageId}`, {
    method: "GET",
  });

  return res.json();
}