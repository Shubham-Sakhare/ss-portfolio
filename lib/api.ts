const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchAPI = async (endpoint: string) => {
  const res = await fetch(`${API_URL}${endpoint}`);

  if (!res.ok) {
    throw new Error("API error");
  }

  return res.json();
};