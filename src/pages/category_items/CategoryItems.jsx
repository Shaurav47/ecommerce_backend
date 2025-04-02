import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { Image, Shimmer } from 'react-shimmer';
import { useApiHooks } from '../../hooks/apiHooks';

export default function CategoryItems() {
  const { label } = useParams();

  const nav = useNavigate();
  const [load, data, err] = useApiHooks('https://www.themealdb.com/api/json/v1/1/filter.php', { c: label })



  if (load) {
    return <h1>Loading......</h1>
  }



  return (
    <div className='grid grid-cols-4 gap-5 p-5'>

      {data && data.meals.map((meal) => {
        return <div
          onClick={() => nav(`/item-detail/${meal.idMeal}`)}
          key={meal.idMeal} className='space-y-3 cursor-pointer'>
          <h1 className='font-bold text-xl'>{meal.strMeal}</h1>
          <Image src={meal.strMealThumb} alt=""
            fallback={<Shimmer width={250} height={300}
            />} />

        </div>
      })}



    </div>
  )
}
