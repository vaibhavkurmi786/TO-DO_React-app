import React, { useState } from 'react'

const App = () => {

  const [Task, setTask] = useState("")
  const [Desc, setDesc] = useState("")
  const [mt, setMt] = useState([])

const submitHandler = (e)=>{
        e.preventDefault()
        setMt([...mt,{Task:Task,Desc:Desc}])
        console.log(mt);
        console.log(Task);
        console.log(Desc);
        setDesc('')
        setTask('')
}

const deleteHandler = (i)=>{

    let copytask = [...mt]
    copytask.splice(i,1)
    setMt(copytask)
}

let render = <h2 className='text-center'>No task Added</h2>
if(mt.length>0){
  render = mt.map((e,i)=>{
        return <li key={i} className='flex justify-between p-2'>
        <div>

          <h1>{e.Task}</h1>
          <h1>{e.Desc}</h1>
        </div>

        <button  onClick={()=>{deleteHandler(i)}} className='px-3 py-2 bg-lime-400 rounded-lg'>delete</button>
        </li>
  })
}





  return (
    <div className='w-screen h-screen bg-slate-400 flex items-center justify-start flex-col '>
    <h1 className='text-5xl text-center mt-5 font-semibold'>TO-DO Application</h1>
    <form onSubmit={submitHandler} className='w-1/2 flex items-center justify-center gap-10 mt-52 '>
      <input type='text' placeholder='Enter Task' value={Task} onChange={(e)=>{ setTask(e.target.value)}} className='border-2 rounded-xl text-center p-3 outline-none'/>
      <input type='desc' placeholder='Enter Description' value={Desc} onChange={(e)=>{ setDesc(e.target.value)}} className='text-center border-2 rounded-xl p-3 outline-none'/>
      <button className='bg-teal-300 p-3 rounded-xl text-center font-semibold'>Add Task</button>
    </form>
    <hr className='bg-red-900'/>
    <div className='w-1/2 bg-lime-200 mt-20  rounded-md'><ul>{render}</ul></div>
    </div>
  )
}

export default App