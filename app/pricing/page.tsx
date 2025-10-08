import { CTA } from "@/components/cta";
import { DivideX } from "@/components/divide";
import { FAQs } from "@/components/faqs";
import { Pricing } from "@/components/pricing";
import { PricingTable } from "@/components/pricing-table";
import { SetupFees } from "@/components/setup-fees";
import { SweepstakesCallout } from "@/components/sweepstakes-callout";

import { getSEOTags } from "@/lib/seo";

export const metadata = getSEOTags({
  title: "Pricing - Perk Social | Loyalty Platform Pricing",
  description:
    "Flexible pricing plans for every brand. From startups to enterprise, find the perfect plan to power your loyalty and rewards program with Perk Social.",
});

export default function PricingPage() {
  return (
    <main>
      <DivideX />
      <Pricing />
      <DivideX />
      <PricingTable />
      <DivideX />
      <SetupFees />
      <DivideX />
      <SweepstakesCallout />
      <DivideX />
      <FAQs />
      <DivideX />
      <CTA />
      <DivideX />
    </main>
  );
}
