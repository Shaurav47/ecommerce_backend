
import axios from 'axios'
import React, { useEffect, useState, useTransition } from 'react'

export default function Home() {

  const [data, setData] = useState();
  const [err, setError] = useState();


  const [pending, setTransition] = useTransition();

  const getTodos = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      setData(response.data);
    } catch (err) {
      setError(err.message);
    }
  }

  useEffect(() => {
    setTransition(getTodos);
  }, []);

  if (pending) {
    return <h1>Loading...</h1>
  }

  if (err) {
    return <h1>{err}</h1>
  }

  console.log(data);

  return (
    <div>

      {data && data.map((todo) => {
        return <div key={todo.id}>
          <h1>{todo.title}</h1>
        </div>
      })}

    </div>
  )
}



















// import axios from 'axios'
// import React, { useEffect } from 'react'
// import { useState } from 'react';
// import { useNavigate } from 'react-router';


// export default function Home() {

//   const nav = useNavigate();

//   const [data, setData] = useState();
//   const [load, setLoad] = useState(false);

//   const getData = async () => {
//     setLoad(true); /// calll
//     try {
//       const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php'); //call
//       setData((prev) => response.data);
//       setLoad(false);
//     } catch (err) {
//       setLoad(false);
//       console.log(err);

//     }

//   }

//   useEffect(() => {
//     getData();

//   }, []);



//   if (load) {
//     return <h1>Loading......</h1>
//   }




//   return (
//     <div>


//       <h1>Meals Caategory</h1>

//       {data && data.categories?.map((cata) => {
//         return <div
//           onClick={() => nav(`/category-items/${cata.strCategory}`)}
//           className='cursor-pointer'
//           key={cata.idCategory}
//         >


//           <h1>{cata.strCategory}</h1>
//           <img src={cata.strCategoryThumb} alt="" />
//           <p className='line-clamp-3'>{cata.strCategoryDescription}</p>

//         </div>
//       })}



//     </div>
//   )
// }
