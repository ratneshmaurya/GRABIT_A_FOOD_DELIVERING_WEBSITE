import React from 'react';
import PizzaCard from './PizzaCard';

const PizzaList = () => {
  return (
  <div className='p-5 md:p-10 flex flex-col space-y-2'>

    {/*------------ heading ------------*/}
    <h1 className='text-center text-3xl md:text-4xl lg:text-5xl font-Nunito font-bold'>THE BEST <span className='text-red-500'>PIZZAAA'S</span> IN THE TOWN</h1>
    <p className='text-center font-bold font-Nunito text-xs md:text-sm lg:text-lg'>Have your favorite restaurant food delivered to your door with Grab-It. Whether you want to order breakfast, lunch, dinner, or a snack, Grab-It makes it easy to discover. Browse tons of food delivery options, place your order, and track it by the minute.</p>

    {/* -------------cards---------------- */}

    <hr className="border-black"/>

    <div className='mt-5 p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full space-y-4 md:space-x-4'>
        <PizzaCard/>
        <PizzaCard/>
    </div>
    
  </div>
  )
};

export default PizzaList;
