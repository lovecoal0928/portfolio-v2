import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`relative h-screen bg-gradient-to-b lg:h-[140vh]`}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p className='text-3xl font-bold bg-red-400'>Hello world !</p>
      </main>
    </div>
  )
}
