import axios from "axios";
export const searchUnsplash = async (query, page) => {
  const params = new URLSearchParams({
    query: query,
    page: page,
    per_page: 9,
    client_id: "Bk8M5GWdY3UE6uy35b0zd-ETvIvxvdFBJzpps6SpVWM",
  });
  const url = `https://api.unsplash.com/search/photos/?${params.toString()}`;
  const response = await axios.get(url);
  return response;
};
