import DrinksList from "@/components/DrinksList"
import React from "react"

const fetchDrinks = async () => {
  try {
    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
    )
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error("Drinks nahi mil paya yaar, sorry..!!")
  }
}

const DrinksPage = async () => {
  const data = await fetchDrinks()

  return (
    <div className=''>
      <DrinksList drinks={data.drinks} />
    </div>
  )
}

export default DrinksPage
