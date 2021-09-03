import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";
function AddTodo() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const submitTodo = () => {
    dispatch(addTodo({ id: Date.now(), title: todo, completed: false }));
    setTodo("");
  };
  return (
    <div className="d-flex">
      <input
        type="text"
        value={todo}
        placeholder="Todo Title"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="ml-2 px-2" onClick={() => submitTodo()}>
        Add
      </button>
    </div>
  );
}

export default AddTodo;
