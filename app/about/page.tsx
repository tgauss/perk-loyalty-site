import { Badge } from "@/components/badge";
import { Container } from "@/components/container";
import { CTA } from "@/components/cta";
import { DivideX } from "@/components/divide";
import { Heading } from "@/components/heading";
import { InformationBlock } from "@/components/information-block";
import { ProgressiveBlur } from "@/components/progressive-blur";
import { SectionHeading } from "@/components/seciton-heading";
import { SubHeading } from "@/components/subheading";
import { Testimonials } from "@/components/testimonials";
import { careers } from "@/constants/careers";
import { founders } from "@/constants/founders";
import { LinkedInIcon } from "@/icons/general";

import { getSEOTags } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";

export const metadata = getSEOTags({
  title: "About Us - Perk | Loyalty Made Easy",
  description:
    "Perk is the loyalty engine that gamifies the content you already publish and rewards every purchase—online and in-store. With automatic personalization and autopilot operations, brands grow engagement, UGC, and repeat revenue.",
});

export default function AboutPage() {
  return (
    <main>
      <DivideX />
      <Container className="border-divide flex flex-col items-center justify-center border-x px-4 pt-10 pb-10 md:px-8 md:pt-32 md:pb-20">
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2">
          <div className="flex flex-col items-start justify-start">
            <Badge text="About Perk" />
            <Heading className="mt-4 text-left">
              Loyalty Made Easy
            </Heading>
            <SubHeading className="mt-6 mr-auto text-left">
              Perk is the loyalty engine that turns your existing content, commerce,
              and communications into a gamified fan club that rewards customers for
              staying connected and shopping—automatically.
              <br /> <br />
              We gamify what you already publish—no net-new content required. Members
              earn for engagement and purchases (online and in-store), while our autopilot
              engine keeps everything fresh with minimal day-to-day work. Today, Perk powers
              loyalty programs for leading brands like M&M's Fun Club, Pedigree Good Points,
              and Ohio State's Buckeye Nation Rewards.
            </SubHeading>
          </div>
          <div className="border-divide rounded-3xl border p-2">
            <Image
              src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="About Us"
              width={1000}
              height={1000}
              className="h-full rounded-2xl object-cover"
            />
          </div>
        </div>
        <div className="mt-20 flex w-full flex-col items-center lg:flex-row">
          <h2 className="mb-4 min-w-40 text-center font-mono text-sm tracking-tight text-neutral-500 uppercase lg:mb-0 lg:text-left dark:text-neutral-400">
            As featured in
          </h2>
          <div className="grid w-full grid-cols-2 items-center gap-4 md:grid-cols-4">
            <Image
              src="/logos/bloomberg.png"
              alt="Bloomberg"
              width={140}
              height={140}
              className="h-6 w-auto object-contain dark:invert dark:filter"
            />
            <Image
              src="/logos/wired.png"
              alt="Bloomberg"
              width={140}
              height={140}
              className="h-6 w-auto object-contain dark:invert dark:filter"
            />
            <Image
              src="/logos/forbes.png"
              alt="Bloomberg"
              width={140}
              height={140}
              className="h-6 w-auto object-contain dark:invert dark:filter"
            />
            <Image
              src="/logos/the-guardian.png"
              alt="Bloomberg"
              width={140}
              height={140}
              className="h-6 w-auto object-contain dark:invert dark:filter"
            />
          </div>
        </div>
      </Container>
      <Testimonials />
      <Container className="border-divide border-x border-t p-4 py-20 md:px-8 md:py-40">
        <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2">
          <div className="flex flex-col items-start justify-start">
            <Badge text="Our Mission" />
            <SectionHeading className="mt-4 text-left">
              Making Loyalty Accessible and Effective
            </SectionHeading>
            <SubHeading className="mt-6 mr-auto text-left">
              We believe loyalty shouldn't require heavy lifting. Perk automates the day-to-day
              work so brands can focus on strategy while building lasting relationships with customers
              across every channel—online, in-store, and everywhere in between.
            </SubHeading>
            <div className="divide-divide mt-8 grid grid-cols-3 gap-6">
              <MetricBlock value="3+" label="Major Brands" />
              <MetricBlock value="100K+" label="Active Members" />
              <MetricBlock value="Auto" label="Pilot Mode" />
            </div>
          </div>
          <InformationBlock />
        </div>
      </Container>
      <CTA />
      <DivideX />
    </main>
  );
}

const MetricBlock = ({ value, label }: { value: string; label: string }) => {
  return (
    <div className="flex flex-col items-start justify-start">
      <h3 className="text-charcoal-700 text-3xl font-medium dark:text-neutral-100">
        {value}
      </h3>
      <p className="text-sm text-gray-600 dark:text-neutral-400">{label}</p>
    </div>
  );
};
