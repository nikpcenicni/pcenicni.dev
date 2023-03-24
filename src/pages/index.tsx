import Navbar from '../components/Navbar'
import Hero from '../components/Hero'


export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero
        backgroundImage="https://source.unsplash.com/random/1600x900"
        title="Welcome to My Website"
        ctaText="Contact Me"
        ctaLink="/contact"
      />
    </>
  )
}
