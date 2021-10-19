import axios from "axios";
import { apiUrl } from "./../../../../../constants";
export const handleLogout = async () => {
  try {
    await axios.get(apiUrl + "/auth/logout", {
      withCredentials: true,
    });
    localStorage.removeItem("firstLogin");
    window.location.href = "/";
  } catch (error) {
    window.location.href = "/";
  }
};
