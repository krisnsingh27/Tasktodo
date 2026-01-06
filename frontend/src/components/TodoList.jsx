import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, toggleTodo, deleteTodo } from "../features/todo/todoSlice";

function TodoList() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {items.map((todo) => (
        <div key={todo._id}>
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
            onClick={() => dispatch(toggleTodo(todo))}
          >
            {todo.title}
          </span>

          <button onClick={() => dispatch(deleteTodo(todo._id))}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;





