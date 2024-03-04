import React from "react"
import { deleteTask } from "@/utils/action"

const DeleteForm = ({ id }) => {
  return (
    <form action={deleteTask}>
      <input type='hidden' name='delete-btn' value={id} />
      <button className='btn btn-error btn-xs'>Delete</button>
    </form>
  )
}

export default DeleteForm
