import React from 'react';

const About = () => {

  function handliClick(addId, removeID){
    let removeHighlight = document.getElementById(removeID);
    removeHighlight.classList.remove("border-b-4", "border-violet-900", "text-violet-900");

    let addHighlight = document.getElementById(addId);
    addHighlight.classList.add("border-b-4", "border-violet-900", "text-violet-900");
  }

  return (
    <>
      <div className='flex flex-col justify-between pt-10 md:flex-row'>
          <div className='flex items-center xl:justify-between'>
            <div> <img className='h-24 w-24 inline' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png"/> </div>
            <div className='pl-4 tracking-wide'>
              <div> 
                <span className='text-3xl font-semibold'> ChatGPT </span> 
                <span className='block text-xl font-medium text-slate-600'> by OpenAI </span></div>
                <span className='text-gray-700 mr-4 text-lg'> <i className="fa fa-heart" aria-hidden="true"></i> 700K likes </span>
                <span className='text-gray-700 text-lg'> <i className="fa fa-eye" aria-hidden="true"></i> 1.2M views </span>
            </div>
          </div>

        <div className='text-violet-900 font-medium py-4' id='btns'>
          <button className='px-3 py-1 m-3 border-2 xl:px-6 xl:py-3 xl:rounded-lg hover:bg-violet-900 hover:text-white hover:opacity-85'> <i className="fa-regular fa-bookmark mr-3"></i> Like </button>
          <button className='px-3 py-1 m-3 border-2 xl:px-6 xl:py-3 xl:rounded-lg hover:bg-violet-900 hover:text-white hover:opacity-85'> <i className="fa-solid fa-arrow-up-right-from-square mr-3"></i> Visit Site </button>
          <button className='px-3 py-1 border-2 xl:px-6 xl:py-3 xl:rounded-lg hover:bg-violet-900 hover:text-white hover:opacity-85'> <i className="fa-solid fa-share-nodes mr-3"></i> Share </button>  
        </div>
      </div>

      <div className='py-4 md:py-10 text-justify tracking-wide'>
        <div className='border-b-2 p-0'>
          <button className='mr-8 md:text-2xl pb-2' id='overview' onClick={() => handliClick('overview', 'aboutOpenAI')}> Overview </button>
          <button className='md:text-2xl pb-2' id='aboutOpenAI' onClick={() => handliClick('aboutOpenAI', 'overview')}> About Open AI </button>
        </div>
        <p className='p-4 md:text-xl text-slate-600'> OpenAI is an artificial intelligence research laboratory consisting of a team of world-class researchers and engineers focused on creating and advancing artificial intelligence in a safe and beneficial way for humanity. It was found in December 2015 by several high-profile individuals in the tech industry, including Elon Musk, Sam Altman, Greg Brockman, and others. </p>
        <p className='p-4 md:text-xl text-slate-600'> OpenAI is dedicated to advancing the field of artificial intelligence through research. </p>
      </div>  
    </>
  )
}

export default About;
