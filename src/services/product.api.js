const BASE_URL = "https://api.freeapi.app/api/v1/public";

export const fetchProducts = async () => {
  const res = await fetch(`${BASE_URL}/randomproducts`);
  if (!res.ok) throw new Error("Failed");
  return res.json();
};