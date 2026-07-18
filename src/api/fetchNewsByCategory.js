import api from "./axios";
export default async function newsByCategory(category) {
  try {
    const apiResponse = await api.get(`/section/${category}`);
    return apiResponse.data;
  } catch (error) {
    const err = new Error("An error occured");
    if (error.response) {
      err.message =
        error?.response?.data?.message ||
        error?.message ||
        "Unable to reach server";
      err.status = error?.response?.status;
      throw err;
    } else {
      err.message = "Unable to reach server";
      err.status = 0;
      throw err;
    }
  }
}
