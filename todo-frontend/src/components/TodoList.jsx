import Todo from "./Todo";
const TodoList = ({ todos }) => {
  return (
    <div>
      <h3>Todo List</h3>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            <Todo todo={t} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
