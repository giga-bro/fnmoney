import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import './index.css';

const Navbar: React.FC = () => {
    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

    // Handler to toggle the mobile menu visibility
    const handleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    }
    return (
        <>
            <div className='w-[100vw] h-[10vh] bg-[#171926] flex justify-start items-center '>
                <div className='w-[70%] h-[100%]   flex justify-center items-center text-4xl text-white font-bold  md:w-[25%] lg:w-[20%]   ' >
                    <p>FNAXIOM</p>
                </div>
                <div className='nav-item hidden md:w-[20%] h-[100%] md:flex flex-col justify-center items-center cursor-pointer  lg:w-[10%]   '>
                    <p className='md:text-xl font-bold text-white lg:text-2xl'>Home</p>
                </div>
                <div className='nav-item hidden md:w-[20%] h-[100%] md:flex flex-col justify-center items-center cursor-pointer lg:w-[10%]   '>
                    <p className='md:text-xl font-bold text-white lg:text-2xl'>About</p>
                </div>
                <div className='nav-item hidden lg:w-[30%] h-[100%] md:hidden flex-col justify-center items-center cursor-pointer  lg:flex '>
                    <p className='md:text-xl font-bold text-white lg:text-3xl'>Full Intership Assesment</p>
                </div>
                <div className='nav-item hidden md:w-[20%] h-[100%] md:flex flex-col justify-center items-center cursor-pointer'>
                    <button className='border border-[#626e8c] rounded-full w-[80%] h-[60%] text-white flex justify-center items-center text-center font-semibold ' >
                        Heroes
                    </button>
                </div>
                <div className='nav-item hidden md:w-[20%] h-[100%] md:flex flex-col justify-center items-center cursor-pointer'>
                    <button className='bg-[#f8463a] rounded-full font-bold text:lg w-[90%] h-[60%] text-white flex justify-center items-center text-center ' >
                        Get Started
                    </button>
                </div>
                <div className='w-[30%] h-[100%]   flex justify-center items-center md:hidden ' >
                    <MenuIcon className="text-white w-[80%] h-[80%] cursor-pointer" onClick={handleMobileMenu} />
                </div>
            </div>
            <div className={`w-[50vw] h-[40vh] bg-[#171926] border border-white shadow-2xl  absolute flex flex-col text-white justify-start items-center right-0 z-100 rounded-bl-2xl md:hidden lg:hidden ${showMobileMenu ? 'animation-from-right' : 'hidden'}`}>
                {/* Mobile menu items */}
                <div className='w-[100%] flex-1 flex justify-start items-center'>
                    <HomeIcon className='!w-[30%] !h-[40%] text-[#fff] ml-[10%]' />
                    <p className='md:text-sm lg:text-lg'>Home</p>
                </div>
                <div className='w-[100%] flex-1 flex justify-start items-center'>
                    <InfoIcon className='!w-[30%] !h-[40%] text-[#fff] ml-[10%]' />
                    <p className='md:text-sm lg:text-lg'>About</p>
                </div>
                <div className='w-[100%] flex-1 flex justify-center items-center'>
                    <button className='border border-[#626e8c] rounded-full w-[80%] h-[60%] text-white ' >
                        Heroes
                    </button>
                </div>
                <div className='w-[100%] flex-1 flex justify-center items-center rounded-bl-2xl'>
                    <button className='bg-[#f8463a] rounded-full font-bold w-[80%] h-[60%] text-white ' >
                        Get Started
                    </button>
                </div>
            </div>
        </>
    )
}

export default Navbar
