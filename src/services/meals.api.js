const BASE_URL = "https://api.freeapi.app/api/v1/public";

export const fetchMeals = async () => {
  const res = await fetch(`${BASE_URL}/meals`);
  if (!res.ok) throw new Error("Failed to fetch meals");
  return res.json();
};