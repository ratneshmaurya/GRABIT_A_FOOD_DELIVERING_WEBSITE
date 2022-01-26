import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { IconButton } from '@mui/material';


const Footer = () => {
    return (
        <div className='p-10 md:p-20 bg-black mt-10 text-white'>

            <div className='mx-auto mb-4'>
                <h1 className='w-fit mx-auto text-2xl md:text-3xl hover:text-red-500 font-bold font-Nunito'>☺️THANKS FOR VISITING☺️</h1>
            </div>
            
            {/* ---------the upper section containing support and about section---------- */}
            <div className='flex flex-col md:flex-row md:justify-around font-Nunito mb-8 '>
                <div className='flex flex-col mt-2 mb-2 space-y-3'>
                    <h1 className='w-fit text-sm md:text-lg font-bold cursor-pointer hover:text-red-500'>FIND OUR RESTAURANTS</h1>
                    <h1 className='w-fit text-xs md:text-sm cursor-pointer'>DELHI</h1>
                    <h1 className='w-fit text-xs md:text-sm cursor-pointer'>MUMBAI</h1>
                    <h1 className='w-fit text-xs md:text-sm cursor-pointer'>UTTAR PRADESH</h1>
                    <h1 className='w-fit text-xs md:text-sm cursor-pointer'>CHENNAI</h1>
                    <h1 className='w-fit text-xs md:text-sm cursor-pointer'>RAJASTHAN</h1>
                </div>

                <hr className='md:hidden border-gray-400 mt-2 mb-2'/>

                <div className='flex flex-col  mt-2 mb-2 space-y-3'>
                    <h1 className='w-fit text-sm md:text-lg font-bold object-contain cursor-pointer hover:text-red-500'>WORKING HOURS</h1>
                    <h1 className='w-fit text-xs md:text-sm cursor-pointer'>MONDAY TO FRIDAY (9:00-22:00)</h1>
                    <h1 className='w-fit text-xs md:text-sm cursor-pointer'>SATURDAY & SUNDAY (12:00-24:00)</h1>
                </div>
            </div>
            
            <hr className='border-gray-400 '/>

            {/* ----------the lower section containing copyright----------------- */}
            <div className='flex justify-between md:justify-around mt-2'>
                <h1 className='text-sm md:text-lg font-bold'>© 2022 Grab-It, Inc.</h1>
                <div className='flex'>
                    <IconButton><FacebookIcon className='text-white'/></IconButton>
                    <IconButton><TwitterIcon className='text-white'/></IconButton>
                    <IconButton><InstagramIcon className='text-white'/></IconButton>
                </div>   
            </div>


            <div className='mt-2 mb-4'>
                <h1 className='w-fit mx-auto text-xs font-bold font-Nunito cursor-pointer pl-2 pr-2'>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2022 © Grab-It™ Ltd. All rights reserved.</h1>
            </div>
            
            <div className='bottom-0 mx-auto'>
                <h1 className='w-fit mx-auto text-xs font-Nunito hover:text-red-500 cursor-pointer'>Made with ❤️,by RATNESH MAURYA</h1>
            </div>

        </div>
    )
}

export default Footer
