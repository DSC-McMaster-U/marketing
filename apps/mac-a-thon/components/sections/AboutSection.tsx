import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { client } from "@/sanity/lib/client"
import type { About } from "@/types/sanity"

const AboutSection = async () => {
  const aboutInfo: About = await client.fetch(`*[_type == "about"][0]`)

  return (
    <section
      id="about"
      className="
        relative 
        w-full 
        max-w-none 
        overflow-hidden
        bg-[#FDE9A8]   /* beige fallback */
        py-10          /* moved content UP slightly */
      "
      style={{ minHeight: "1200px" }} /* ensures full background visibility */
    >

      {/* FULL BACKGROUND IMAGE */}
      <Image
        src="/assets/background.png"
        alt="Beach background"
        fill
        priority
        className="object-cover object-top pointer-events-none select-none"
      />

      {/* OVERLAY CONTENT */}
      <div className="relative mx-auto max-w-7xl px-6 mt-16">

        <div className="grid md:grid-cols-[1fr,300px] gap-16">

          {/* LEFT SIDE */}
          <div className="space-y-12">

            {/* MISSION */}
            <Card className="border-none bg-[#F5E2A5]/95 rounded-[32px] shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Mission</CardTitle>
              </CardHeader>
              <CardContent className="leading-relaxed text-lg">
                <p>
                  At GDSC McMasterU, we connect, learn, and grow.
                  We connect by enabling students to network with external partners
                  and fostering a collaborative learning environment.
                  Through hands-on workshops, events, and speaker sessions,
                  students learn about tech stacks from database to back-end
                  to front-end. Students grow by gaining the confidence and
                  motivation they need for developing solutions and creating an impact.
                </p>
              </CardContent>
            </Card>

            {/* VISION */}
            <Card className="border-none bg-[#F5E2A5]/95 rounded-[32px] shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Vision</CardTitle>
              </CardHeader>
              <CardContent className="leading-relaxed text-lg">
                <p>
                  GDSC McMasterU started in 2020, and has grown to be one of
                  the largest chapters in North America. We are a club of
                  passionate students who organize events that showcase
                  Google Technologies and foster a community to learn about
                  the software industry together. With a following in the
                  thousands across all our social media channels, we continue
                  to engage with students and implement feedback to grow
                  the community!
                </p>
              </CardContent>
            </Card>

          </div>

          {/* RIGHT SIDE EMPTY — removes the guy */}
          <div className="hidden md:block"></div>

        </div>

      </div>
    </section>
  )
}

export default AboutSection
