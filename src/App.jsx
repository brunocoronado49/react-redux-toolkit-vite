import { Fragment } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <div className="bg-zinc-900 h-screen text-white">
      <div className="flex items-center justify-center h-full">
        <BrowserRouter>
          <Fragment>
            <Routes>
              <Route path="/" element={<TaskList />} />
              <Route path="/create-task" element={<TaskForm />} />
              <Route path="/update-task/:id" element={<TaskForm />} />
            </Routes>
          </Fragment>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
