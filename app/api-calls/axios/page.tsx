'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const baseURL = "https://jsonplaceholder.typicode.com/posts"

const FetchDataWithAxios = () => {

  const [post, setPost] = useState()
  const [newTitle, setNewTitle] = useState("")
  const [newBody, setNewBody] = useState("")

  useEffect(() => {
    
    axios.get(`${baseURL}/2`)
      .then(res => setPost(res.data))

  }, [])

  const handleSubmit = () => {
    axios.post(baseURL, {
      title: newTitle,
      body: newBody
    })
      .then(res => {
        setPost(res.data)
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }

  if (!post) {
    return null
  }
  const {title, body} =post
  
  return (
    <div className='w-full h-full p-8 flex flex-col justify-start items-center gap-16'>
      <h1 className='font-bold text-2xl'>Get Data With Axios</h1>
      <div className='flex flex-col'>
        <h2 className='font-bold'>{title}</h2>
        <p>{body}</p>
      </div>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <input type="text" className='border border-slate-600 rounded-sm p-2 outline-sky-500' placeholder='Input a new title' onChange={(e) => setNewTitle(e.target.value)} />
        <textarea className='border border-slate-600 rounded-sm p-2 outline-sky-500' placeholder='Input a new body' onChange={(e) => setNewBody(e.target.value)} />
        <button type='submit' className='bg-sky-500 text-white p-2 rounded-sm'>Submit</button>
      </form>
    </div>
  )
}

export default FetchDataWithAxios
