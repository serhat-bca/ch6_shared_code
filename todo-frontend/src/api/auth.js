import axios from "axios";

const AUTH_API = "/api/auth";

const login = async (userCredentials) => {
  const response = await axios.post(AUTH_API, userCredentials);
  return response.data;
};

const fetchLoggedUser = async () => {
  const response = await axios.get(`${AUTH_API}/me`, {
    withCredentials: true,
  });

  return response.data;
};

const logout =

export default { login, fetchLoggedUser };
