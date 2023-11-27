import "./addtask.css";
import axios from "axios";
import React, { useState } from "react";

const Addtask = (props) => {
  const [task, settask] = useState("");
  const Addtask = () => {
    if (task.trim() === "") {
      return;
    } else {
      axios
        .post("http://127.0.0.1:7000/api/tasks", {
          todo: task,
          iscomplete: false,
        })
        .then((res) => {
          settask("");
          props.addtask(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="addtask">
      <input
        type="text"
        placeholder="Addtask..."
        value={task}
        onChange={(e) => settask(e.target.value)}
      />
      <button onClick={() => Addtask()}>Add Task</button>
    </div>
  );
};

export default Addtask;
