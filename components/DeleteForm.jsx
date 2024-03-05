"use client"
import React, { useEffect } from "react"
import { deleteTask } from "@/utils/action"
import { useFormStatus, useFormState } from "react-dom"
import toast from "react-hot-toast"

const SubmitBtn = () => {
  const { pending } = useFormStatus()
  return (
    <button className='btn btn-error btn-xs' disabled={pending}>
      {pending ? "Deleting" : "Delete"}
    </button>
  )
}

const initialState = {
  message: null,
}

const DeleteForm = ({ id }) => {
  const [state, formAction] = useFormState(deleteTask, initialState)

  useEffect(() => {
    if (state.message === "Success") {
      toast.success("Task Deleted")
      return
    }

    if (state.message) {
      toast.error(state.message)
      return
    }
  }, [state])

  return (
    <form action={formAction}>
      <input type='hidden' name='delete-btn' value={id} />
      <SubmitBtn />
    </form>
  )
}

export default DeleteForm
