"use client";
import React from "react";
import { Container } from "./container";
import { Badge } from "./badge";
import { SectionHeading } from "./seciton-heading";
import { CheckIcon } from "@/icons/card-icons";
import { Button } from "./button";
import Link from "next/link";

const setupPackages = [
  {
    title: "Standard Setup",
    price: 3500,
    description: "Perfect for straightforward implementations",
    features: [
      "Kickoff workshop",
      "Standard logic configuration",
      "Pre-built connector (e.g., Shopify)",
      "1 training session",
      "QA support",
    ],
  },
  {
    title: "Advanced Integration",
    price: 7500,
    priceLabel: "Starting at",
    description: "For custom integrations and advanced rules",
    features: [
      "Advanced & custom rule logic",
      "Custom API integration (1 system)",
      "Multiple training sessions",
      "QA support",
    ],
    featured: true,
  },
  {
    title: "Bespoke Implementation",
    price: 15000,
    priceLabel: "Starting at",
    description: "Fully custom for complex requirements",
    features: [
      "Fully custom program design",
      "Complex & multi-system integrations",
      "Dedicated project management",
      "Comprehensive training program",
      "Premium launch support",
    ],
  },
];

export const SetupFees = () => {
  return (
    <section className="">
      <Container className="border-divide flex flex-col items-center justify-center border-x px-4 pt-20 pb-10">
        <Badge text="Onboarding" />
        <SectionHeading className="mt-4">
          Every Plan Starts with a Successful Launch
        </SectionHeading>
        <p className="mt-4 max-w-3xl text-center text-gray-600 dark:text-neutral-400">
          To ensure your loyalty program is perfectly tailored to your brand and integrated seamlessly with your systems, every new program begins with a one-time onboarding and setup package.
        </p>
      </Container>
      <Container className="border-divide border-x px-4 pb-20">
        <div className="divide-divide grid grid-cols-1 divide-y md:grid-cols-3 md:divide-x md:divide-y-0">
          {setupPackages.map((pkg) => (
            <div
              className={`p-6 md:p-8 ${
                pkg.featured
                  ? "bg-brand/5 dark:bg-brand/10 relative"
                  : ""
              }`}
              key={pkg.title}
            >
              {pkg.featured && (
                <div className="absolute top-0 right-0 left-0 flex justify-center">
                  <span className="bg-brand text-white rounded-b-lg px-3 py-1 text-xs font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <div className={pkg.featured ? "mt-4" : ""}>
                <h3 className="text-charcoal-700 text-xl font-medium dark:text-neutral-100">
                  {pkg.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                  {pkg.description}
                </p>
                <div className="mt-4">
                  <span className="flex items-baseline text-2xl font-medium dark:text-white">
                    {pkg.priceLabel && (
                      <span className="mr-2 text-sm font-normal text-gray-600 dark:text-neutral-400">
                        {pkg.priceLabel}
                      </span>
                    )}
                    ${pkg.price.toLocaleString()}
                    <span className="ml-2 text-sm font-normal text-gray-600 dark:text-neutral-400">
                      one-time
                    </span>
                  </span>
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  {pkg.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="text-charcoal-700 flex items-start gap-2 text-sm dark:text-neutral-100"
                    >
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className="mt-6 w-full"
                  as={Link}
                  href="/contact"
                  variant={pkg.featured ? "brand" : "secondary"}
                >
                  Book a Demo
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
