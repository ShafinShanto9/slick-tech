import Button from './Button'
import Image from 'next/image'
const Banner = () => {
  return (
      <section className='h-screen sticky flex mx-auto top-0 max-w-[1350px] items-center justify-between px-8'>
          <div className='space-y-8'>
              <h1 className='space-y-3 font-semibold text-5xl tracking-wide lg:text-6xl xl:text-7xl'>
                  <span className='block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent'>Powered</span>
                  <span className='block'>By Slick Tech</span>
                  <span className='block'>Driven By Value</span>
              </h1>
              <div className='space-x-8'>
                <Button title='Buy Now'/>
                <a className='link'>Learn More</a>
             </div>
          </div>
          <div className='relative hidden h-[450px] w-[450px] transition-all duration-500 md:inline
          lg:h-[550px] lg:w-[550px]'>
            <Image src='https://i.ibb.co/8XyqVVW/oneplus-10t-5g-2-removebg-preview.png' layout='fill' objectFit='contain' />
          </div>
    </section>
  )
}

export default Banner