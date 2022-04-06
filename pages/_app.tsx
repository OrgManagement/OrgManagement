import '../styles/globals.css';
import type { AppProps } from 'next/app'
import NavWrapper from '../components/NavWrapper'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NavWrapper>
      <Component {...pageProps} />
    </NavWrapper>
  )
}

export default MyApp
