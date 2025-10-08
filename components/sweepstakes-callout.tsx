"use client";
import React from "react";
import { Container } from "./container";
import { Button } from "./button";
import { Badge } from "./badge";
import { SectionHeading } from "./seciton-heading";
import { CheckIcon } from "@/icons/card-icons";
import Link from "next/link";

export const SweepstakesCallout = () => {
  return (
    <section className="">
      <Container className="border-divide border-x px-4 py-20">
        <div className="bg-brand/5 dark:bg-brand/10 relative overflow-hidden rounded-2xl border border-gray-200 p-8 dark:border-neutral-700 md:p-12">
          <div className="relative z-10">
            <Badge text="Special Offering" />
            <SectionHeading className="mt-4 text-left">
              Managed Sweepstakes Campaign
            </SectionHeading>
            <p className="mt-4 max-w-3xl text-lg text-gray-600 dark:text-neutral-400">
              Launch a fully-managed, 4-month sweepstakes campaign with our expert team handling everything from strategy to execution.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="text-charcoal-700 mb-4 text-lg font-medium dark:text-neutral-100">
                  What's Included
                </h4>
                <div className="flex flex-col gap-3">
                  <div className="text-charcoal-700 flex items-start gap-2 dark:text-neutral-100">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0" />
                    <span>Complete campaign strategy & planning</span>
                  </div>
                  <div className="text-charcoal-700 flex items-start gap-2 dark:text-neutral-100">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0" />
                    <span>Legal compliance & prize fulfillment</span>
                  </div>
                  <div className="text-charcoal-700 flex items-start gap-2 dark:text-neutral-100">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0" />
                    <span>Platform setup & configuration</span>
                  </div>
                  <div className="text-charcoal-700 flex items-start gap-2 dark:text-neutral-100">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0" />
                    <span>Ongoing optimization & support</span>
                  </div>
                  <div className="text-charcoal-700 flex items-start gap-2 dark:text-neutral-100">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0" />
                    <span>Performance analytics & reporting</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <div className="mb-4 inline-flex items-baseline rounded-lg bg-white px-4 py-3 dark:bg-neutral-800">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      $25,000
                    </span>
                    <span className="ml-2 text-gray-600 dark:text-neutral-400">
                      / 4 months
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-neutral-400">
                    Perfect for brands looking to drive rapid engagement growth with a proven sweepstakes strategy.
                  </p>
                </div>

                <Button
                  as={Link}
                  href="/contact"
                  variant="brand"
                  className="mt-6 w-full md:w-auto"
                >
                  Book a Demo
                </Button>
              </div>
            </div>
          </div>

          {/* Decorative background gradient */}
          <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-gray-100 to-transparent opacity-50 dark:from-neutral-800" />
        </div>
      </Container>
    </section>
  );
};
