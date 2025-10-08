"use client";
import React from "react";
import { Container } from "./container";
import { Badge } from "./badge";
import { SectionHeading } from "./seciton-heading";
import { DivideX } from "./divide";
import { Button } from "./button";
import { SlidingNumber } from "./sliding-number";
import { CheckIcon } from "@/icons/card-icons";
import { tiers } from "@/constants/pricing";
import Link from "next/link";

export const Pricing = () => {
  return (
    <section className="">
      <Container className="border-divide flex flex-col items-center justify-center border-x pt-10 pb-10">
        <Badge text="Pricing" />
        <SectionHeading className="mt-4">
          Flexible Plans for Every Brand
        </SectionHeading>
        <p className="mt-4 max-w-2xl text-center text-gray-600 dark:text-neutral-400">
          Choose the perfect plan to power your loyalty program. All plans include our core gamification platform and autopilot operations.
        </p>
      </Container>
      <DivideX />
      <Container className="border-divide border-x">
        <div className="divide-divide grid grid-cols-1 divide-y md:grid-cols-2 lg:grid-cols-4 md:divide-x md:divide-y-0">
          {tiers.map((tier, tierIdx) => (
            <div className="p-4 md:p-8" key={tier.title + "tier-meta"}>
              <h3 className="text-charcoal-700 text-xl font-medium dark:text-neutral-100">
                {tier.title}
              </h3>
              <p className="text-base text-gray-600 dark:text-neutral-400">
                {tier.subtitle}
              </p>
              <p className="mt-2 text-sm font-medium text-gray-500 dark:text-neutral-500">
                {tier.memberLimit}
              </p>
              {tier.monthly !== null ? (
                <span className="mt-6 flex items-baseline text-2xl font-medium dark:text-white">
                  $
                  <Price value={tier.monthly} />
                  <span className="ml-2 text-sm font-normal">/month</span>
                </span>
              ) : (
                <span className="mt-6 flex items-baseline text-2xl font-medium dark:text-white">
                  Custom
                </span>
              )}

              <div
                key={tier.title + "tier-list-of-items"}
                className="flex flex-col gap-4 px-0 py-4 md:hidden lg:hidden"
              >
                {tier.features.map((tierFeature, idx) => (
                  <Step key={tierFeature + tierIdx + idx}>{tierFeature}</Step>
                ))}
              </div>
              <Button
                className="mt-6 w-full"
                as={Link}
                href={tier.ctaLink}
                variant={tier.featured ? "brand" : "secondary"}
              >
                {tier.ctaText}
              </Button>
            </div>
          ))}
        </div>
      </Container>
      <DivideX />
      <Container className="border-divide hidden border-x lg:block">
        <div className="divide-divide grid grid-cols-1 lg:grid-cols-4 lg:divide-x">
          {tiers.map((tier, index) => (
            <div
              key={tier.title + "tier-list-of-items"}
              className="flex flex-col gap-4 p-4 md:p-8"
            >
              {tier.features.map((tierFeature, idx) => (
                <Step key={tierFeature + index + idx}>{tierFeature}</Step>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

const Step = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-charcoal-700 flex items-center gap-2 dark:text-neutral-100">
      <CheckIcon className="h-4 w-4 shrink-0" />
      {children}
    </div>
  );
};

const Price = ({ value }: { value: number }) => {
  return <SlidingNumber value={value} />;
};
