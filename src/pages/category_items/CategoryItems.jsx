import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'

export default function CategoryItems() {
  const { label } = useParams();

  const nav = useNavigate();

  const [data, setData] = useState();
  const [load, setLoad] = useState(false);

  const getData = async () => {
    setLoad(true);
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php', {
        params: {
          c: label
        }
      });
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

  console.log(data);

  return (
    <div>

      <h1>Items Page</h1>

    </div>
  )
}
