import Footer from '@/components/footer'
import Header from '@/components/header'
import AboutSection from '@/components/sections/AboutSection'
import FAQSection from '@/components/sections/FAQSection'
import HeroSection from '@/components/sections/HeroSection'
import SpeakersSection from '@/components/sections/SpeakersSection'
import SponsorsSection from '@/components/sections/SponsorsSection'
import StatisticsSection from '@/components/sections/StatisticsSection'

export default function Home() {
  return (
    <div className='beach-scene'>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SpeakersSection />
        <StatisticsSection />
        <SponsorsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
