import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react';


export default function Home() {

  const [data, setData] = useState();
  const [load, setLoad] = useState(false);



  const getData = async () => {
    setLoad(true); /// calll
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php'); //call
      setData((prev) => response.data);
      setLoad(false);
    } catch (err) {
      setLoad(false);
      console.log(err);

    }

  }

  useEffect(() => {
    getData();

  }, []);



  if (load) {
    return <h1>Loading......</h1>
  }




  return (
    <div>


      <h1>Meals Caategory</h1>

      {data && data.categories?.map((cata) => {
        return <div key={cata.idCategory}>
          <h1>{cata.strCategory}</h1>
          <img src={cata.strCategoryThumb} alt="" />
          <p>{cata.strCategoryDescription}</p>

        </div>
      })}



    </div>
  )
}
