import React from "react"
import DeleteForm from "./DeleteForm"
import Link from "next/link"
import { getAllTasks } from "@/utils/action"

const TaskListCustom = async () => {
  const allTasks = await getAllTasks()

  if (allTasks.length === 0) {
    return <h2 className='mt-8 font-medium text-lg'>No Tasks to Show...</h2>
  }

  return (
    <ul className='mt-8'>
      {allTasks.map((task) => {
        return (
          <li
            className='flex justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lg shadow-lg'
            key={task.id}
          >
            <h2
              className={`text-lg capitalize ${
                task.completed ? "line-through" : null
              }`}
            >
              {task.content}
            </h2>
            <div className='flex gap-6 items-center'>
              <Link
                href={`/tasks/${task.id}`}
                className='btn btn-accent btn-xs'
              >
                Edit
              </Link>
              <DeleteForm id={task.id} />
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default TaskListCustom
