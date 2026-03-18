import axios from "axios";

const AUTH_API = "/api/auth";

const login = async (userCredentials) => {
  const response = await axios.post(AUTH_API, userCredentials);
  return response.data;
};

export default { login };
