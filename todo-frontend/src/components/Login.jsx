const Login = ({
  handleSubmit,
  username,
  setUsername,
  password,
  setPassword,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <h3>Login</h3>
      username{" "}
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      password{" "}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
