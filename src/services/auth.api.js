const BASE_URL = "https://api.freeapi.app/api/v1/users";

export const registerUser = async (data) => {
  const res = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const loginUser = async (data) => {
  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const getCurrentUser = async () => {
  const res = await fetch(`${BASE_URL}/current-user`, {
    method: "GET",
  });
  return res.json();
};

export const logoutUser = async () => {
  const res = await fetch(`${BASE_URL}/logout`, {
    method: "POST",
  });
  return res.json();
};