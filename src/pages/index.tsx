import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import PortfolioHero from '../components/PortfolioHero'


export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero
        backgroundImage="https://source.unsplash.com/random/1600x900"
        title="Hi, I'm Nikholas. I design and build websites."
        subtext="Lets make your dream a reality."
        ctaText="Contact Me"
        ctaLink="/contact"
      />
      <PortfolioHero/>
    </>
  )
}
