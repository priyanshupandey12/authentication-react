const BASE_URL = "https://api.freeapi.app/api/v1/public";

export const fetchJokes = async () => {
  const res = await fetch(`${BASE_URL}/randomjokes`);
  if (!res.ok) throw new Error("Failed to fetch jokes");
  return res.json();
};