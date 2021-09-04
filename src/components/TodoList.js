import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { completeTodo } from "../actions/";

function TodoList() {
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  return (
    <div>
      <ul>
        {todo.map((d) => {
          if (!d.completed) {
            return (
              <li className="d-flex justify-content-between mt-3" key={d.id}>
                {d.title}
                <i
                  onClick={() => dispatch(completeTodo(d.id))}
                  className="fas fa-check mr-2"
                  style={{ color: "green", cursor: "pointer" }}
                ></i>
              </li>
            );
          }
          return true;
        })}
      </ul>
    </div>
  );
}

export default TodoList;
