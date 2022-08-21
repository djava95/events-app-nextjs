import type { AppProps } from 'next/app'
import Footer from '../components/Footer'
import '../styles/globals.css'
import styled from 'styled-components'

const PagesContainer = styled.div`
  flex: 1;
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <PagesContainer>
      <Component {...pageProps} />  
    </PagesContainer>
    <Footer/>
  </>
  )  
}

export default MyApp
