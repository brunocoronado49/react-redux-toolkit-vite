import { useSelector } from "react-redux";

const taskList = () => {
  const tasks = useSelector((state) => state.tasks);
  console.log(tasks);

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <p>{task.completed ? "completed" : "incompleted"}</p>
        </div>
      ))}
    </div>
  );
};

export default taskList;
