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
  }, [params.id, tasks]);

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-zinc-800 max-w-sm p-5 rounded-md"
    >
      <label className="block font-bold">Task:</label>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={task.title}
        onChange={handleChange}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
      />
      <label className="block font-bold">Description:</label>
      <textarea
        name="description"
        cols="30"
        rows="5"
        placeholder="Description"
        value={task.description}
        onChange={handleChange}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
      ></textarea>
      <button className="bg-indigo-600 px-2 py-1 rounded-md block">Save</button>
    </form>
  );
};

export default TaskForm;
