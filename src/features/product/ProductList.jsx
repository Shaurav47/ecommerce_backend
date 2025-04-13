import React from 'react'
import { useGetAllProductsQuery } from './productApi'


export default function ProductList() {

  const { isLoading, isFetching, refetch, error, data } = useGetAllProductsQuery();



  if (isLoading) {
    return <h1>Loading....</h1>
  }

  console.log(data);


  return (
    <div>




    </div>
  )
}
