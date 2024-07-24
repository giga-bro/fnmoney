//ts-nocheck
import React, { useState, useEffect } from 'react'
import './index.css'
import Swal from 'sweetalert2'
import axios from 'axios'

const Main: React.FC = () => {

    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [tasks, setTasks] = useState<any[]>([])
    const getTasks = async () => {
        try {
            const res = await axios.get('https://fnmoney-backend.vercel.app/api/tasks', { headers: { 'x-access-token': localStorage.getItem('token') || '', userId: localStorage.getItem('userId') } })
            console.log(res.data)
            setTasks(res.data)

        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getTasks()
    }, [])

    const addTask = async () => {
        try {
            const res = await fetch('https://fnmoney-backend.vercel.app/api/tasks', { method: 'POST', headers: { 'Content-Type': 'application/json', 'x-access-token': localStorage.getItem('token') || '' }, body: JSON.stringify({ title, description , userId:localStorage.getItem('userId') }) })

            if (res.status === 201) {
                Swal.fire({
                    icon: 'success',
                    title: 'Task Added',
                    text: 'Task Added Successfully'
                })
                setTitle('')
                setDescription('')
                getTasks()
            } else if (res.status === 500) {
                Swal.fire({
                    icon: 'error',
                    title: 'Server Error',
                    text: 'Please try again later'
                })
                setTitle('')
                setDescription('')
            }




        } catch (e) {
            console.log(e)
        }
    }

    const updateTask = async (id: string) => {
        Swal.fire({
            title: 'Update Task',
            html: `<input type="text" class="swal2-input" id="title" placeholder="Enter title" value="${title}" > <input type="text" class="swal2-input" id="description" placeholder="Enter description" value="${description}" >`,
            showCancelButton: true,
            confirmButtonText: 'Update',
            preConfirm:async () => {
                const title = (document.getElementById('title') as HTMLInputElement).value
                const description = (document.getElementById('description') as HTMLInputElement).value
                try {
                    const res = await fetch(`https://fnmoney-backend.vercel.app/api/tasks/${id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json', 'x-access-token': localStorage.getItem('token') || '' }, body: JSON.stringify({ title, description }) })
                    console.log(res)
                    if (res.status === 200) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Task Updated',
                            text: 'Task Updated Successfully'
                        })

                    } else if (res.status === 500) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Server Error',
                            text: 'Please try again later'
                        })
                    }

                    getTasks()

                } catch (e) {
                    console.log(e)
                
                }
            }
        })
        
    }

    const openDeleteTaskPopUp = async (id: string) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this task!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'

        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await fetch(`https://fnmoney-backend.vercel.app/api/tasks/${id}`, { method: 'DELETE', headers: { 'x-access-token': localStorage.getItem('token') || '' } })

                    if (res.status === 200) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Task Deleted',
                            text: 'Task Deleted Successfully'
                        })
                    } else if (res.status === 500) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Server Error',
                            text: 'Please try again later'
                        })
                    }

                    getTasks()

                } catch (e) {
                    console.log(e)
                }
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Cancelled',
                    'Your task is safe :)',
                    'error'
                )
            }
        })
    }

    return (
        <>
            <div className="w-[100vw] z-10 h-[90vh] bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center  " >
                <div className='  w-[90%] z-10 h-[65%] bg-[#171926] md:opacity-95 md:w-[40%] lg:w-[20%] lg:h-[60%] rounded-2xl ' >
                    <div className=' z-9 w-[100%] h-[60%]   text-wrap flex flex-col justify-center items-center ' >
                        <p className='text-wrap text-2xl text-center text-white font-bold w-[100%] lg:text-4xl  ' >Welcome To</p>
                        <p className='text-wrap text-4xl text-center text-white font-bold w-[100%] lg:text-6xl ' >FNAXIOM</p>
                        <p className='text-wrap text-3xl text-center text-white font-bold w-[100%] lg:text-5xl  ' >Full Stack</p>
                        <p className='text-wrap text-3xl text-center text-white font-bold w-[100%] lg:text-5xl ' >Intership</p>
                        <p className='text-wrap text-3xl text-center text-white font-bold w-[100%] lg:text-5xl ' >Assesment</p>
                    </div>
                    <div className='w-[100%] h-[40%] flex flex-col justify-between items-center  py-[5%] ' >
                        <input type="text" className='w-[80%] h-[25%] rounded-full my-[2%] text-center ' value={title} placeholder='Enter title' onChange={(e) => setTitle(e.target.value)} />
                        <input type="text" className='w-[80%] h-[25%] rounded-full mt-[2%] mb-[8%] text-center' value={description} placeholder='Enter description' onChange={(e) => setDescription(e.target.value)} />
                        <button className='text-white bg-[#d44230] rounded-full w-[80%] h-[40%] text-lg font-bold  ' onClick={addTask}  >Add Task</button>
                    </div>
                </div>

                <div className='w-[100%] h-[30%] bg-[#2c2f3d] mt-[2%] opacity-90 overflow-x-scroll flex justify-start items-center lg:justify-center lg:overflow-x-scroll lg:w-[100%]  ' >
                    {tasks && tasks.map((task, index) => (
                        <div className='w-40 min-w-40 bg-[#181c2a] h-[90%] mx-[2%] rounded-md flex flex-col justify-start items-center pb-[4%]  lg:w-[10%] lg:h-[90%] lg:pb-[1%] lg:mx-[1%] ' key={index} >
                            <p className='text-white font-bold text-xl text-center text-wrap lg:text-2xl lg:h-[20%] ' >{task.title}</p>
                            <p className='text-white font-thin text-xs text-center text-wrap mt-auto lg:text-md ' >{task.description.length > 20 ? task.description.slice(0, 20) + '...' : task.description}</p>
                            <button className='bg-[#719ff5] rounded-full font-bold w-[80%] mt-auto h-[20%] text-white text-center flex justify-center items-center' onClick={() => updateTask(task._id)} >Update</button>
                            <button className='bg-[#f8463a] rounded-full font-bold w-[80%] mt-auto h-[20%] text-white text-center flex justify-center items-center' onClick={() => openDeleteTaskPopUp(task._id)} >Delete</button>
                        </div>
                    ))}

                    
                </div>


            </div>

        </>
    )
}

export default Main
