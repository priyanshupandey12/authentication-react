const BASE_URL = "https://api.freeapi.app/api/v1/public/youtube";

export const fetchVideos = async () => {
  const res = await fetch(`${BASE_URL}/videos`);
  if (!res.ok) throw new Error("Failed to fetch videos");
  return res.json();
};