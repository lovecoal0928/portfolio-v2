import { AppProps, NextWebVitalsMetric } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import '../styles/globals.css'
import { RecoilRoot } from 'recoil'
import { motion, AnimatePresence } from 'framer-motion'

const App = ({ Component, pageProps }: AppProps) => {
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const animationDuration = 3000

    const timer = setTimeout(() => {
      setLoading(false)
    }, animationDuration)

    // ページが完全に読み込まれた後にローディングフラグを解除する
    const handleRouteChangeComplete = () => {
      clearTimeout(timer)
      setLoading(false)
    }
    router.events.on('routeChangeComplete', handleRouteChangeComplete)

    return () => {
      clearTimeout(timer)
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
    }
  }, [router])

  return (
    <RecoilRoot>
        {loading ? <Loading /> : <Component {...pageProps} />}
    </RecoilRoot>
  )
}

export default App