"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, setTitle]=useState("")
  const [desc, setDesc]=useState("")
  const [mainTask, setMainTask]=useState([])
  const submitHandler=(e)=>{
       e.preventDefault()
       setMainTask([...mainTask, {title,desc}]);
       setTitle("")
       setDesc("")
  }

  
  let renderTask=<h2>No Todos Available</h2>

  // Delete the details
  const deleteHandler=(i)=>{
    let copyTask=[...mainTask]
    copyTask.splice(i,1)
    setMainTask(copyTask) 
  }
  // end here 

  if(mainTask.length>0){
    renderTask=mainTask.map((t,i)=>{
     return (
      <li key={i} className=''>
     <div className='flex justify-between'>
         <h5 className="text-xl font-semibold">{t.title}</h5>
         <h6 className="text-lg font-semibold">{t.desc}</h6>
         <button onClick={()=>{
          deleteHandler(i)
         }} className='bg-red-800 text-white p-2 my-2'>Delete</button>
     </div>
     </li>
     )
    }
    )
 }

  return (
    <>
    <h1 className='bg-black text-center text-2xl p-4 font-bold text-white'>My Todo's List</h1>

    <form className="m-4" onSubmit={submitHandler}>
      <input type='text' className='border-zinc-800 text-2xl m-2 p-2' placeholder='Enter Task Here' value={title} onChange={(e)=>{
        setTitle(e.target.value)
      }} />
      <input type='text' className='border-zinc-800 text-2xl m-2 p-2' placeholder='Enter Description Here' value={desc} onChange={(e)=>{
        setDesc(e.target.value)
      }}/>
      <button tyle="submit" className="bg-black text-2xl text-white p-2">Add Task</button>
    </form>
    <hr/>
    <div className='p-8 bg-green-100'>
    <ul>{renderTask}</ul>
      
    </div>
    </>
  )
}




export default page
