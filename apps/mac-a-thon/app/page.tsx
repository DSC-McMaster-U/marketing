import Footer from '@/components/footer'
import Header from '@/components/header'
import AboutSection from '@/components/sections/AboutSection'
import FAQSection from '@/components/sections/FAQSection'
import HeroSection from '@/components/sections/HeroSection'
import MeetTheTeamSection from '@/components/sections/MeetTheTeamSection'
import SpeakersSection from '@/components/sections/SpeakersSection'
import SponsorsSection from '@/components/sections/SponsorsSection'
import StatisticsSection from '@/components/sections/StatisticsSection'

// 🚀 This makes the page ALWAYS fetch fresh content from Sanity (can be updated in the future for ISR to improve performance)
export const revalidate = 0

export default function Home() {
  return (
    <div className='relative'>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SpeakersSection />
        <StatisticsSection />
        <SponsorsSection />
        <FAQSection />
        <MeetTheTeamSection />
      </main>
      <Footer />
    </div>
  )
}
