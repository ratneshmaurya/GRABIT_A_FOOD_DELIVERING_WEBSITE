import React from 'react'

const UpperBanner = () => {
    return (
        <div>
           <div className='flex w-full relative bg-homebanner bg-center bg-cover h-screen-90  drop-shadow-lg items-center justify-center'>
                {/* making a div of hight 32 just for imaginary hidden container for gradient from back to white and to show on carousel  */}
                <div className=" absolute w-full h-20 bg-gradient-to-t from-gray-500 to-transparent bottom-0 z-10"/>
                <div className='absolute w-full bottom-20 pl-2 pr-2 text-center'>
                    <h1 className='text-white text-3xl md:text-4xl lg:text-5xl font-Nunito font-bold'>Order your favorites with Grab-It</h1>
                </div>                
           </div>
        </div>
    )
}

export default UpperBanner