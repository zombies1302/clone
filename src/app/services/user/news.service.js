import api from "../../axios/api";

export const getAllNews = async () => {
  try {
    const response = await api.get("news/getAllNewsByUser");
    if (response.status === 200 || response.status === 201) {
      return response;
    }
  } catch (err) {
    throw new Error(err);
  }
};