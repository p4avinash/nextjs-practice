"use client"
import React from "react"

const Error = (error) => {
  console.log(error)
  // return <div>There was an error...</div>
  return <div>{error.error.message}</div>
}

export default Error
