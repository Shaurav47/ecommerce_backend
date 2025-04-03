import React from 'react'

export default function Category({ data }) {
  return (
    <div className='grid grid-cols-4 gap-5 p-5'>

      {data && data.categories.map((cata) => {
        return <div
          onClick={() => nav(`/category-items/${cata.strCategory}`)}
          className='cursor-pointer'
          key={cata.idCategory}
        >

          <h1>{cata.strCategory}</h1>
          <img src={cata.strCategoryThumb} alt="" />
          <p className='line-clamp-3'>{cata.strCategoryDescription}</p>

        </div>
      })}



    </div>
  )
}
