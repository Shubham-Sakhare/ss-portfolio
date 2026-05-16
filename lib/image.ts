const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const getImageUrl = (url?: string) => {
  if (!url) return "";
  return `${BASE_URL}${url}`;
};