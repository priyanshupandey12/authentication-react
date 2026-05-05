const BASE_URL = "https://api.freeapi.app/api/v1/public";

export const fetchQuotes = async () => {
  const res = await fetch(`${BASE_URL}/quotes`);
  if (!res.ok) throw new Error("Failed to fetch quotes");
  return res.json();
};