import Accordion from '@/app/components/Accordion'
import Footer from '@/app/components/footer'
import Header from '@/app/components/header'
import StickyScroll from '@/app/components/StickyScroll'
import BuildWithAIBanner from '@/assets/BuildWithAIBanner.png'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import type {
  About,
  FAQ,
  GeneralInfo,
  Sponsor,
  Statistic,
} from '@/types/sanity'
import { formatTimeline } from '@/utils/date'
import { capitalizeFirstLetter } from '@/utils/string'
import Image from 'next/image'
import Link from 'next/link'

const HeroSection = async () => {
  const generalInfo: GeneralInfo = await client.fetch(
    `*[_type == 'generalInfo'][0]`,
  )

  if (!generalInfo) return null

  return (
    <section id='hero' className='pt-32 xl:pt-36'>
      <div
        id='hero-content'
        className='flex w-full flex-col items-center justify-center gap-y-4 text-center'
      >
        <h2>{generalInfo.club && generalInfo.club}</h2>
        <h1>{generalInfo.title && generalInfo.title}</h1>
        {generalInfo.application.status === 'open' ? (
          <>
            <div
              id='details'
              className='flex flex-col items-center gap-x-4 md:flex-row'
            >
              {generalInfo.startDate && generalInfo.endDate && (
                <h6>
                  {formatTimeline({
                    startDate: new Date(generalInfo.startDate),
                    endDate: new Date(generalInfo.endDate),
                  })}
                </h6>
              )}
              &bull;
              <h6>{capitalizeFirstLetter(generalInfo.locationType)}</h6>
            </div>
            <div id='application-status'>
              <Link
                href={generalInfo.application.link}
                className={`bg-google-lightGrey flex w-full items-center justify-center rounded-2xl px-4 py-2 text-left text-lg font-[600] transition-all duration-300 ease-in-out`}
                target='_blank'
                rel='noreferrer'
              >
                Apply Now!
              </Link>
            </div>
          </>
        ) : (
          <>
            <h6>
              Applications for Mac-a-thon are now{' '}
              {generalInfo.application.status}.
            </h6>
            <p>Stay tuned for updates on our next event!</p>
          </>
        )}
        <div className='flex w-full items-center justify-center'>
          {/* <Image
            src={HeroIllustration}
            alt='Hackathon photo'
            className='flex w-full md:w-3/4'
          /> */}
        </div>
      </div>
    </section>
  )
}

const AboutSection = async () => {
  const aboutInfo: About = await client.fetch(`*[_type == 'about'][0]`)

  if (!aboutInfo) return null

  return (
    <section id='about'>
      <div
        id='about-content'
        className='group flex h-full flex-col items-start justify-center gap-y-8 transition-all duration-300 ease-in-out md:gap-y-16'
      >
        <h2 className='from-google-mediumRed to-google-mediumRed w-fit bg-gradient-to-r bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]'>
          About
        </h2>
        <div className='flex flex-col gap-y-2 md:gap-y-4'>
          {aboutInfo.mission && (
            <>
              <h3>Mission</h3>
              <p>{aboutInfo.mission}</p>
            </>
          )}
          {aboutInfo.vision && (
            <>
              <h3>Vision</h3>
              <p>{aboutInfo.vision}</p>
            </>
          )}
        </div>
        <div className='flex w-full items-center justify-center'>
          {/* <Image
            src={UNGoalsIllustration}
            alt='Hackathon photo'
            className='flex w-full md:w-3/4'
          /> */}
        </div>
      </div>
    </section>
  )
}

const StatisticsSection = async () => {
  const statistics: Statistic[] = await client.fetch(`*[_type == 'statistic']`)

  if (statistics.length === 0) return null

  return (
    <section id='statistics'>
      <div
        id='statistics-content'
        className='flex w-full flex-col gap-y-8 md:gap-y-16'
      >
        <StickyScroll data={statistics} />
      </div>
    </section>
  )
}

const SponsorsSection = async () => {
  // Fetch the sponsors data
  const sponsors: Sponsor[] = await client.fetch(
    `*[_type == 'sponsor']{
		_id,
		name,
		logo,
		website,
		tier
	  }`,
  )

  // Group sponsors by tier
  const groupedSponsors = sponsors.reduce(
    (acc, sponsor) => {
      if (!acc[sponsor.tier]) acc[sponsor.tier] = []
      acc[sponsor.tier].push(sponsor)
      return acc
    },
    {} as Record<string, Sponsor[]>,
  )

  // Define grid columns based on tier
  const getGridCols = (tier: string) => {
    switch (tier) {
      case 'gold':
        return 'grid-cols-1'
      case 'silver':
        return 'grid-cols-2'
      case 'bronze':
        return 'grid-cols-3'
      default:
        return 'grid-cols-1' // Fallback to 1 column
    }
  }

  // Define the correct order of tiers
  const tierOrder = ['gold', 'silver', 'bronze']

  if (sponsors.length === 0) return null

  return (
    <section id='sponsors'>
      <div
        id='sponsors-content'
        className='group flex w-full flex-col gap-y-8 transition-all duration-300 ease-in-out md:gap-y-16'
      >
        <h2 className='from-google-mediumBlue to-google-mediumBlue w-fit bg-gradient-to-r bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]'>
          Sponsors
        </h2>{' '}
        <div id='sponsors-logos' className='flex w-full flex-col gap-8'>
          {tierOrder.map((tier) => {
            const sponsorsForTier = groupedSponsors[tier]

            return (
              sponsorsForTier &&
              sponsorsForTier.length > 0 && (
                <div key={tier}>
                  <div
                    className={`grid ${getGridCols(tier)} place-items-center justify-items-center gap-8`}
                  >
                    {sponsorsForTier.map((sponsor: Sponsor) => (
                      <Link
                        href={sponsor.website ? sponsor.website : '#'}
                        key={sponsor._id}
                        target='_blank'
                        rel='noreferrer'
                        className='bg-google-grey relative flex h-24 w-full items-center justify-center rounded-full bg-opacity-10 transition-all duration-300 ease-in-out hover:scale-[102%] hover:shadow-lg'
                      >
                        <Image
                          src={urlFor(sponsor.logo.asset).url()}
                          alt={sponsor.name}
                          fill
                          className='object-contain p-4'
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              )
            )
          })}
        </div>
      </div>
    </section>
  )
}

const FAQSection = async () => {
  const faqs: FAQ[] = await client.fetch(
    `*[_type == 'faq']{
			_id,
			question,
			answer,
		}`,
  )

  if (faqs.length === 0) return null

  return (
    <section id='faq'>
      <div
        id='faq-content'
        className='group flex w-full flex-col gap-y-8 transition-all duration-300 ease-in-out md:gap-y-16'
      >
        <h2 className='from-google-mediumGreen to-google-mediumGreen w-fit bg-gradient-to-r bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]'>
          FAQ
        </h2>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8'>
          {faqs.length > 0 &&
            faqs.map((faq: FAQ) => (
              <Accordion key={faq._id} title={faq.question}>
                <p className='text-lg font-[400]'>{faq.answer}</p>
              </Accordion>
            ))}
        </div>
        <div className='flex w-full items-center justify-center'>
          <Image
            src={BuildWithAIBanner}
            alt='Hackathon photo'
            className='flex w-full md:w-3/4'
          />
        </div>
      </div>
    </section>
  )
}

const Home = () => {
  return (
    <div className='beach-scene'>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <StatisticsSection />
        <SponsorsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}

export default Home
