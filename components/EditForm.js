import { editTask } from "@/utils/action"
import React from "react"

const EditForm = ({ task }) => {
  const { id, completed, content } = task
  return (
    <form
      action={editTask}
      className='max-w-sm p-12 border border-base-300 rounded-lg'
    >
      <input type='hidden' name='id' value={id} />
      {/* content */}
      <input
        type='text'
        required
        defaultValue={content}
        name='contentField'
        className='input input-bordered w-full'
      />
      {/* completed */}
      <div className='form-control my-4'>
        <label htmlFor='completed' className='label cursor-pointer'>
          <span className='label-text'>completed</span>
          <input
            type='checkbox'
            defaultChecked={completed}
            id='completed'
            name='completed'
            className='checkbox checkbox-primary checkbox-sm'
          />
        </label>
      </div>
      <button className='btn btn-primary btn-block btn-sm' type='submit'>
        edit
      </button>
    </form>
  )
}

export default EditForm
