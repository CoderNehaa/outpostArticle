import React from 'react';

const Footer = () => {
  return (
    <div className = "p-10 mt-20 lg:p-20 bg-slate-200 min-w-full flex flex-col justify-evenly lg:flex-row">
      <div className='md:w-[480px] lg:w-[700px]'>
        <div id='brandName' className='text-2xl tracking-wider font-semibold md:text-xl'> THE <span> <i className="fa-regular fa-circle-check ml-1 -mr-1 text-violet-900"></i> UTPOST </span> </div>
        <div className='font-semibold text-lg py-4'> Your one-stop AI hub </div>
        <p className='text-lg tracking-wide'> The Outpost is a comprehensive collection of curated artificial intelligence software tools that cater to the needs of small business owners, bloggers, artists, musicians, entrepreneurs, marketers, writers and researchers. </p>
      </div>

        <div className='m-4 flex flex-col justify-center'>
          <span className='font-semibold my-4 text-lg'> The Outpost </span>
          <ul type="none">
            <li className='lg:my-3 hover:cursor-pointer'> About us </li>
            <li className='lg:my-3 hover:cursor-pointer'> Terms and conditions </li>
            <li className='lg:my-3 hover:cursor-pointer'> Privacy Policy </li>
            <li className='lg:my-3 hover:cursor-pointer'> Contact us </li>
          </ul>
        </div>

        <div className='mt-8 flex items-center md:flex-col md:flex-wrap'>
          <span className='text-lg font-bold mr-2'> Keep in touch </span>
          <div className='lg:py-2'>
            <i className="fa-brands fa-twitter p-2 bg-slate-400 rounded-2xl m-2 hover:cursor-pointer hover:bg-slate-100"></i>
            <i className="fa-brands fa-instagram p-2 bg-slate-400 rounded-2xl m-2 hover:cursor-pointer hover:bg-slate-100"></i>
            <i className="fa-brands fa-linkedin p-2 bg-slate-400 rounded-2xl m-2 hover:cursor-pointer hover:bg-slate-100"></i>
          </div>
        </div>

      </div>
    
  )
};

export default Footer
