import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <TaskForm />
      <TaskList />
    </div>
  )
}

export default App