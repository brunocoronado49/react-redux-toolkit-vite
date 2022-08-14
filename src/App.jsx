import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

const App = () => {
  const taskState = useSelector(state => state.tasks)
  console.log(taskState)

  return (
    <div>
      <h1>hello World</h1>
      <TaskForm />
      <TaskList />
    </div>
  )
}

export default App