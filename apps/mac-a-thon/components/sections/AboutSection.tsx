import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { client } from '@/sanity/lib/client'
import { About } from '@/types/sanity'
import Image from 'next/image'

const AboutSection = async () => {
  const aboutInfo: About = await client.fetch(`*[_type == "about"][0]`)

  return (
    <section
      id='about'
      className='relative flex h-fit min-h-[1000px] w-full max-w-none overflow-x-hidden bg-[#FDE9A8]'
    >
      <Image
        src='/assets/about-background.png'
        alt='Beach background'
        fill
        priority
        className='object-cover object-top'
      />

      <div className='relative mx-auto flex h-full w-full max-w-7xl flex-col gap-y-20 py-10 sm:min-h-[600px] md:min-h-[800px] md:w-2/3 md:py-20 lg:min-h-[1000px] xl:min-h-[1200px] 2xl:min-h-[1500px]'>
        <Card className='w-full rounded-lg border-none bg-[#F5E2A5]/95 shadow-md'>
          <CardHeader>
            <CardTitle className='text-2xl font-bold'>Mission</CardTitle>
          </CardHeader>
          <CardContent className='text-lg leading-relaxed'>
            <p>{aboutInfo.mission}</p>
          </CardContent>
        </Card>
        <Card className='w-full rounded-lg border-none bg-[#F5E2A5]/95 shadow-md'>
          <CardHeader>
            <CardTitle className='text-2xl font-bold'>Vision</CardTitle>
          </CardHeader>
          <CardContent className='text-lg leading-relaxed'>
            <p>{aboutInfo.vision}</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default AboutSection
