"use client";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import type { Statistic } from "@/types/sanity";
import StatisticsCarousel from "./StatisticsCarousel";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";


const StatisticsSection = () => {
  const [statistics, setStatistics] = useState<Statistic[] | null>(null);

  useEffect(() => {
    client.fetch(`*[_type == "statistic"]`).then((data) => setStatistics(data));
  }, []);

  if (!statistics || statistics.length === 0) return null;

  const defaultItems = [
    { title: "Title 1", value: "", description: "" },
    { title: "Title 2", value: "", description: "" },
    { title: "Title 3", value: "", description: "" },
  ];

  const leftItems = statistics.slice(0, 3).map((s, i) => s || defaultItems[i]);

  const images = statistics.flatMap((s) =>
    s.image?.asset ? [urlFor(s.image.asset).url()] : []
  );

  return (
    <section id="statistics" className="relative w-full max-w-none overflow-hidden  py-10">

      {/* Background */}

        <Image
        src={"/assets/StatsBackground.png"}
        alt="Statistics Background"
        fill
        style={{ 
          objectFit: "cover",
          objectPosition: "center",
         }}  
        priority
      />
      <div className="mx-auto relative z-10 w-full">
        

      <div className="relative w-full min-h-[600px] md:min-h-[900px] lg:min-h-[1024px] overflow-hidden gap-20 grid md:grid-cols-2 px-12">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-10 justify-center py-6 max-w-xl text-white">
            {leftItems.map((item, idx) => (
              <Card key={idx} className="bg-sky-500/15 text-white w-full border border-black/100">
                <CardContent>
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  {item.value && <p className="text-4xl font-bold">{item.value}</p>}
                  {item.description && (
                    <p className="text-lg text-white/80">{item.description}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>


          {/* RIGHT COLUMN: Vertical Carousel */}
          <div className="flex items-center justify-center">
            <div className="relative w-full overflow-hidden rounded-2xl bg-black/30 p-1">
              <StatisticsCarousel images={images} />
              <div className="pointer-events-none absolute inset-0 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
