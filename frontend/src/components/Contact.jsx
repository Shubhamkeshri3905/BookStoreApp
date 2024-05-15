import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import Footer from './Footer';
import Navbar from './Navbar';
const Contact = () => {
  return (
    <>
    <Navbar/>

    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white flex flex-col md:flex-row gap-10  m-28 items-center justify-between'>

        <div className='flex flex-col gap-y-2 items-center justify-center border border-pink-300 p-10'>
<p className='text-3xl font-bold text-white text-center '>
Bookworms Bookstore</p>
<p className='text-xl text-center'>123 ABC Street</p>
<p className='text-xl text-center'>Kolkata, West Bengal</p>
<p className='text-xl text-center'>India</p>
<p className='text-xl text-center'>Pin: 700001</p>

        </div>
        <div className='flex flex-col gap-y-2 items-center justify-center border-pink-300 shadow-md shadow-pink-500 p-10  '>
      

      <p className='text-xl'>Feel free to incorporate this summary into your project's "Contact Us" section or any other relevant area where you display location information for your bookstore's Kolkata office.</p>>
     <p className='font-bold text-white text-xl flex gap-3 '> <FaPhone  fontSize={30}/> Contact Us 965393090
      <IoMail  fontSize={30} /> Mail Us keshriShubham074@gmail.com
      <FaFacebook   fontSize={30} />
      <FaLinkedin  fontSize={30} />
      
      </p>


        </div>

    </div>
    <Footer/>
    </>
  )
}

export default Contact