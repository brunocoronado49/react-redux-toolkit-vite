import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
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
    <div className="w-4/6">
      <header className="flex justify-between items-center">
        <h1>Task App: {tasks.length}</h1>
        <Link to="/create-task" className="bg-indigo-600 px-2 py-1 rounded-md">
          Create task
        </Link>
      </header>
      <div className="grid grid-cols-3 gap-4">
        {tasks.map((task) => (
          <div key={task.id} className="bg-neutral-800 p-4 rounded-md">
            <header className="flex justify-between">
              <h2>{task.title}</h2>
              <div className="flex gap-x-2">
                <Link
                  to={`/update-task/${task.id}`}
                  className="bg-zinc-600 px-2 py-1 rounded-md"
                >
                  Update
                </Link>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="bg-red-500 px-2 py-1 rounded-md"
                >
                  Delete
                </button>
              </div>
            </header>
            <p>{task.description}</p>
            <p>{task.completed ? "completed" : "incompleted"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default taskList;
