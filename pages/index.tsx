import Banner from '../components/Banner'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Profile from '../components/Profile'
import ProjectRow from '../components/ProjectRow'
import Skills from '../components/Skills'
import Head from 'next/head'

const Home=()=>{
  return (
    <div>
      <Head>
        <title>Kaito's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* ヘッダー */}
      <Header />

      <main>
        {/* バナー */}
        <Banner />

        {/* プロフィール */}
        <Profile />

        {/* プロジェクト */}
        <section id="projects" className='bg-red-950 w-full text-[#eee]'>
            <div className='py-6 md:p-10'>
                <h1 className='flex text-4xl m-6 text-center drop-shadow-RED justify-center'>- My Projects -</h1>
                <p className='flex font-light text-2xl mb-10 px-5 md:px-0 text-center drop-shadow-RED justify-center'>私がプログラミング勉強し始めてからデプロイした、思い出の作品たちです。</p>
                <ProjectRow />
            </div>
        </section>

        {/* スキルスタック */}
        <Skills />

        {/* 年表（作るか分からん） */}

        {/* コンタクト */}
        <Contact />

      </main>
    </div>
  )
}

export default Home
