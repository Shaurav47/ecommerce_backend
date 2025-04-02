import { Formik } from 'formik'
import React from 'react'

export default function Home() {


  console.log('render');
  return (
    <div className='p-4'>

      <Formik
        initialValues={{
          username: ''
        }}
        onSubmit={(val) => {
          console.log(val);

        }}
      >


        {({ handleChange, handleSubmit, values, touched }) => {

          return <form onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              value={values.username}
              className='border-2'
              placeholder='username'
              type="text"
              name='username' />

            <button type='submit'>Submit</button>

          </form>
        }

        }
      </Formik>


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
//   const [serach, setSearch] = useState(null);

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

//     <div className='grid grid-cols-4 gap-5 p-5'>

//       {data && data.categories.map((cata) => {
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
