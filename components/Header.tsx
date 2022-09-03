import Image from 'next/image'
import Link from 'next/link'
import {SearchIcon, ShoppingBagIcon, UserIcon} from '@heroicons/react/outline'
import { useSelector } from 'react-redux'
import { selectCartItems } from '../redux/cartSlice'
const Header = () => {
  const session = false
  const items= useSelector(selectCartItems)
  return (
    <header className='sticky flex justify-between items-center w-full top-0 z-30 bg-[#E7ECEE] p-4'>
        <div className='flex justify-center items-center md:w-1/5'>
        <Link href='/'>
            <div className='relative h-12 w-11 cursor-pointer '>
            <Image src="https://i.ibb.co/qNZ0xZQ/images-removebg-preview.png" layout='fill' objectFit='contain' /> 
            </div> 
        </Link> 
        </div>
        <div className='hidden flex-1 items-center justify-center space-x-8 md:flex'>
            <a className='headerLink' href="">Product</a>
            <a className='headerLink' href="">Explore</a>
            <a className='headerLink' href="">Support</a>
            <a className='headerLink' href="">Bussiness</a>  
        </div>
          
        <div className='flex items-center justify-center gap-x-4 md:w-1/5'>
            <SearchIcon className='headerIcon' />
              <Link href='/checkout'>
              <div className='relative cursor-pointer'>
              {
              items.length > 0 && 
                   (<span className='absolute -right-1 -top-1 z-50 h-4 w-4 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-400 to-violet-400 text-white text-[10px]'>{items.length}</span> ) 
              }
                <ShoppingBagIcon className='headerIcon' />  
              </div>
              </Link>  

              {session ? (
          <Image
            src={
              "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
            }
            alt=""
            className="cursor-pointer rounded-full"
            width={34}
            height={34}
            
          />
        ) : (
          <UserIcon className="headerIcon"  />
        )}
        </div>

    </header>
  )
}

export default Header