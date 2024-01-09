'use client'

import CTA from './components/CTA'
import About from './components/About'
import Splash from './components/Splash'
import Footer from './components/Footer'
import Header from './components/Header'
import Tagline from './components/Tagline'
import { DimensionsProvider } from './hooks'
import Projects, { projects } from './components/Projects'

const Home = () => (
  <DimensionsProvider>
    <Header />
    <Splash />
    <Tagline />
    <Projects projects={projects} />
    <About />
    <CTA />
    <Footer />
  </DimensionsProvider>
)

export default Home
