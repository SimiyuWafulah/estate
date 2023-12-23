import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
       setFormData({
        ...formData,
        [e.target.id] : e.target.value,
       })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch ('http://localhost:3000/api/auth/signup', {
      method: "POST",
      mode:"cors",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(formData)
    })
    const data = await res.json()
    console.log(formData)
  }

  return (
    <div className='p-3 max-w-lg mx-auto '>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form  onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          type='text'
          placeholder='username'
          id='username'
          className='border p-3  rounded-lg'
          onChange={handleChange}
        />
         <input
          type='email'
          placeholder='email'
          id='email'
          className='border p-3 rounded-lg'
          onChange={handleChange}
        />
         <input
          type='password'
          placeholder='password'
          id='password'
          className='border p-3 rounded-lg'
          onChange={handleChange}
        />
        <button className='p-3 rounded-lg bg-slate-700 text-white uppercase hover:opacity-95 disabled:opacity-80'>Sign Up</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Do you Have an Account?</p>
        <Link to='/signin'>
          <span className='text-blue-700'>Sign In</span>
        </Link>
      </div>
    </div>
  )
}
