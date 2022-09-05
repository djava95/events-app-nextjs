import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/globals.css'
import styled from 'styled-components'

const PagesContainer = styled.div`
  flex: 1;
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <Header/>
    <PagesContainer>
      <Component {...pageProps} />  
    </PagesContainer>
    <Footer/>
  </>
  )  
}

export default MyApp
