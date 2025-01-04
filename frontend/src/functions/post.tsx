import axios from "axios";

export interface convictAttribute {
  name: string;
}
export const createConvict = async (
  payload: convictAttribute
): Promise<number> => {
  try {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const res = await axios.post(`${backendUrl}/api/convicts`, payload);
    return 1;
  } catch (error) {
    console.log(error);
    return 0;
  }
};
