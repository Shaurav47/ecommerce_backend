import React from 'react'

export default function SearchItem({ data }) {
  return (
    <div>


      {data && data.meals?.map((meal) => {
        return <div key={meal.idMeal} className='space-y-5'>
          <h1>{meal.strMeal}</h1>

          <iframe width="420" height="315"
            src={`https://www.youtube.com/embed/${meal.strYoutube.split('=')[1]}`}>
          </iframe>

          <div className='flex gap-10'>
            <div>

              {Object.keys(meal).map((ing) => {
                if (ing?.startsWith('strIngredient') && meal[ing]?.trim().length > 0) {
                  return <h1 key={ing}>{meal[ing]}</h1>
                }

              })}

            </div>

            <div>

              {Object.keys(meal).map((measure) => {
                if (measure?.startsWith('strMeasure') && meal[measure]?.trim().length > 0) {
                  return <h1 key={measure}>{meal[measure]}</h1>
                }

              })}

            </div>


            <div>
              <img className='h-[300px] w-[400px]' src={meal.strMealThumb} alt="" />
            </div>



          </div>


        </div>
      })}

    </div>
  )
}
