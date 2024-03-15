import React from 'react';
import Capitol from '../assets/Capitol.jpg';

function Card() {
  return (
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 font-mono">
      <a href="#">
        <img className="rounded-t-lg" src={Capitol} alt="" />
      </a>
      <div className="p-4">
        <a href="#">
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">New bill paves way for an uncertain future.</h5>
        </a>
        <p className="mb-2 text-sm font-normal text-gray-700 dark:text-gray-400">Will this decide the fate of America? Will the world's most powerful nation be able to control it's future?</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-xs font-medium text-center text-black bg-white rounded-lg hover:bg-black focus:ring-4 focus:outline-none focus:ring-slate-300 dark:bg-white dark:hover:bg-white dark:focus:ring-white">
          Read more
          <svg className="rtl:rotate-180 w-3 h-3 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Card;
