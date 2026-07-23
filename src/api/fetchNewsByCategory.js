import api from "./axios";
export async function free_news_category(category) {
  try {
    const apiResponse = await api.get(`/section/free_news/${category}`);
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

export async function current_news_category(category) {
  try {
    const apiResponse = await api.get(`/section/current_news/${category}`);
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
