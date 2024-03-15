import React from 'react';
import RiotImage from '../assets/Riot.jpg';
import ProfileImage from '../assets/Profile.jpg'; // Assuming you have a profile picture

function Name() {
  return (
    <div className="relative bg-cover bg-center h-max lg:bg-cover min-h-96" style={{ backgroundImage: `url(${RiotImage})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className='absolute inset-0 flex flex-col justify-center items-center'>
        <div className="h-48 w-48 overflow-hidden rounded-full border-4 border-white mb-4">
          <img src={ProfileImage} alt="Profile" className="object-cover h-full w-full" />
        </div>
        <p className="text-white font-serif font-bold text-4xl lg:text-6xl">Arun Singh</p>
        <p className='text-white font-serif font-semibold text-2xl mt-10'>From Headlines to Bylines: Master the Craft of Journalism</p>
      </div>
    </div>
  );
}

export default Name;
