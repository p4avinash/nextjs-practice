import React from "react"
import { createTask } from "@/utils/action"

const TaskForm = () => {
  return (
    <form action={createTask} className='p-4'>
      <div className='join w-full'>
        <input
          type='text'
          className='input input-bordered join-item w-full'
          placeholder='type here'
          name='content-field'
          required
        />
        <button className='btn btn-primary join-item'>Create Task</button>
      </div>
    </form>
  )
}

export default TaskForm
