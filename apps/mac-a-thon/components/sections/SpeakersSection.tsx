import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'

type Speaker = {
  _id: string
  name: string
  role?: string
  bio?: string
  photo?: {
    asset: {
      _ref: string
    }
  }
  socials?: { platform: string; url: string }[]
}

const SpeakersSection = async () => {
  const speakers: Speaker[] = await client.fetch(`
    *[_type == "speaker"]{
      _id,
      name,
      role,
      bio,
      photo,
      socials
    } | order(name asc)
  `)

  if (!speakers?.length) return null

  return (
    <section id='speakers' className='py-16'>
      <div className='container mx-auto max-w-6xl space-y-8 text-center'>
        <h2 className='text-3xl font-semibold tracking-tight'>Speakers</h2>
        <Separator className='mx-auto w-16' />

        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {speakers.map((speaker) => (
            <Card
              key={speaker._id}
              className='border-border/40 shadow-sm transition-transform hover:scale-[1.02] hover:shadow-md'
            >
              <CardHeader className='flex flex-col items-center space-y-3'>
                {/* Speaker Avatar */}
                <Avatar className='h-24 w-24 border'>
                  {speaker.photo?.asset ? (
                    <AvatarImage
                      src={urlFor(speaker.photo.asset).url()}
                      alt={speaker.name}
                    />
                  ) : (
                    <AvatarFallback>
                      {speaker.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')
                        .toUpperCase()}
                    </AvatarFallback>
                  )}
                </Avatar>

                {/* Name & Role */}
                <CardTitle className='text-lg font-semibold'>
                  {speaker.name}
                </CardTitle>
                {speaker.role && (
                  <p className='text-muted-foreground text-sm'>
                    {speaker.role}
                  </p>
                )}
              </CardHeader>

              <CardContent className='space-y-3 text-center'>
                {/* Bio */}
                {speaker.bio && (
                  <p className='text-muted-foreground text-sm leading-relaxed'>
                    {speaker.bio}
                  </p>
                )}

                {/* Social Links */}
                {speaker.socials?.length ? (
                  <div className='flex flex-wrap justify-center gap-3 pt-2'>
                    {speaker.socials.map((social) => (
                      <Link
                        key={social.platform}
                        href={social.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-primary text-sm font-medium underline-offset-2 hover:underline'
                      >
                        {social.platform}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SpeakersSection
