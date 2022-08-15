import { useSelector, useDispatch } from "react-redux";
import { BsFillTrashFill, BsFileArrowUpFill } from "react-icons/bs";
import { deleteTask } from "../features/task/taskSlice";

const taskList = () => {
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.tasks);
  console.log(tasks);

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <p>{task.completed ? "completed" : "incompleted"}</p>
          <button onClick={() => handleDelete(task.id)}>
            <BsFillTrashFill /> Delete
          </button>
          <button><BsFileArrowUpFill/> Update</button>
        </div>
      ))}
    </div>
  );
};

export default taskList;
