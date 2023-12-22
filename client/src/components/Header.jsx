import React from 'react'
import {FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md '>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <h1 className='font-semibold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>E-</span>
            <span className='text-slate-700'>estate</span>
        </h1>
        <form className='bg-slate-100 p-3 flex items-center rounded-lg'>
            <input
                type='text'
                placeholder='Search...'
                className='focus:outline-none bg-transparent w-24 sm:w-64'
            />
            <FaSearch className='text-slate-700'/>
        </form>
        <ul className='flex  gap-4'>
          <Link to='/'>
            <li className='hidden sm:inline hover:underline opacity-95 text-slate-700'>Home</li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline hover:underline opacity-95 text-slate-700'>About</li>
          </Link>
          <Link to='/signin'>
            <li className='hover:underline opacity-95 text-slate-700'>Sign In</li>
          </Link>
        </ul>
        </div>
    </header>
  )
}
