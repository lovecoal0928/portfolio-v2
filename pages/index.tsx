import ProjectModal from '@/components/ProjectModal'
import Banner from '../components/Banner'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Profile from '../components/Profile'
import ProjectRow from '../components/ProjectRow'
import Skills from '../components/Skills'
import Head from 'next/head'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Image from 'next/image'
import MainBg from '@/components/MainBg'

const Home=()=>{
  
  return (
    <motion.div
      initial={{ opacity: 0.2 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <Head>
        <title>Kaito's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* ヘッダー */}
      <Header />

      <main>
        <MainBg />
        {/* バナー */}
        <Banner />

        {/* プロフィール */}
        <Profile />

        {/* プロジェクト */}
        <section id="projects" className='bg-transparent w-full text-[#eee]'>
            <div className='py-6 md:p-10'>
                <h1 className='flex text-4xl m-6 text-center drop-shadow-White justify-center'>- MY PROJECTs -</h1>
                  <p className='flex font-light text-2xl px-5 md:px-0 text-center drop-shadow-White justify-center'>私がプログラミング勉強し始めてからデプロイした、思い出の作品たちです。</p>
                <ProjectRow />
            </div>
        </section>

        {/* スキルスタック */}
        <Skills />

        {/* 年表（作るか分からん） */}

        {/* コンタクト */}
        <Contact />

      </main>
      {/* プロジェクトモーダル */}
      <ProjectModal />

      <Footer />
    </motion.div>
  )
}

export default Home
