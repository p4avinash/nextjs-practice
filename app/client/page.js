"use client"
import React, { useState } from "react"

const ClientPage = () => {
  const [counter, setCounter] = useState(0)
  console.log("client component")
  return (
    <div className=''>
      <h1 className='text-7xl my-8'>{counter}</h1>
      <button
        className='btn btn-primary'
        onClick={() => setCounter(counter + 1)}
      >
        Increment
      </button>
    </div>
  )
}

export default ClientPage
