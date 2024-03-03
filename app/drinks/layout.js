import React from "react"

const DrinksLayout = ({ children }) => {
  return (
    <div className='max-w-xl my-6'>
      <div className='mockup-code mb-8'>
        <pre data-prefix='$'>
          <code>npx create-next-app@latest avinash-learning-nextjs</code>
        </pre>
      </div>
      {children}
    </div>
  )
}

export default DrinksLayout
