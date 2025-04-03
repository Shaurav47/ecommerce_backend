import axios from 'axios';
import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import Category from './Category';
import SearchItem from './SearchItem';

export default function Home() {



  const [data, setData] = useState();
  const [load, setLoad] = useState(false);
  const [search, setSearch] = useState(null);


  const getData = async () => {
    setLoad(true);
    try {
      if (search) {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php', {
          params: {
            s: search
          }
        });
        setData((prev) => response.data);
      } else {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
        setData((prev) => response.data);
      }

      setLoad(false);
    } catch (err) {
      setLoad(false);
      console.log(err);
    }

  }
  useEffect(() => {
    getData();
  }, [search]);

  if (load) {
    return <h1>Loading....</h1>
  }


  return (
    <div className='p-5'>


      <Formik
        initialValues={{
          query: ''
        }}

        onSubmit={(val) => {
          setSearch(val.query);
        }}

      >


        {({ handleChange, handleSubmit, values }) => {

          return <form onSubmit={handleSubmit} className='space-y-2 flex gap-4 items-baseline'>
            <div>
              <input
                className='border-2 border-gray-500 px-2 w-[300px] py-1'
                value={values.query}
                onChange={handleChange}
                type="text" name='query'
                placeholder='search for meals'
              />
            </div>


            <button className='bg-black text-white text-sm px-5 py-2 rounded-sm' type='submit'>Submit</button>

          </form>
        }}


      </Formik>

      {search ? <SearchItem data={data} /> : <Category data={data} />
      }



    </div>
  )
}













