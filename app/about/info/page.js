import React from "react"
import Link from "next/link"

const AboutInfoPage = () => {
  return (
    <div className=''>
      <h1 className='text-7xl'>About Info Page</h1>
      <Link href={"/"} className='bg-cyan-600 text-white p-2 rounded-md'>
        Go to Home Page
      </Link>
    </div>
  )
}

export default AboutInfoPage
