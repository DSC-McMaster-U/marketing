import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { client } from '@/sanity/lib/client'
import type { About } from '@/types/sanity'

const AboutSection = async () => {
  const aboutInfo: About = await client.fetch(`*[_type == "about"][0]`)

  if (!aboutInfo) return null

  return (
    <section id='about' className='py-16'>
      <div className='container mx-auto max-w-3xl space-y-8 text-center'>
        <h2>About</h2>
        <Separator className='mx-auto w-16' />

        <div className='grid gap-6 md:grid-cols-2'>
          {aboutInfo.mission && (
            <Card className='border-border/40 shadow-sm'>
              <CardHeader>
                <CardTitle>
                  <h3>Mission</h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{aboutInfo.mission}</p>
              </CardContent>
            </Card>
          )}

          {aboutInfo.vision && (
            <Card className='border-border/40 shadow-sm'>
              <CardHeader>
                <CardTitle>
                  <h3>Vision</h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{aboutInfo.vision}</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
