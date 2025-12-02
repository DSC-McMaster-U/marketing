import FaqSectionBackground from '@/components/assets/faq-section-background'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import type { FAQ } from '@/types/sanity'
import Image from 'next/image'
import Link from 'next/link'

const FAQSection = async () => {
  const faqs: FAQ[] = await client.fetch(`
    *[_type == "faq"] | order(orderRank) {
      _id,
      question,
      answer,
      showButton,
      buttonText,
      buttonIcon,
      buttonLink
    }
  `)

  if (!faqs?.length) return null

  return (
    <section
      id='faq'
      className='relative -mt-32 w-full max-w-none overflow-x-clip py-16 max-[400px]:min-h-[150vh] min-[400px]:max-md:min-h-[120vh] md:max-xl:min-h-[80vh] xl:aspect-[1440/1052]'
    >
      <FaqSectionBackground className='pointer-events-none absolute max-xl:left-0 max-xl:top-0 max-xl:h-full max-xl:w-[150%] xl:inset-0 xl:h-full xl:w-full' />
      <div className='container relative mx-auto max-w-3xl space-y-8 text-center'>
        <Accordion
          type='single'
          collapsible
          className='space-y-2 pt-48 text-left max-lg:pt-32 max-md:pt-32'
        >
          {faqs.map((faq) => (
            <AccordionItem key={faq._id} value={faq._id}>
              <AccordionTrigger>
                <h3 className='text-2xl lg:text-5xl'>{faq.question}</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p>{faq.answer}</p>
                {faq.showButton && faq.buttonLink && (
                  <div className='flex justify-center'>
                    <Link
                      href={faq.buttonLink}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Button className='mt-4 flex items-center gap-2 rounded-lg bg-gray-500/30 px-4 py-4 text-black hover:bg-gray-500/40'>
                        {faq.buttonIcon && (
                          <div className='relative h-[30px] w-[30px] flex-shrink-0'>
                            <Image
                              src={urlFor(faq.buttonIcon).url()}
                              alt='Button icon'
                              fill
                              className='object-contain'
                            />
                          </div>
                        )}
                        {faq.buttonText}
                      </Button>
                    </Link>
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default FAQSection
