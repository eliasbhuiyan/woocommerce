import {AiFillHeart} from 'react-icons/ai'
import {TbReload} from 'react-icons/tb'
import {FaShoppingCart} from 'react-icons/fa'
import Badge from './Badge'

const Product = ({src,badge}) => {
  return (
    <div className='relative group overflow-hidden'>
        <img className="w-full" src={src}/>   
        {
          badge &&
         <Badge title="New"/>
        }
        <div className="absolute -bottom-full left-0 transition-all p-1 lg:p-5 bg-white w-full group-hover:bottom-0 shadow-inner">
           <div className="flex justify-end cursor-pointer px-0 py-1 lg:px-2 gap-x-1 lg:gap-x-4 hover:bg-bg transition-all">
             <p className='font-dm font-normal text-xs lg:text-sm text-secondary'>Add to Wish List</p>
             <AiFillHeart className='text-primary text-xs lg:text-xl'/>
           </div>
           <div className="flex justify-end cursor-pointer px-0 py-1 lg:px-2 gap-x-1 lg:gap-x-4 hover:bg-bg transition-all">
             <p className='font-dm font-normal text-xs lg:text-sm text-secondary'>Compare</p>
             <TbReload className='text-primary text-xs lg:text-xl'/>
           </div>
           <div className="flex justify-end cursor-pointer px-0 py-1 lg:px-2 gap-x-1 lg:gap-x-4 hover:bg-bg transition-all">
             <p className='font-dm font-normal text-xs lg:text-sm text-secondary'>Add to Cart</p>
             <FaShoppingCart className='text-primary text-xs lg:text-xl'/>
           </div>
        </div>
    </div>
  )
}
export default Product