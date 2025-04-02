
import { useParams } from 'react-router'
import { useApiHooks } from '../../hooks/apiHooks';

export default function ItemDetail() {
  const { id } = useParams();

  const [load, data, err] = useApiHooks('https://www.themealdb.com/api/json/v1/1/lookup.php', {
    i: id
  })


  if (load) {
    return <h1>Loading....</h1>
  }

  if (err) {
    return <h1>{err}</h1>
  }


  // const ingre = {
  //   strImageSource: null,
  //   strIngredient1: "Beef",
  //   strIngredient10: "Egg Yolks",
  //   strIngredient11: "Puff Pastry",
  //   strIngredient12: "Green Beans",
  //   strIngredient13: "Butter",
  //   strIngredient16: "",
  //   strIngredient17: "",
  //   strIngredient18: "",
  //   strIngredient19: "",
  //   strIngredient2: "Plain Flour",
  //   idMeal: '2456',
  //   label: "lios"
  // };



  return (
    <div className='p-5'>

      {/* {Object.keys(ingre).map((ing) => {
        if (ing.startsWith('strIngredient') && ingre[ing].trim().length > 0) {
          return <h1>{ingre[ing]}</h1>
        }

      })} */}




      {data && data.meals.map((meal) => {
        return <div key={meal.idMeal} className='space-y-5'>
          <h1>{meal.strMeal}</h1>

          <iframe width="420" height="315"
            src={`https://www.youtube.com/embed/${meal.strYoutube.split('=')[1]}`}>
          </iframe>

          <div className='flex gap-10'>
            <div>

              {Object.keys(meal).map((ing) => {
                if (ing.startsWith('strIngredient') && meal[ing].trim().length > 0) {
                  return <h1 key={ing}>{meal[ing]}</h1>
                }

              })}

            </div>

            <div>

              {Object.keys(meal).map((measure) => {
                if (measure.startsWith('strMeasure') && meal[measure].trim().length > 0) {
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
