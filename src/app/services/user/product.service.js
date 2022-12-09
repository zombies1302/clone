import api from "../../axios/api";
export const getProductsHome = async () => {
    try {
        const response = await api.get("/product/getProductsHome");
        return response.data;
    } catch (error) {
        throw new Error(err);
    }
    };