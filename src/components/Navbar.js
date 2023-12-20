import React from 'react'

const Navbar = () => {
  return (
    <>
    <div id='navbar' className='w-full flex flex-wrap justify-around content-center py-4 bg-slate-100 border-b-2 text-lg'>
        <div className='flex justify-between px-4 min-w-full'>
            <div id='brandName' className='text-2xl tracking-wider font-semibold md:text-xl'> THE <span> <i className="fa-regular fa-circle-check ml-1 -mr-1 text-violet-900"></i> UTPOST </span> </div>
            <div id='icons'>
                <i className="fa fa-bookmark mx-3 text-lg" aria-hidden="true"></i>
                <i className="fa fa-user-circle mx-3 text-xl" aria-hidden="true"></i>
            </div>
        </div>
        <div id='navItems' className='font-medium pt-2 flex justify-evenly md:inline md:absolute md:left-1/3 md:p-0 2xl:left-[750px]'> 
            <span className='mx-3 lg:mr-10 hover:text-violet-900 hover:cursor-pointer'> AI tools </span>
            <span className='mx-3 lg:mr-10 hover:text-violet-900 hover:cursor-pointer'> Submit </span>
            <span className='mx-3 lg:mr-10 hover:text-violet-900 hover:cursor-pointer'> Newsletter </span>
            <span className='mx-3 lg:mr-10 hover:text-violet-900 hover:cursor-pointer'> About us </span>
        </div>
    </div>
    </>
  )
}

export default Navbar;

