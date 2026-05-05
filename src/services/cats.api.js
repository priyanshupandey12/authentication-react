const BASE_URL = "https://api.freeapi.app/api/v1/public/cats/cat";

export const fetchRandomCat = async () => {
  const res = await fetch(`${BASE_URL}/random`);
  if (!res.ok) throw new Error("Failed to fetch cat");
  return res.json();
};