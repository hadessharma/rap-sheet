import axios from "axios";

export const getAllConvicts = async () => {
  try {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    if (!backendUrl) {
      throw new Error(
        "BACKEND_URL is not defined in the environment variables."
      );
    }

    const res = await axios.get(`${backendUrl}/api/convicts`);
    console.log(res.data); // Logs the response data
    return res.data; // Return only the data, not the whole response object
  } catch (error) {
    console.error("Error fetching convicts:", error);
    throw error; // Re-throw the error so the caller can handle it
  }
};
