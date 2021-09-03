import React from "react";
import { useSelector } from "react-redux";

function Completed() {
  const todo = useSelector((state) => state.todo);
  return (
    <div className="completed">
      <h3
        style={{
          textAlign: "center",
          width: "100%",
          borderBottom: "2px solid rgb(228 220 220)",
        }}
      >
        Completed Tasks
      </h3>
      <ul>
        {todo.map((d) => {
          if (d.completed) {
            return (
              <li className="d-flex justify-content-between mt-3" key={d.id}>
                {d.title}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default Completed;
