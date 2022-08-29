import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Slick Tech</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className='relative h-[200vh]'>
        <Banner/>
      </main>
    </div>
  )
}

export default Home
