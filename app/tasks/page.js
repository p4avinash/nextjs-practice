import React from "react"
import TaskForm from "@/components/TaskForm"
import TaskList from "@/components/TaskList"

const TasksPage = () => {
  return (
    <div className='max-w-lg'>
      <h1 className='text-7xl mb-8'>Tasks Page</h1>
      <TaskForm />
      <TaskList />
    </div>
  )
}

export default TasksPage
