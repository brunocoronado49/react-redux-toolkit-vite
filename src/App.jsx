import { Fragment } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <div>
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
  );
};

export default App;
