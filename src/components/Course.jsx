import React from 'react';
import PriceCard from './PriceCard';
import Police from '../assets/Police.jpg'; 

function Course() {
  return (
    <div className='relative flex flex-col bg-gray-300 justify-center items-center'>
      <div className='mt-2 p-10'>
        <p className='text-3xl font-mono font-bold'>Courses</p>
      </div>
      <div className='flex flex-row justify-evenly p-10'>
        <div className="w-1/2 ml-24"> 
          <PriceCard/> 
        </div>
        <div className="w-1/2 py-6">
          <span className="text-sm sm:text-base font-mono text-justify mr-24">His courses delve deep into the fundamentals of journalism, covering everything from investigative reporting to multimedia storytelling. Through engaging lectures, practical assignments, and real-world case studies, students gain not only theoretical knowledge but also the practical skills necessary to thrive in today's rapidly evolving media landscape.</span>
          <br />
          <span className="text-sm sm:text-base font-mono text-justify mr-24">
          Through engaging lectures, practical assignments, and real-world case studies, Mr. Arun guides you on a journey to master the craft of journalism in the digital age. Whether you're a budding journalist or a seasoned professional seeking to sharpen your skills, Mr. Arun's courses offer invaluable insights, expert guidance, and hands-on experience to propel your career forward. Join us and embark on a path towards becoming a skilled and ethical storyteller in today's rapidly evolving media landscape.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Course;
