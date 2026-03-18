import axios from "axios";

const TODO_API_URL = "/api/todos";

const getTodos = async () => {
  const response = await axios.get(TODO_API_URL);
  return response.data;
};

export default { getTodos };
