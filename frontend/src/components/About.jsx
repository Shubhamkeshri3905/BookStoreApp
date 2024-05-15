import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const About = () => {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 m-28 dark:bg-slate-900 dark:text-white flex flex-col items-center justify-center '>
        <Navbar/>
        <div  className='flex items-center justify-center text-xl  shadow-md shadow-pink-500 p-5 m-10'>
            
        Welcome to Bookworms Bookstore, your go-to destination for all things books in Kolkata! Established with a passion for literature and a commitment to serving avid readers, we offer a curated collection of books spanning diverse genres. Whether you're seeking bestsellers, classic novels, or niche titles, we strive to cater to every reading preference.

At Bookworms Bookstore, our mission is to foster a love for reading and provide a welcoming space for book enthusiasts to explore new literary adventures. Our knowledgeable staff is dedicated to assisting you in discovering your next favorite book. We also host book clubs, author events, and community activities to engage and connect with fellow book lovers.

Explore our cozy store located in the heart of Kolkata, where every shelf holds a story waiting to be discovered. Visit us today and embark on a journey through the captivating world of books!
        </div>


    </div>
        <Footer/>
    </>
  )
}

export default About