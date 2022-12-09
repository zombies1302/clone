import api from "../../axios/api";

export const getCombo = async () => {
  try {
    const response = await api.get("combo/getCombos");
    if (response.status === 200) {
      return response;
    }
  } catch (err) {
    throw new Error(err);
  }
};
