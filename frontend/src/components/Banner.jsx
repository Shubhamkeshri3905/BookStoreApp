import React from 'react'
import banner from "../assets/Banner.png"
const Banner = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 dark:bg-slate-900 dark:text-white'>
        <div className='md:w-1/2 w-full md:mt-32 mt-12 order-2 md:order-1'> 
        <div className='space-y-12 '>
        <h1 className='text-4xl font-bold '>Hello , welcomes here to learn something <span className='text-pink-500'>new everyday!!</span></h1>
        <p>Welcome to our book lover's paradise! Explore a curated collection of timeless classics, thrilling mysteries, captivating romance, and thought-provoking non-fiction. Discover new releases and old favorites across various genres. Whether you're seeking a gripping page-turner or a deep dive into history, our bookshelves have something for everyone. Browse our handpicked selections, find inspiration for your next read, and get lost in the world of words. With convenient browsing and secure checkout, indulge your passion for reading
             and uncover literary treasures that ignite your imagination. Start your next literary adventure with us today!</p>
             <label className="input input-bordered flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
<button className="btn btn-secondary">Get Started</button>
        </div>
        </div>
        <div className='order-1 md:w-1/2 w-full flex items-center justify-center mt-10'>
            <img src={banner} alt="" className='w-92 h-92' />
        </div>
    </div>
  )
}

export default Banner