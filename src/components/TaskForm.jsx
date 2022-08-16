import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTask, updateTask } from "../features/task/taskSlice";
import { v4 } from "uuid";
import { BsFillCheckSquareFill } from "react-icons/bs";

const TaskForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const tasks = useSelector((state) => state.tasks);

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

    if (params.id) {
      dispatch(updateTask(task));
    } else {
      dispatch(
        addTask({
          id: v4(),
          ...task,
        })
      );
    }
    navigate("/");
  };

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((task) => task.id === params.id));
    }
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={task.title}
        onChange={handleChange}
      />
      <textarea
        name="description"
        cols="30"
        rows="5"
        placeholder="Description"
        value={task.description}
        onChange={handleChange}
      ></textarea>
      <button>
        <BsFillCheckSquareFill /> Save
      </button>
    </form>
  );
};

export default TaskForm;
