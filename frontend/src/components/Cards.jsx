import React from 'react'

const Cards = ({item}) => {
    //console.log(item);
  return (
   <>
   <div className='mt-4 my-3 p-3 '>
   <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-300 dark:bg-slate-900 dark:text-white dark:border  ">
  <figure><img src={item.image}alt="Books" /></figure>
  <div className="card-body">
    <h2 className="card-title">
     {item.name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline px-2 py-1 hover:bg-gray-200 hover:text-black duration-200 cursor-pointer">$ {item.price}</div> 
      <div className="badge px-2 py-1 badge-outline hover:bg-pink-500 hover:text-white duration-200 cursor-pointer">Buy now</div>
    </div>
  </div>
</div>
   </div>
   </>
  )
}

export default Cards