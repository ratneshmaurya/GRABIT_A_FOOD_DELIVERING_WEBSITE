import Image from 'next/image';
import React from 'react';

const PizzaCard = () => {
  return (
  <div className='p-4 m-2 flex flex-col hover:border hover:border-gray-300 w-full md:w-11/12 rounded-xl cursor-pointer hover:shadow-lg space-y-2'>

  <div className=''>
    <img src="https://images.unsplash.com/photo-1637217423028-25a89722c380?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80" alt="image" layout='fill' className='h-screen-60 rounded-xl  object-cover w-full'/>
  </div>

    <div className='flex justify-between'>
        <p>New York Pizza Factory</p>
        <p>4 ⭐</p>
    </div>
    <div className='flex justify-between'>
        <p>Pizza, Fast Food</p>
        <p>₹250 for one</p>
    </div>

    <hr />

    <div>
        
    </div>
    
  </div>
  )
};

export default PizzaCard;
