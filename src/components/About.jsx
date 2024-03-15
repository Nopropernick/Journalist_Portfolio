import React from 'react';
import Card from './Card';

function About() {
  return (
    <div className='text-white flex flex-col bg-black font-mono'>
      <div className='flex flex-row justify-between mx-5 my-10 pt-32'>
        <div className='text-center font-bold text-3xl ml-80 hover:text-gray-400 cursor-pointer relative'>
          About
          <div className="absolute bottom-0 left-1/2 bg-gray-400 h-1 w-0 transition-all duration-700 origin-center hover:w-1/2"></div>
        </div>
        <div className='text-center font-bold text-3xl mr-80 hover:text-gray-400 cursor-pointer relative'>
          Works
          <div className="absolute bottom-0 right-1/2 bg-gray-400 h-1 w-0 transition-all duration-700 origin-center hover:w-1/2"></div>
        </div>
      </div>
      <div className='flex flex-row justify-between mx-5 my-5 ml-10'>
        <div className='flex flex-col justify-center items-center w-1/2'>
          <p className='text-lg font-light mx-5'>With a career spanning decades in the dynamic realm of journalism, Mr. Arun brings unparalleled expertise and insight to his online courses. As a retired journalist, his passion for storytelling and dedication to the craft remain as vibrant as ever. Having witnessed the evolution of media firsthand, Mr. Arun is uniquely positioned to offer invaluable lessons and guidance to aspiring journalists and communication enthusiasts alike.</p>
        </div>
        <div className='flex flex-col w-1/2'>
          <div className='p-10 pl-52'>
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
