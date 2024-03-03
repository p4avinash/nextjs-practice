import Link from "next/link"
import React from "react"
import Image from "next/image"
import drinkImage from "./drink.jpg"

const fetchDrinks = async (id) => {
  // console.log("image -- ", drinkImage)
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  )

  if (!response.ok) {
    throw new Error("Nahi mila drinks data")
  }

  const data = await response.json()
  return data
}

const SingleDrinksPage = async ({ params }) => {
  // console.log("params -- ", params.drinkId)
  const data = await fetchDrinks(params.drinkId)
  // console.log("single Drink Data -- ", data.drinks[0])
  return (
    <div>
      <Link href={"/drinks"} className='btn btn-primary mt-8 mb-12'>
        Back to Drinks
      </Link>
      <Image
        src={data?.drinks[0]?.strDrinkThumb}
        width={300}
        height={300}
        className='w-48 h-48 rounded-lg shadow-lg mb-4'
        alt='drink'
        priority
      />
      {/* <Image src={drinkImage} className='w-48 h-48 rounded-lg' alt='drink' /> */}
      {/* <img src={drinkImage.src} alt='drink' /> */}
      <h1 className='text-4xl mb-8'>{data?.drinks[0]?.strDrink}</h1>
    </div>
  )
}

export default SingleDrinksPage
