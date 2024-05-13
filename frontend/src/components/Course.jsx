import React from 'react'
import list from "../../public/list.json"
import Cards from './Cards'
import {Link} from 'react-router-dom'
const Course = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4  dark:bg-slate-900 dark:text-white'>
      <div className='mt-28 items-center justify-center text-center'>

        <h1 className='text-2xl font-semibold md:text-4xl '>We're delighted to have you <span className='text-pink-500'>Here! :) </span> </h1>
        <p className='mt-12 '>Welcome to our bookstore's online course section, your 
                gateway to academic success! Explore our curated collection
                of textbooks and resources tailored to various courses and 
                disciplines. Whether you're studying mathematics, literature,
                  biology, or business, we have a comprehensive selection of 
                  required and recommended materials. Easily find the specific
                  books you need for your courses, with categorized listings
                    for each subject area. Discover everything from foundational
                    texts to cutting-edge research materials, all conveniently 
               organized to support your educational journey. Start browsing now to simplify 
          your course preparations and enhance your learning experience with our bookstore's diverse course offerings.</p>
        <Link to='/'>
        <button className='bg-pink-500 text-white px-4 py-2 mt-6 rounded-md hover:bg-pink-700 duration-300'>back</button>
        
        </Link> 
      </div>

      <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>

        {
        list.map((item)=>(
          <Cards key={item.id} item={item}/>
        ))
        }
      </div>
      
     </div>
  )
}

export default Course