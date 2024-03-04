"use client"
import React, { useEffect } from "react"
import { useFormStatus, useFormState } from "react-dom"
import { createTaskCustom } from "@/utils/action"
import toast from "react-hot-toast"

const SubmitBtn = () => {
  const { pending } = useFormStatus()
  return (
    <button disabled={pending} className='btn btn-primary join-item'>
      {pending ? "Please wait..." : "Create Task"}
    </button>
  )
}

const initialState = {
  message: null,
}

const TaskForm = () => {
  const [state, formAction] = useFormState(createTaskCustom, initialState)

  useEffect(() => {
    if (state.message === "Success") {
      toast.success("Task Added")
      return
    }

    if (state.message) {
      toast.error(state.message)
      return
    }
  }, [state])

  return (
    <form action={formAction} className='p-4'>
      {/* <p className='mb-4'>{state.message}</p> */}
      <div className='join w-full'>
        <input
          type='text'
          className='input input-bordered join-item w-full'
          placeholder='type here'
          name='content-field'
          required
        />
        <SubmitBtn />
      </div>
    </form>
  )
}

export default TaskForm
