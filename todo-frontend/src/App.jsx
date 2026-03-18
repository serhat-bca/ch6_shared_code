import { useState, useEffect } from "react";
import todoAPI from "./api/todos";
import authAPI from "./api/auth";
import TodoList from "./components/TodoList";
import Login from "./components/Login";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedUser, setLoggedUser] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      const data = await todoAPI.getTodos();
      setTodos(data);
    };

    fetchTodos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await authAPI.login({ username, password });
      setLoggedUser({ username: user.username, name: user.name });
    } catch (error) {
      console.log(error);
    }
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      {loggedUser ? (
        <p>Howdy, {loggedUser.name}</p>
      ) : (
        <Login
          handleSubmit={handleSubmit}
          username={username}
          password={password}
          setPassword={setPassword}
          setUsername={setUsername}
        />
      )}
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
