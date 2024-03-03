import Link from "next/link"
import React from "react"
import Image from "next/image"

const DrinksList = ({ drinks }) => {
  // console.log("drinks --- ", drinks)
  return (
    <ul className='grid sm:grid-cols-2 gap-6 mt-6'>
      {drinks.map((drink) => {
        return (
          <li key={drink.idDrink}>
            <Link
              className='text-xl font-medium'
              href={`/drinks/${drink.idDrink}`}
            >
              {/* <img className='w-40' src={drink.strDrinkThumb} alt='drink' /> */}
              <div className='relative h-48 mb-4'>
                <Image
                  src={drink.strDrinkThumb}
                  fill
                  sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw'
                  alt={drink.strDrink}
                  className='rounded-md object-cover'
                />
              </div>
              {drink.strDrink}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default DrinksList
