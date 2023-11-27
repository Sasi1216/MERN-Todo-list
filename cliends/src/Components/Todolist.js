import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faPenToSquare,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "./todolist.css";
import axios from "axios";
import React from "react";

const Todolist = (props) => {
  const todolist = props.todolist.map((task, index) => {
    const taskComplete = (task) => {
      axios
        .put(`http://127.0.0.1:7000/api/tasks/${task._id}`, {
          _id: task._id,
          todo: task.todo,
          iscomplete: !task.iscomplete,
        })
        .then((res) => props.taskComplete(res.data))
        .catch((err) => console.log(err));
    };
    const removeTask = (id) => {
      axios
        .delete(`http://127.0.0.1:7000/api/tasks/${id}`)
        .then((res) => props.removeTask(res.data))
        .catch((err) => console.log(err));
    };
    return (
      <li key={index}>
        <div style={{ display: "flex" }}>
          <FontAwesomeIcon
            icon={faCheck}
            className={task.iscomplete ? "iscomplete" : "checkicon"}
          />
          <p
            className={task.iscomplete ? "taskcomplete" : ""}
            onClick={() => {
              taskComplete(task);
            }}
          >
            {task.todo}
          </p>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="edit"
            onClick={() => {
              props.tasktoUpdate(task);
              props.showpopup();
            }}
          />
          <FontAwesomeIcon
            icon={faXmark}
            className="close"
            onClick={() => {
              removeTask(task._id);
            }}
          />
        </div>
      </li>
    );
  });
  return (
    <div className="taskList">
      <ul>{todolist}</ul>
    </div>
  );
};

export default Todolist;
