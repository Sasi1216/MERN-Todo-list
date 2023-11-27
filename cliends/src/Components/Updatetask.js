import "./updatetask.css";
import React, { useState } from "react";
import axios from "axios";
const Updatetask = (props) => {
  const [task, settask] = useState(props.task.todo);
  const Updatetask = () => {
    if (task.trim() === "" || props.task.todo === task) {
      props.removepopup();
    } else {
      axios
        .put(`http://127.0.0.1:7000/api/tasks/${props.task._id}`, {
          _id: props.task._id,
          todo: task,
          iscomplete: props.task.icomplete,
        })
        .then((res) => {
          props.removepopup();
          props.updatetask(res.data);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="popup">
      <div className="popup-content">
        <input
          type="text"
          placeholder="Update Task..."
          value={task}
          onChange={(e) => settask(e.target.value)}
        />
        <button onClick={() => Updatetask()}>Update</button>
      </div>
    </div>
  );
};

export default Updatetask;
