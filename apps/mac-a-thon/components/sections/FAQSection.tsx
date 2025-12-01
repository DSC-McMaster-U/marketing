import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Separator } from '@/components/ui/separator'
import { client } from '@/sanity/lib/client'
import type { FAQ } from '@/types/sanity'

const FAQSection = async () => {
  const faqs: FAQ[] = await client.fetch(`
    *[_type == "faq"]{
      _id,
      question,
      answer
    }
  `)

  if (!faqs?.length) return null

  return (
    <section id='faq' className='w-full max-w-none bg-[#f2d5aa]'>
      <div className='container mx-auto max-w-3xl space-y-8 text-center'>
        <h2>FAQ</h2>
        <Separator className='mx-auto w-16' />
        <Accordion type='single' collapsible className='space-y-2 text-left'>
          {faqs.map((faq) => (
            <AccordionItem key={faq._id} value={faq._id}>
              <AccordionTrigger>
                <h3>{faq.question}</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p>{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default FAQSection
