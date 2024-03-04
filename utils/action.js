"use server"
import prisma from "@/utils/db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

//server action to get all the tasks
export const getAllTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  })
}

//server action to create task
export const createTask = async (formData) => {
  const contentField = formData.get("content-field")

  await prisma.task.create({
    data: {
      content: contentField,
    },
  })

  revalidatePath("/tasks")
}

//server action to delete a task
export const deleteTask = async (formData) => {
  const id = formData.get("delete-btn")

  await prisma.task.delete({
    where: {
      id: id,
    },
  })

  revalidatePath("/tasks")
}

//server action to update a task

export const getTask = async (id) => {
  return prisma.task.findUnique({
    where: {
      id: id,
    },
  })
}

export const editTask = async (formData) => {
  const id = formData.get("id")
  const content = formData.get("contentField")
  const completed = formData.get("completed")

  await prisma.task.update({
    where: {
      id: id,
    },
    data: {
      content: content,
      completed: completed === "on" ? true : false,
    },
  })

  redirect("/tasks")
}
