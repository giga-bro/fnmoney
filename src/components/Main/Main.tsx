import React from 'react'

const Main:React.FC = () => {
  return (
    <>
    <div className="w-[100vw] h-[90vh] bg-[url('background.jpg')] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center " >
        <div className='  w-[90%] h-[60%] bg-[#171926] md:opacity-95 md:w-[40%] lg:w-[20%] lg:h-[60%] rounded-2xl ' >
            <div className='w-[100%] h-[60%]   text-wrap flex flex-col justify-center items-center ' >
                <p className='text-wrap text-2xl text-center text-white font-bold w-[100%] lg:text-4xl  ' >Welcome To</p>
                <p className='text-wrap text-4xl text-center text-white font-bold w-[100%] lg:text-6xl ' >FNAXIOM</p>
                <p className='text-wrap text-3xl text-center text-white font-bold w-[100%] lg:text-5xl  ' >Full Stack</p>
                <p className='text-wrap text-3xl text-center text-white font-bold w-[100%] lg:text-5xl ' >Intership</p>
                <p className='text-wrap text-3xl text-center text-white font-bold w-[100%] lg:text-5xl ' >Assesment</p>
            </div>
            <div className='w-[100%] h-[40%] flex flex-col justify-between items-center  py-[5%] ' >
                <button className='text-white bg-[#94b2ed] rounded-lg w-[90%] h-[35%] text-lg font-bold  ' >Enroll HERE</button>
                <button className='text-white bg-[#d44230] rounded-full w-[90%] h-[40%] text-lg font-bold  ' >Get Started</button>
            </div>
        </div>

        <div className='w-[100%] h-[30%] bg-[#2c2f3d] mt-[2%] opacity-90 overflow-x-scroll flex justify-start items-center lg:justify-center lg:overflow-x-hidden lg:w-[100%]  ' >
            <div className='w-40 min-w-40 bg-[#181c2a] h-[90%] mx-[2%] rounded-md flex flex-col justify-start items-center pb-[4%]  lg:w-[10%] lg:h-[90%] lg:pb-[1%] lg:mx-[1%] ' >
                <p className='text-white font-bold text-xl text-center text-wrap lg:text-2xl lg:h-[20%] ' >Coding Challenge</p>
                <p className='text-white font-thin text-xs text-center text-wrap mt-auto lg:text-sm ' >Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                <button className='bg-[#f8463a] rounded-full font-bold w-[80%] mt-auto h-[20%] text-white text-center flex justify-center items-center' >Get Started</button>
            </div>
            <div className='w-40 min-w-40 bg-[#181c2a] h-[90%] mx-[2%] rounded-md flex flex-col justify-start items-center pb-[4%]  lg:w-[10%] lg:h-[90%] lg:pb-[1%]  lg:mx-[1%] ' >
                <p className='text-white font-bold text-xl text-center text-wrap lg:text-2xl lg:h-[20%]  ' >Coding Challenge</p>
                <p className='text-white font-thin text-xs text-center text-wrap  mt-auto' >Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                <button className='bg-[#f8463a] rounded-full font-bold w-[80%] mt-auto h-[20%] text-white flex justify-center items-center' >Get Started</button>
            </div>
            <div className='w-40 min-w-40 bg-[#181c2a] h-[90%] mx-[2%] rounded-md flex flex-col justify-start items-center pb-[4%]  lg:w-[10%] lg:h-[90%] lg:pb-[1%] lg:mx-[1%] ' >
                <p className='text-white font-bold text-xl text-center text-wrap  lg:text-2xl lg:h-[20%] ' >Project Submission</p>
                <p className='text-white font-thin text-xs text-center text-wrap  mt-auto' >Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                <button className='bg-[#719ff5] rounded-full font-bold w-[80%] mt-auto h-[20%] text-white flex justify-center items-center ' >Get Started</button>
            </div>
            <div className='w-40 min-w-40 bg-[#181c2a] h-[90%] mx-[2%] rounded-md flex flex-col justify-start items-center pb-[4%]  lg:w-[10%] lg:h-[90%] lg:pb-[1%] lg:mx-[1%] ' >
                <p className='text-white font-bold text-xl text-center text-wrap lg:text-2xl lg:h-[20%]  ' >Project Quiz</p>
                <p className='text-white font-thin text-xs text-center text-wrap  mt-auto' >Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                <button className='bg-[#719ff5] rounded-full font-bold w-[80%] mt-auto h-[20%] text-white flex justify-center items-center ' >Get Started</button>
            </div>
            <div className='w-40 min-w-40 bg-[#181c2a] h-[90%] mx-[2%] rounded-md flex flex-col justify-start items-center pb-[4%] lg:w-[10%] lg:h-[90%] lg:pb-[1%] lg:mx-[1%]  ' >
                <p className='text-white font-bold text-xl text-center text-wrap lg:text-2xl lg:h-[20%]  ' >Lode Assesment</p>
                <p className='text-white font-thin text-xs text-center text-wrap  mt-auto' >Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                <button className='bg-[#f8463a] rounded-full font-bold w-[80%] mt-auto h-[20%] text-white flex justify-center items-center' >Get Started</button>
            </div>
            <div className='w-40 min-w-40 bg-[#181c2a] h-[90%] mx-[2%] rounded-md flex flex-col justify-start items-center pb-[4%] lg:w-[10%] lg:h-[90%] lg:pb-[1%] lg:mx-[1%]  ' >
                <p className='text-white font-bold text-xl text-center text-wrap  lg:text-2xl lg:h-[20%] ' >Live Assesment</p>
                <p className='text-white font-thin text-xs text-center text-wrap  mt-auto' >Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                <button className='bg-[#719ff5] rounded-full font-bold w-[80%] mt-auto h-[20%] text-white flex justify-center items-center ' >Get Started</button>
            </div>
            <div className='w-40 min-w-40 bg-[#181c2a] h-[90%] mx-[2%] rounded-md flex flex-col justify-start items-center pb-[4%] lg:w-[10%] lg:h-[90%] lg:pb-[1%]  lg:mx-[1%] ' >
                <p className='text-white font-bold text-xl text-center text-wrap lg:text-2xl lg:h-[20%]  ' >Portfolio Assesment</p>
                <p className='text-white font-thin text-xs text-center text-wrap  mt-auto' >Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                <button className='bg-[#f8463a] rounded-full font-bold w-[80%] mt-auto h-[20%] text-white flex justify-center items-center ' >Get Started</button>
            </div>
        </div>


    </div>

    </>
  )
}

export default Main