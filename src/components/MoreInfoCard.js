import React from 'react'

const MoreInfoCard = ({obj}) => {
  return (
    <div className='w-[500px] mr-10 my-5 px-8 py-5 border-2 text-lg text-justify text-slate-500'>
      <div className='w-full flex justify-between items-center'>
        <div className='flex'>
          <img src={obj.img} className='h-[60px]' />
          <div className='ml-4'> 
            <span className='block text-2xl text-black text-semibold'> {obj.name} </span>
            <span> {obj.company} . {obj.role} </span>  
          </div> 
        </div>
        <i className='fa-regular fa-bookmark'> </i>
      </div>

      <div className='p-4 tracking-wide'> {obj.review} </div>

      <div className='flex justify-between items-center'>
        <span className='border-2 px-3 py-1'><i className="fa-solid fa-award mr-1"></i> Free </span>
        <div>
          <span className='mr-4'> <i className="fa fa-eye"></i> {obj.views} </span>
          <span> <i className="fa-regular fa-bookmark"></i> {obj.save} </span>
          
        </div>
      </div>
    </div>
  )
}

export default MoreInfoCard;
