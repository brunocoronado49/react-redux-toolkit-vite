import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTask } from "../features/task/taskSlice";
import { v4 } from "uuid";
import { BsFillCheckSquareFill } from "react-icons/bs";

const TaskForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const handleChange = (event) => {
    setTask({
      ...task,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addTask({
        id: v4(),
        ...task,
      })
    );
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        onChange={handleChange}
      />
      <textarea
        name="description"
        cols="30"
        rows="5"
        placeholder="Description"
        onChange={handleChange}
      ></textarea>
      <button>
        <BsFillCheckSquareFill /> Save
      </button>
    </form>
  );
};

export default TaskForm;
