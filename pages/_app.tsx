import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Main_layout from '../components/main_layout'

function MyApp({ Component, pageProps }: AppProps) {
  return <Main_layout><Component {...pageProps} /></Main_layout>
}

export default MyApp
 