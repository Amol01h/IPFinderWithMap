import axios from 'axios';

export const FatchApi = async (ip = "") => {
  try {
    const response = await axios.get(`/api/${ip}`); // Now using proxy
    return response;
  } catch (error) {
    console.error("API Fetch Error:", error);
    return null;
  }
};
// 24.48.0.1
    // 51.75.78.152
    //192.168.1.245
    // 38.137.52.250