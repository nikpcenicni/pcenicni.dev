import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import PortfolioHero from '../components/PortfolioHero'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
    <Navbar/>
      <Hero
        backgroundImage="https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
        title="Hi, I'm Nikholas. I Design And Build Websites."
        subtext="Lets make your dream a reality."
        ctaText="Contact Me"
        ctaLink="/contact"
      />
      <PortfolioHero/>
      <Footer/>
    </>
  )
}
