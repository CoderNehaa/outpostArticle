import React from 'react';

const FeatureCard = ({obj}) => {
  return (
    <div className='w-[500px] mr-10 px-8 py-6 my-5 border-2 text-lg text-justify text-slate-500'>
      <div className='w-full flex justify-between items-center'>
        <h1 className='text-black font-semibold text-xl lg:text-xl'> {obj.heading} </h1>
      </div>

      <div className='py-4 tracking-wide'> {obj.review} </div>
      
      <div className='flex items-center'>
        <img src='https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884_640.png' className='h-[40px]' />
        <img src='https://img.freepik.com/photos-premium/logo-circulaire-tourbillonnant-design-plat-couleur-degradee-design-tres-simple-fond-solide_1020867-29254.jpg' className='h-[40px]' />
        <img src='https://i.pinimg.com/1200x/1b/9d/51/1b9d51c705f3238a6ad4117aa5f977bb.jpg' className='h-[40px]' />
        <img src='https://5.imimg.com/data5/BG/PX/FP/SELLER-12064222/logo-design-500x500.jpg' className='h-[40px]' />
        <span className='p-4'> +20 More </span>  
      </div>

      <div className='flex justify-between items-center font-semibold pt-4'>
        <span> <i className="fa fa-user-circle"></i> {obj.name} </span>
        <span> <i className="fa fa-eye"></i> {obj.views} </span>
      </div>
    </div>
  )
}

export default FeatureCard;
