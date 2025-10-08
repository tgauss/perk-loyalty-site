"use client";
import React from "react";
import { Container } from "./container";
import { Heading } from "./heading";
import { ShimmerText } from "./shimmer-text";
import { SubHeading } from "./subheading";
import { GartnerLogo, GartnerLogoText, Star } from "@/icons/general";
import { motion } from "motion/react";
import { Button } from "./button";
import { Badge } from "./badge";
import Link from "next/link";

export const Hero = () => {
  return (
    <Container className="border-divide flex flex-col items-center justify-center border-x px-4 pt-10 pb-10 md:pt-32 md:pb-20">
      <Badge text="Loyalty made easy" />
      <Heading className="mt-4">
        Turn content into <br /> loyalty{" "}
        <span className="text-brand">rewards</span>
      </Heading>

      <SubHeading className="mx-auto mt-6 max-w-lg">
        Gamify your existing content, commerce, and communications into a fan club
        that rewards customers for staying connected and shopping—automatically.
      </SubHeading>

      <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row">
        <Button as={Link} href="/contact">
          Book a Demo
        </Button>
        <Button variant="secondary" as={Link} href="/pricing">
          View pricing
        </Button>
      </div>
      <div className="mt-8 flex flex-col items-center gap-4 text-center">
        <p className="text-sm font-medium text-gray-600 dark:text-neutral-400">
          Trusted by leading brands
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 dark:text-neutral-400">
          <span className="font-medium">M&M's Fun Club</span>
          <span className="text-gray-400">•</span>
          <span className="font-medium">Pedigree Good Points</span>
          <span className="text-gray-400">•</span>
          <span className="font-medium">Ohio State Buckeye Nation</span>
        </div>
      </div>
    </Container>
  );
};
