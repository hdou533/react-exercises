'use client'
import React, { useEffect, useState } from 'react'


const FetchDataWithFetchAPI = () => {

  const [url, setUrl] = useState('')

  useEffect(() => {
    
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(data => setUrl(data.message))

    
      
    
  }, [])

  return (
    <div className='w-full h-full p-8 flex flex-col justify-start items-center gap-16'>
      <h1 className='font-bold text-2xl'>Get Data With Fetch</h1>
      <div>
        <img src={url} alt="" />
      </div>
    </div>
  )
}

export default FetchDataWithFetchAPI
