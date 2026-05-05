const BASE_URL = "https://api.freeapi.app/api/v1/public";

export const fetchUsers = async () => {
  const res = await fetch(`${BASE_URL}/randomusers`);
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
};