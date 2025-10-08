"use client";
import {
  FacebookIcon,
  ForkIcon,
  MetaLogo,
} from "@/icons/general";
import { cn } from "@/lib/utils";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { DivideX } from "../divide";
import { motion, useMotionValue, useTransform } from "motion/react";
import { Card } from "../tech-card";
import { Scale } from "../scale";
import { LogoSVG } from "../logo";
import { IntegrationsLogo } from "@/icons/bento-icons";

// Instagram Icon
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="url(#instagram-gradient)"/>
    <defs>
      <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FD5" />
        <stop offset="50%" stopColor="#FF543E" />
        <stop offset="100%" stopColor="#C837AB" />
      </linearGradient>
    </defs>
  </svg>
);

// Shopify Icon
const ShopifyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M16.7 5.3c-.1 0-2.7-.2-2.7-.2s-1.5-1.5-1.7-1.7c-.2-.2-.6-.1-.7-.1 0 0-.2 0-.4.1-.3-.8-.8-1.6-1.6-1.6h-.1c-.5-.6-1.1-.9-1.7-.9-3.2 0-4.7 4-5.2 6-.9.3-1.6.5-1.7.5C.4 7.5.3 7.6.3 8c0 .3-2.6 20.2-2.6 20.2L15 22l7-1.5s-5.2-14.9-5.3-15.2zM13.4 5.5l-1.5.5c0-1.2-.2-2.4-.6-3.3.9.1 1.5 1.5 2.1 2.8zm-2.8-.8c.4.9.6 2.2.6 3.5l-2.5.8c.5-1.8 1.4-2.7 1.9-3.3zm-.5-1.6c.2 0 .4.1.6.2-.6.7-1.5 1.9-2.1 4.2l-2 .6c.5-1.8 2-5 3.5-5z" fill="#95BF47"/>
    <path d="M16.6 5.3s-2.7-.2-2.7-.2-1.5-1.5-1.7-1.7c-.1-.1-.2-.1-.4-.1l-1.5 18.7 7-1.5c0-.1-5.2-14.9-5.3-15.2h.1c.3 0 5.3 0 4.5 0z" fill="#5E8E3E"/>
    <path d="M9.7 9.1l-.8 2.4s-.9-.4-1.9-.4c-1.5 0-1.6.9-1.6 1.2 0 1.2 3.4 1.7 3.4 4.6 0 2.3-1.5 3.8-3.4 3.8-2.4 0-3.6-1.5-3.6-1.5l.6-2.1s1.2 1 2.3 1c.7 0 1-.6 1-.9 0-1.6-2.8-1.7-2.8-4.3 0-2.2 1.6-4.4 4.8-4.4 1.2-.1 1.8.2 1.8.2l1.2-1.6z" fill="#FFF"/>
  </svg>
);

// Website/Custom Platform Icon
const WebsiteIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor"/>
  </svg>
);

export const DesignYourWorkflowSkeleton = () => {
  return (
    <div className="mt-12 flex flex-col items-center">
      <div className="relative">
        <Card
          title="Your Brand"
          subtitle="yoursite.com"
          logo={<WebsiteIcon />}
          cta="Connected"
          tone="default"
        />
        <LeftSVG className="absolute top-12 -left-32" />
        <RightSVG className="absolute top-12 -right-32" />
        <CenterSVG className="absolute top-24 right-[107px]" />
      </div>

      <div className="mt-12 flex flex-row gap-4.5">
        <Card
          title="Facebook"
          subtitle="Posts & Ads"
          logo={<FacebookIcon />}
          cta="Auto-Ingest"
          tone="default"
          delay={0.2}
        />
        <Card
          title="Instagram"
          subtitle="Stories & Feed"
          logo={<InstagramIcon />}
          cta="Auto-Ingest"
          tone="danger"
          delay={0.4}
        />
        <Card
          title="Shopify"
          subtitle="E-Commerce"
          logo={<ShopifyIcon />}
          cta="Connected"
          tone="success"
          delay={0.6}
        />
      </div>
    </div>
  );
};

export const ConnectYourTooklsSkeleton = () => {
  const text = `Sarah W. earned +50 points for watching latest product video`;
  const [mounted, setMounted] = useState(false);
  const [points, setPoints] = useState(2450);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setPoints((prev) => prev + Math.floor(Math.random() * 100));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative flex h-full w-full items-center justify-between">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative h-70 w-60 -translate-x-2 rounded-2xl border-t border-gray-300 bg-white p-4 shadow-2xl md:translate-x-0 dark:border-neutral-700 dark:bg-neutral-900"
      >
        <div className="absolute -top-4 -right-4 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 shadow-xl">
          <span className="relative z-20 text-2xl">🎯</span>
        </div>
        <div className="mt-12 flex items-center gap-2">
          <IntegrationsLogo />
          <span className="text-charcoal-700 text-sm font-medium dark:text-neutral-200">
            Activity Feed
          </span>
        </div>
        <DivideX className="mt-2" />

        <div className="mt-4 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-charcoal-700 text-[10px] leading-loose font-normal md:text-xs dark:text-neutral-200">
              {text.split(/(\s+)/).map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.2,
                    delay: index * 0.02,
                    ease: "linear",
                  }}
                  className="inline-block"
                >
                  {word === " " ? "\u00A0" : word}
                </motion.span>
              ))}
            </span>
          </div>
        </div>
        <div className="mt-2 flex flex-col gap-2">
          {["Likes on Instagram", "Watched video"].map((label, index) => (
            <motion.div
              key={`activity-${index}`}
              initial={{
                width: "0%",
              }}
              animate={{
                width: `${60 + Math.random() * 40}%`,
              }}
              transition={{
                duration: 4,
                delay: index * 0.2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="flex items-center justify-between rounded-full bg-gray-100 px-3 py-1.5 dark:bg-neutral-800"
            >
              <span className="text-xs text-gray-600 dark:text-neutral-400">{label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute inset-x-0 z-30 hidden items-center justify-center md:flex"
      >
        <div className="size-3 rounded-full border-2 border-green-500 bg-white dark:bg-neutral-800" />
        <div className="h-[2px] w-38 bg-green-500" />
        <div className="size-3 rounded-full border-2 border-green-500 bg-white dark:bg-neutral-800" />
      </motion.div>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="relative h-70 w-60 translate-x-10 rounded-2xl border-t border-gray-300 bg-white p-4 shadow-2xl md:translate-x-0 dark:border-neutral-700 dark:bg-neutral-900"
      >
        <div className="absolute -top-4 -left-4 flex h-14 w-14 items-center justify-center rounded-lg bg-white shadow-xl dark:bg-neutral-800">
          <Scale />
          <LogoSVG className="relative z-20 h-8 w-8" />
        </div>
        <div className="mt-12 flex items-center gap-2">
          <IntegrationsLogo className="dark:text-neutral-200" />
          <span className="text-charcoal-700 text-xs font-medium md:text-sm dark:text-neutral-200">
            Points Ledger
          </span>
          <motion.span
            key={points}
            initial={{ scale: 1.2, color: "#10b981" }}
            animate={{ scale: 1, color: "#6b7280" }}
            transition={{ duration: 0.3 }}
            className="text-charcoal-700 rounded-lg border border-gray-200 bg-gray-50 px-2 py-0.5 text-xs font-bold dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-200"
          >
            {points.toLocaleString()}
          </motion.span>
        </div>
        <DivideX className="mt-2" />
        <div className="mt-4 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 shrink-0 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-xs">👍</span>
            </div>
            <span className="text-charcoal-700 text-xs font-medium md:text-sm dark:text-neutral-200">
              Social Engagement
            </span>
          </div>

          <div className="rounded-sm border border-green-500 bg-green-50 px-2 py-0.5 text-xs font-bold text-green-600">
            +250
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 shrink-0 rounded-full bg-purple-100 flex items-center justify-center">
              <span className="text-xs">🛒</span>
            </div>
            <span className="text-charcoal-700 text-xs font-medium md:text-sm dark:text-neutral-200">
              Purchase Reward
            </span>
          </div>

          <div className="rounded-sm border border-green-500 bg-green-50 px-2 py-0.5 text-xs font-bold text-green-600">
            +500
          </div>
        </div>
        <div className="mt-2 flex flex-col">
          {[85, 92, 78].map((width, index) => (
            <motion.div
              key={`points-bar-${index}`}
              initial={{
                width: `${width - 20}%`,
              }}
              animate={{
                width: `${width}%`,
              }}
              transition={{
                duration: 4,
                delay: index * 0.2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="mt-2 h-4 w-full rounded-full bg-gradient-to-r from-yellow-200 to-yellow-400 dark:from-yellow-800 dark:to-yellow-600"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export const DeployAndScaleSkeleton = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);

  // Define receipt validation cards data for reusability
  const deployCards = [
    { title: "Receipt: Target $45.23", subtitle: "2m ago", branch: "Approved", variant: "success" as const },
    { title: "Receipt: Walmart $32.10", subtitle: "5m ago", branch: "Approved", variant: "success" as const },
    { title: "Purchase: Online $89.99", subtitle: "8m ago", branch: "Verified", variant: "success" as const },
    { title: "Receipt: CVS $12.45", subtitle: "12m ago", branch: "Approved", variant: "success" as const },
    { title: "Receipt: Kroger $67.80", subtitle: "15m ago", branch: "Pending", variant: "warning" as const },
    { title: "Purchase: Online $125.00", subtitle: "18m ago", branch: "Verified", variant: "success" as const },
    { title: "Receipt: Walgreens $28.33", subtitle: "22m ago", branch: "Approved", variant: "success" as const },
    { title: "Receipt: Safeway $54.12", subtitle: "25m ago", branch: "Approved", variant: "success" as const },
    { title: "Purchase: Online $43.50", subtitle: "28m ago", branch: "Verified", variant: "success" as const },
    { title: "Receipt: Target $91.20", subtitle: "32m ago", branch: "Approved", variant: "success" as const },
    { title: "Receipt: Amazon $156.78", subtitle: "35m ago", branch: "Verified", variant: "success" as const },
    { title: "Receipt: Whole Foods $72.45", subtitle: "40m ago", branch: "Approved", variant: "success" as const },
  ];

  const extendedCards = [...deployCards, ...deployCards, ...deployCards];

  const cardHeight = 64;
  const gap = 4;
  const itemHeight = cardHeight + gap;
  const offset = (containerHeight - cardHeight) / 2;

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      const height = entries[0]?.contentRect.height ?? 0;
      setContainerHeight(height);
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const y = useMotionValue(0);
  const totalHeight = extendedCards.length * itemHeight;

  useEffect(() => {
    let animationFrame: number;
    let lastTime = performance.now();
    const speed = 30;

    function animateScroll(now: number) {
      const elapsed = (now - lastTime) / 1000;
      lastTime = now;
      let current = y.get();
      current -= speed * elapsed;

      if (Math.abs(current) >= totalHeight / 3) {
        current += totalHeight / 3;
      }
      y.set(current);
      animationFrame = requestAnimationFrame(animateScroll);
    }
    animationFrame = requestAnimationFrame(animateScroll);
    return () => cancelAnimationFrame(animationFrame);
  }, [y, totalHeight]);

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      ref={containerRef}
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
      }}
    >
      <motion.div
        className="absolute left-1/2 flex w-full -translate-x-1/2 flex-col items-center"
        style={{ y }}
      >
        {extendedCards.map((card, index) => (
          <motion.div
            key={`${index}-${card.title}`}
            className="mx-auto mt-4 w-full max-w-sm shrink-0 rounded-2xl shadow-xl"
            style={{
              scale: useTransform(
                y,
                [
                  offset + (index - 2) * -itemHeight,
                  offset + (index - 1) * -itemHeight,
                  offset + index * -itemHeight,
                  offset + (index + 1) * -itemHeight,
                  offset + (index + 2) * -itemHeight,
                ],
                [0.85, 0.95, 1.1, 0.95, 0.85],
              ),

              background: useTransform(
                y,
                [
                  offset + (index - 1) * -itemHeight,
                  offset + index * -itemHeight,
                  offset + (index + 1) * -itemHeight,
                ],
                ["#FFFFFF", "#f17463", "#FFFFFF"],
              ),
              borderColor: useTransform(
                y,
                [
                  offset + (index - 1) * -itemHeight,
                  offset + index * -itemHeight,
                  offset + (index + 1) * -itemHeight,
                ],
                ["#FFFFFF", "#f17463", "#FFFFFF"],
              ),
            }}
          >
            <DeployCard
              variant={card.variant}
              title={card.title}
              subtitle={card.subtitle}
              branch={card.branch}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const DeployCard = ({
  variant = "default",
  title,
  subtitle,
  branch,
}: {
  variant?: "default" | "danger" | "success" | "warning";
  title: string;
  subtitle: string;
  branch: string;
}) => {
  return (
    <div className="mx-auto flex w-full max-w-sm items-center justify-between rounded-lg p-3">
      <div className="flex items-center gap-2">
        <div
          className={cn(
            "flex h-6 w-6 items-center justify-center rounded-md text-sm",
            variant === "default" && "bg-gray-200",
            variant === "danger" && "bg-red-200",
            variant === "success" && "bg-green-200",
            variant === "warning" && "bg-yellow-200",
          )}
        >
          {variant === "success" && "✓"}
          {variant === "warning" && "⏱"}
          {variant === "danger" && "✗"}
          {variant === "default" && "📄"}
        </div>
        <span className="text-charcoal-700 text-xs font-medium sm:text-sm">
          {title}
        </span>
      </div>
      <div className="ml-2 flex flex-row items-center gap-2">
        <span className="text-charcoal-700 text-xs font-normal">
          {subtitle}
        </span>
        <div className="size-1 rounded-full bg-gray-400"></div>
        <span className={cn(
          "text-xs font-semibold",
          variant === "success" && "text-green-600",
          variant === "warning" && "text-yellow-600",
          variant === "danger" && "text-red-600",
          variant === "default" && "text-gray-600"
        )}>{branch}</span>
      </div>
    </div>
  );
};

const LeftSVG = (props: React.SVGProps<SVGSVGElement>) => {
  const path = `M127.457 0.0891113L127.576 95.9138L127.457 0.0891113ZM-0.0609919 96.0731L-0.160632 16.2484C-0.172351 6.85959 7.4293 -0.761068 16.8181 -0.772787L16.8206 1.22721C8.53637 1.23755 1.82903 7.96166 1.83937 16.2459L1.93901 96.0706L-0.0609919 96.0731ZM-0.160632 16.2484C-0.172351 6.85959 7.4293 -0.761068 16.8181 -0.772787L127.455 -0.910888L127.458 1.08911L16.8206 1.22721C8.53637 1.23755 1.82903 7.96166 1.83937 16.2459L-0.160632 16.2484ZM127.576 95.9138L0.939007 96.0718L127.576 95.9138Z`;
  return (
    <motion.svg
      width="128"
      height="97"
      viewBox="0 0 128 97"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className={props.className}
    >
      <mask id="path-1-inside-1_557_1106" fill="var(--color-line)">
        <path d="M127.457 0.0891113L127.576 95.9138L0.939007 96.0718L0.839368 16.2472C0.828338 7.41063 7.98283 0.238242 16.8194 0.227212L127.457 0.0891113Z" />
      </mask>
      <path
        d="M127.457 0.0891113L127.576 95.9138L127.457 0.0891113ZM-0.0609919 96.0731L-0.160632 16.2484C-0.172351 6.85959 7.4293 -0.761068 16.8181 -0.772787L16.8206 1.22721C8.53637 1.23755 1.82903 7.96166 1.83937 16.2459L1.93901 96.0706L-0.0609919 96.0731ZM-0.160632 16.2484C-0.172351 6.85959 7.4293 -0.761068 16.8181 -0.772787L127.455 -0.910888L127.458 1.08911L16.8206 1.22721C8.53637 1.23755 1.82903 7.96166 1.83937 16.2459L-0.160632 16.2484ZM127.576 95.9138L0.939007 96.0718L127.576 95.9138Z"
        fill="#EAEDF1"
        mask="url(#path-1-inside-1_557_1106)"
      />
      <path
        d="M127.457 0.0891113L127.576 95.9138L127.457 0.0891113ZM-0.0609919 96.0731L-0.160632 16.2484C-0.172351 6.85959 7.4293 -0.761068 16.8181 -0.772787L16.8206 1.22721C8.53637 1.23755 1.82903 7.96166 1.83937 16.2459L1.93901 96.0706L-0.0609919 96.0731ZM-0.160632 16.2484C-0.172351 6.85959 7.4293 -0.761068 16.8181 -0.772787L127.455 -0.910888L127.458 1.08911L16.8206 1.22721C8.53637 1.23755 1.82903 7.96166 1.83937 16.2459L-0.160632 16.2484ZM127.576 95.9138L0.939007 96.0718L127.576 95.9138Z"
        fill="url(#gradient-one)"
        mask="url(#path-1-inside-1_557_1106)"
      />
      {/* <rect d={path} width="128" height="97" fill="url(#gradient-one)" /> */}
      <defs>
        <motion.linearGradient
          id="gradient-one"
          initial={{
            x1: "100%",
            x2: "90%",
            y1: "90%",
            y2: "80%",
          }}
          animate={{
            x1: "20%",
            x2: "0%",
            y1: "90%",
            y2: "220%",
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatDelay: 2,
          }}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--color-line)" stopOpacity="0.5" offset="0" />
          <stop stopColor="#5787FF" stopOpacity="1" offset="0.5" />
          <stop stopColor="var(--color-line)" stopOpacity="0" offset="1" />
        </motion.linearGradient>
      </defs>
    </motion.svg>
  );
};

const RightSVG = (props: React.SVGProps<SVGSVGElement>) => {
  const PATH = `M0.619629 0L0.500018 95.8247L0.619629 0ZM128.137 95.984L128.237 16.1593C128.249 6.77047 120.647 -0.850179 111.258 -0.861898L111.256 1.1381C119.54 1.14844 126.247 7.87255 126.237 16.1568L126.137 95.9815L128.137 95.984ZM128.237 16.1593C128.249 6.77047 120.647 -0.850179 111.258 -0.861898L0.620877 -0.999999L0.618381 0.999999L111.256 1.1381C119.54 1.14844 126.247 7.87255 126.237 16.1568L128.237 16.1593ZM0.500018 95.8247L127.137 95.9827L0.500018 95.8247Z`;
  return (
    <motion.svg
      width="128"
      height="96"
      viewBox="0 0 128 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className={props.className}
    >
      <mask id="path-1-inside-1_557_1107" fill="var(--color-line)">
        <path d="M0.619629 0L0.500018 95.8247L127.137 95.9827L127.237 16.1581C127.248 7.32152 120.093 0.149131 111.257 0.138101L0.619629 0Z" />
      </mask>
      <path
        d="M0.619629 0L0.500018 95.8247L0.619629 0ZM128.137 95.984L128.237 16.1593C128.249 6.77047 120.647 -0.850179 111.258 -0.861898L111.256 1.1381C119.54 1.14844 126.247 7.87255 126.237 16.1568L126.137 95.9815L128.137 95.984ZM128.237 16.1593C128.249 6.77047 120.647 -0.850179 111.258 -0.861898L0.620877 -0.999999L0.618381 0.999999L111.256 1.1381C119.54 1.14844 126.247 7.87255 126.237 16.1568L128.237 16.1593ZM0.500018 95.8247L127.137 95.9827L0.500018 95.8247Z"
        fill="#EAEDF1"
        mask="url(#path-1-inside-1_557_1107)"
      />
      <path
        d="M0.619629 0L0.500018 95.8247L0.619629 0ZM128.137 95.984L128.237 16.1593C128.249 6.77047 120.647 -0.850179 111.258 -0.861898L111.256 1.1381C119.54 1.14844 126.247 7.87255 126.237 16.1568L126.137 95.9815L128.137 95.984ZM128.237 16.1593C128.249 6.77047 120.647 -0.850179 111.258 -0.861898L0.620877 -0.999999L0.618381 0.999999L111.256 1.1381C119.54 1.14844 126.247 7.87255 126.237 16.1568L128.237 16.1593ZM0.500018 95.8247L127.137 95.9827L0.500018 95.8247Z"
        fill="url(#gradient-two)"
        mask="url(#path-1-inside-1_557_1107)"
      />
      {/* <rect d={PATH} width="128" height="97" fill="url(#gradient-two)" /> */}

      <defs>
        <motion.linearGradient
          id="gradient-two"
          initial={{
            x1: "-10%",
            x2: "0%",
            y1: "0%",
            y2: "0%",
          }}
          animate={{
            x1: "100%",
            x2: "110%",
            y1: "110%",
            y2: "140%",
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatDelay: 2,
          }}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.5" offset="0" />
          <stop stopColor="#F17463" stopOpacity="1" offset="0.5" />
          <stop stopColor="white" stopOpacity="0" offset="1" />
        </motion.linearGradient>
      </defs>
    </motion.svg>
  );
};

const CenterSVG = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <motion.svg
      width="2"
      height="56"
      viewBox="0 0 2 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className={props.className}
    >
      <line x1="1" y1="56" x2="1" stroke="var(--color-line)" strokeWidth="2" />
      <line
        x1="1"
        y1="56"
        x2="1"
        stroke="url(#gradient-three)"
        strokeWidth="1"
      />
      <defs>
        <motion.linearGradient
          id="gradient-three"
          initial={{
            x1: "0%",
            x2: "0%",
            y1: "-100%",
            y2: "-90%",
          }}
          animate={{
            x1: "0%",
            x2: "0%",
            y1: "90%",
            y2: "100%",
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatDelay: 2,
          }}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--color-line)" stopOpacity="1" offset="0" />
          <stop stopColor="#F17463" stopOpacity="0.5" offset="0.5" />
          <stop stopColor="#F17463" stopOpacity="0" offset="1" />
        </motion.linearGradient>
      </defs>
    </motion.svg>
  );
};
