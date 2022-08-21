import Link from 'next/link'
import PageLayout from '../components/PageLayout'
import { Paragraph } from '../customElemets/customStyledElements'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <PageLayout>
      <Paragraph> This is home page</Paragraph>
    </PageLayout>
  )
}

export default Home
