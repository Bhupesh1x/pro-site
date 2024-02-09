import Image from "next/image";

import Card from "@/components/site/Card";

import { pricingCards } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <section className="h-full w-full relative flex flex-col items-center justify-center pt-36">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10" />

        <p className="text-center">Run your agency, in one place</p>
        <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
          <h1 className="text-8xl font-bold text-center md:text-[250px]">
            ProSite
          </h1>
        </div>
        <div className="flex items-center justify-center relative">
          <Image
            src="/assets/preview.png"
            alt="banner"
            height={1200}
            width={1200}
            className="rounded-t-2xl border-2 border-muted"
          />
          <div className="absolute top-[50%] bottom-0 z-10 right-0 left-0 bg-gradient-to-t"></div>
        </div>
      </section>
      <section className="flex justify-center flex-col gap-4 mt-10 md:mt-20">
        <h2 className="text-4xl text-center">Choose what fits you right</h2>
        <p className="text-muted-foreground text-center">
          Our straightforward pricing plans are tailored to meet your needs. If
          you&apos;re not ready to commit you can start fo free
        </p>

        <div className="flex items-center justify-center flex-wrap gap-4 my-6">
          {pricingCards.map((card, index) => (
            <Card key={card.title} card={card} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}
