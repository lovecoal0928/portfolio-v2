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
        <section id="projects" className='bg-slate-700 w-full'>
            <div className='p-10'>
                <h1 className='flex text-4xl m-6 text-center justify-center'>- My Projects -</h1>
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
