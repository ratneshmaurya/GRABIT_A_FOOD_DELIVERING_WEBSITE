import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { IconButton } from '@mui/material';

const Navbar = () => {
  return (
  <div className="flex sticky z-20 top-0 bg-black p-5 md:p-8 space-x-4 items-center">

  <div className="flex font-bold cursor-pointer text-3xl md:text-4xl border-b-2 hover:border-red-500">
    <h1 className="text-white">Grab</h1>
    <h1 className="text-red-500">It</h1>
  </div>

    <div className="flex-1"></div>

    <div className='flex font-bold space-x-5 lg:space-x-10 md:flex text-lg'>
        <div className='cursor-pointer hover:border-b'>
          <h1 className="text-white hidden md:flex hover:text-red-400 cursor-pointer">Homepage</h1>
        </div>        

        <div className='cursor-pointer hover:border-b'>
          <h1 className="text-white hidden md:flex hover:text-red-400 cursor-pointer">Products</h1>
        </div>
        
        <div className='cursor-pointer hover:border-b'>
          <h1 className="text-white hidden md:flex hover:text-red-400 cursor-pointer">Cart</h1>
        </div>
        
        <div className='cursor-pointer hover:border-b'>
          <h1 className="text-white hidden md:flex hover:text-red-400 cursor-pointer">Contactus</h1>
        </div>
        
    </div>


    <div className="flex-1"></div>

    <IconButton>
        <ShoppingBasketIcon className='text-white'/>
    </IconButton>
    
      
  </div>
  )
};

export default Navbar;
