import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
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

    </header>
  )
}

export default Header