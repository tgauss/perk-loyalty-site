"use client";

import React, { useMemo } from "react";
import { Container } from "./container";
import { pricingTable, tiers, TierName } from "@/constants/pricing";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import Link from "next/link";

export const PricingTable = () => {
  const orderedTierNames: TierName[] = useMemo(
    () => [TierName.TIER_1, TierName.TIER_2, TierName.TIER_3, TierName.TIER_4],
    [],
  );

  const titleToPrice: Record<string, number | null> = useMemo(() => {
    const map: Record<string, number | null> = {};
    tiers.forEach((t) => {
      map[t.title] = t.monthly;
    });
    return map;
  }, []);

  return (
    <section>
      <Container className="border-divide border-x">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="">
              <tr className="border-divide divide-divide divide-x border-b">
                <th className="min-w-[220px] px-4 pt-12 pb-8 align-bottom text-sm font-medium text-gray-600 dark:text-neutral-200">
                  <div className="mb-2 text-lg font-medium text-gray-900 dark:text-neutral-100">
                    Compare Features
                  </div>
                  <div className="text-sm font-normal text-gray-600 dark:text-neutral-400">
                    See what's included in each plan
                  </div>
                </th>
                {orderedTierNames.map((tierName) => {
                  const price = titleToPrice[tierName];
                  return (
                    <th
                      key={`hdr-${tierName}`}
                      className="min-w-[200px] px-4 pt-12 pb-8 align-bottom"
                    >
                      <div className="text-charcoal-700 text-lg font-medium dark:text-neutral-100">
                        {tierName}
                      </div>
                      <div className="flex items-center text-sm font-normal text-gray-600 dark:text-neutral-300">
                        {price !== null ? (
                          <>
                            ${price.toLocaleString()}/month
                          </>
                        ) : (
                          "Custom pricing"
                        )}
                      </div>
                      <Button
                        as={Link}
                        href="/contact"
                        className="mt-4 w-full"
                        variant="secondary"
                      >
                        Book a Demo
                      </Button>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody className="">
              {pricingTable.map((row, index) => (
                <tr
                  key={row.title}
                  className={cn(
                    "border-divide divide-divide divide-x border-b",
                    index % 2 === 0 && "bg-gray-50 dark:bg-neutral-800",
                  )}
                >
                  <td className="text-charcoal-700 flex px-4 py-6 text-center text-sm dark:text-neutral-100">
                    {row.title}
                  </td>
                  {orderedTierNames.map((tierName) => {
                    const tierVal = row.tiers.find(
                      (t) => t.title === tierName,
                    )?.value;
                    return (
                      <td
                        key={`${row.title}-${tierName}`}
                        className="text-charcoal-700 mx-auto px-4 py-6 text-center text-sm dark:text-neutral-100"
                      >
                        {tierVal}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
};

export default PricingTable;
