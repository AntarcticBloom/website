'use client'

import Steps from './components/Steps'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Description from './components/Description'
import HelpcardHeader from './components/HelpcardHeader'
import HelpcardGiveVisual from './components/HelpcardGiveVisual'

const Home = () => (
  <>
    <Header />
    <HelpcardHeader />
    <HelpcardGiveVisual />
    <Description />
    <Steps />
    <Footer />
  </>
)

export default Home
