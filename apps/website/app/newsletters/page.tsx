import Header from '@/app/components/Header'
import { client } from '@/sanity/lib/client'
import { Newsletter } from '@/types/sanity'
import { Metadata } from 'next'
import Link from 'next/link'
import * as Icons from 'react-icons/md'
import AnimatedHero from '../components/AnimatedHero'
import Card from '../components/Card'
import Pill from '../components/Pill'
import SectionCard from '../components/SectionCard'

export const metadata: Metadata = {
  title: 'Newsletters | Google Developer Group on Campus | McMaster University',
  description:
    'Newsletters from Google Developer Group on Campus | McMaster University',
}

const fetchNewsletters = async () => {
  const newsletters = await client.fetch(
    `*[_type == 'newsletter']{
            _id,
            title,
            description,
            slug,
            body,
            _updatedAt
        }`,
  )
  return newsletters
}

const HeroSection = () => {
  return (
    <AnimatedHero
      id='hero'
      className='mx-auto mt-8 flex max-w-7xl flex-col items-center gap-y-8 px-4 py-8 sm:px-6 sm:py-12 md:flex-row md:gap-y-0 lg:px-8 lg:py-16 xl:py-28'
    >
      <div className='flex w-full flex-col items-center'>
        <div className='flex max-w-2xl flex-col items-center justify-center gap-y-4 text-center'>
          <Pill>Our Newsletter</Pill>
          <h2>
            Keeping you up-to-date with the latest and greatest for everything
            tech
          </h2>
        </div>
      </div>
    </AnimatedHero>
  )
}

const NewslettersGridSection = async () => {
  const newsletters: Newsletter[] = await fetchNewsletters()
  return (
    <SectionCard id={'newsletters-grid-section'}>
      <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3'>
        {newsletters &&
          newsletters.map((newsletter: Newsletter) => (
            <Link
              href={`/newsletters/${newsletter.slug.current}`}
              key={newsletter._id}
            >
              <Card
                title={newsletter.title}
                description={newsletter.description}
                icon={<Icons.MdArticle className='h-fit w-full text-2xl' />}
              />
            </Link>
          ))}
      </div>
    </SectionCard>
  )
}

const NewslettersPage = async () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <NewslettersGridSection />
      </main>
    </>
  )
}

export default NewslettersPage
