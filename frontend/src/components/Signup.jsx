import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link from react-router-dom
import Login from './Login';
import { useForm } from "react-hook-form" 
const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit= (data) => console.log(data)

  return (
    <>
      <div className='flex h-screen items-center justify-center'>
        <div className="w-[600px]">
          <div className="modal-box shadow-md shadow-pink-300 ">
            {/* Close button for modal */}
            <Link to={'/'} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            
            {/* Form for login */}
            <form  className='dialog' onSubmit={handleSubmit(onSubmit)}>
              <h3 className="font-bold text-lg">Signup</h3>
              <div className='mt-4 space-y-2'>
                <label htmlFor='name'>Name</label>
                <br/>
                <input type='text' placeholder='Enter Your Full Name ' className='w-80 px-3 py-1 border rounded-md'    {...register("name", { required: true })}/>
                <br/>
      {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
              </div>
              {/* Email input */}
              <div className='mt-4 space-y-2'>
                <label htmlFor='email'>Email</label>
                <br/>
                <input type='email' placeholder='Enter Your Email' className='w-80 px-3 py-1 border rounded-md'    {...register("email", { required: true })}/>
                <br/>
             {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
              </div>
              
              {/* Password input */}
              <div className='mt-4 space-y-2'>
                <label htmlFor='password'>Password</label>
                <br/>
                <input type='password' placeholder='Enter Your Password' className='w-80 px-3 py-1 border rounded-md'    {...register("password", { required: true })}/>
                <br/>
      {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
              </div>
              
              {/* Login button and signup link */}
              <div className='flex justify-around mt-4 '>
                <button type="submit" className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 cursor-pointer  }'>Signup</button>
                <p className='text-xl'>Having Account? {" "}
                    <button className='underline text-blue-500 cursor-pointer' onClick={()=>document.getElementById("my_modal_3").showModal()} >Login</button>
                    <Login/>
                    </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
