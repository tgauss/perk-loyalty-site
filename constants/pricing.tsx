import { CheckIcon } from "@/icons/card-icons";
import { CloseIcon } from "@/icons/general";

export enum TierName {
  TIER_1 = "Starter",
  TIER_2 = "Growth",
  TIER_3 = "Pro",
  TIER_4 = "Enterprise",
}

export const tiers = [
  {
    title: TierName.TIER_1,
    subtitle: "For brands getting started",
    monthly: 799,
    ctaText: "Book a Demo",
    ctaLink: "/contact",
    memberLimit: "Up to 5,000 members",
    features: [
      "Up to 5,000 members",
      "Unlimited campaigns",
      "Points, badges & tiers",
      "Social & email content ingestion",
      "Receipt validation (OCR)",
      "Basic analytics dashboard",
      "Email support",
      "Monthly strategy check-ins",
    ],
  },
  {
    title: TierName.TIER_2,
    subtitle: "Most popular for growing brands",
    monthly: 3799,
    ctaText: "Book a Demo",
    ctaLink: "/contact",
    memberLimit: "Up to 25,000 members",
    features: [
      "Up to 25,000 members",
      "Everything in Starter, plus:",
      "Advanced gamification mechanics",
      "Custom challenges & missions",
      "API access for integrations",
      "Priority support",
      "Bi-weekly strategy sessions",
      "Custom branding options",
    ],
    featured: true,
  },
  {
    title: TierName.TIER_3,
    subtitle: "For established programs",
    monthly: 5999,
    ctaText: "Book a Demo",
    ctaLink: "/contact",
    memberLimit: "Up to 50,000 members",
    features: [
      "Up to 50,000 members",
      "Everything in Growth, plus:",
      "Dedicated account manager",
      "Advanced analytics & reporting",
      "Custom integrations",
      "White-label options",
      "Weekly strategic planning",
      "Priority feature requests",
    ],
  },
  {
    title: TierName.TIER_4,
    subtitle: "For large-scale operations",
    monthly: null,
    ctaText: "Contact Sales",
    ctaLink: "/contact",
    memberLimit: "150,000+ members",
    features: [
      "150,000+ members",
      "Everything in Pro, plus:",
      "Enterprise SLA",
      "Custom development",
      "Dedicated support team",
      "Advanced security features",
      "Custom contracts & terms",
      "Unlimited integrations",
    ],
  },
];

export const pricingTable = [
  {
    title: "Member Limit",
    tiers: [
      {
        title: TierName.TIER_1,
        value: "5,000",
      },
      {
        title: TierName.TIER_2,
        value: "25,000",
      },
      {
        title: TierName.TIER_3,
        value: "50,000",
      },
      {
        title: TierName.TIER_4,
        value: "150,000+",
      },
    ],
  },
  {
    title: "Emails per Month",
    tiers: [
      {
        title: TierName.TIER_1,
        value: "75,000",
      },
      {
        title: TierName.TIER_2,
        value: "200,000",
      },
      {
        title: TierName.TIER_3,
        value: "400,000",
      },
      {
        title: TierName.TIER_4,
        value: "Custom",
      },
    ],
  },
  {
    title: "Receipts/Orders per Month",
    tiers: [
      {
        title: TierName.TIER_1,
        value: "500",
      },
      {
        title: TierName.TIER_2,
        value: "2,500",
      },
      {
        title: TierName.TIER_3,
        value: "5,000",
      },
      {
        title: TierName.TIER_4,
        value: "Custom",
      },
    ],
  },
  {
    title: "Campaigns",
    tiers: [
      {
        title: TierName.TIER_1,
        value: "Unlimited",
      },
      {
        title: TierName.TIER_2,
        value: "Unlimited",
      },
      {
        title: TierName.TIER_3,
        value: "Unlimited",
      },
      {
        title: TierName.TIER_4,
        value: "Unlimited",
      },
    ],
  },
  {
    title: "Content Ingestion",
    tiers: [
      {
        title: TierName.TIER_1,
        value: "Social & Email",
      },
      {
        title: TierName.TIER_2,
        value: "Social & Email",
      },
      {
        title: TierName.TIER_3,
        value: "All Channels",
      },
      {
        title: TierName.TIER_4,
        value: "All Channels",
      },
    ],
  },
  {
    title: "Receipt Validation (OCR)",
    tiers: [
      {
        title: TierName.TIER_1,
        value: <CheckIcon className="mx-auto size-5 text-gray-600" />,
      },
      {
        title: TierName.TIER_2,
        value: <CheckIcon className="mx-auto size-5 text-gray-600" />,
      },
      {
        title: TierName.TIER_3,
        value: <CheckIcon className="mx-auto size-5 text-gray-600" />,
      },
      {
        title: TierName.TIER_4,
        value: <CheckIcon className="mx-auto size-5 text-gray-600" />,
      },
    ],
  },
  {
    title: "Gamification",
    tiers: [
      {
        title: TierName.TIER_1,
        value: "Points, Badges, Tiers",
      },
      {
        title: TierName.TIER_2,
        value: "Advanced Mechanics",
      },
      {
        title: TierName.TIER_3,
        value: "Full Customization",
      },
      {
        title: TierName.TIER_4,
        value: "Full Customization",
      },
    ],
  },
  {
    title: "API Access",
    tiers: [
      {
        title: TierName.TIER_1,
        value: <CloseIcon className="mx-auto size-5 text-gray-600" />,
      },
      {
        title: TierName.TIER_2,
        value: <CheckIcon className="mx-auto size-5 text-gray-600" />,
      },
      {
        title: TierName.TIER_3,
        value: <CheckIcon className="mx-auto size-5 text-gray-600" />,
      },
      {
        title: TierName.TIER_4,
        value: <CheckIcon className="mx-auto size-5 text-gray-600" />,
      },
    ],
  },
  {
    title: "Custom Integrations",
    tiers: [
      {
        title: TierName.TIER_1,
        value: <CloseIcon className="mx-auto size-5 text-gray-600" />,
      },
      {
        title: TierName.TIER_2,
        value: <CloseIcon className="mx-auto size-5 text-gray-600" />,
      },
      {
        title: TierName.TIER_3,
        value: <CheckIcon className="mx-auto size-5 text-gray-600" />,
      },
      {
        title: TierName.TIER_4,
        value: "Unlimited",
      },
    ],
  },
  {
    title: "Analytics & Reporting",
    tiers: [
      {
        title: TierName.TIER_1,
        value: "Basic Dashboard",
      },
      {
        title: TierName.TIER_2,
        value: "Basic Dashboard",
      },
      {
        title: TierName.TIER_3,
        value: "Advanced Analytics",
      },
      {
        title: TierName.TIER_4,
        value: "Advanced Analytics",
      },
    ],
  },
  {
    title: "White-Label Options",
    tiers: [
      {
        title: TierName.TIER_1,
        value: <CloseIcon className="mx-auto size-5 text-gray-600" />,
      },
      {
        title: TierName.TIER_2,
        value: <CloseIcon className="mx-auto size-5 text-gray-600" />,
      },
      {
        title: TierName.TIER_3,
        value: <CheckIcon className="mx-auto size-5 text-gray-600" />,
      },
      {
        title: TierName.TIER_4,
        value: <CheckIcon className="mx-auto size-5 text-gray-600" />,
      },
    ],
  },
  {
    title: "Support",
    tiers: [
      {
        title: TierName.TIER_1,
        value: "Email",
      },
      {
        title: TierName.TIER_2,
        value: "Priority",
      },
      {
        title: TierName.TIER_3,
        value: "Dedicated Manager",
      },
      {
        title: TierName.TIER_4,
        value: "Dedicated Team",
      },
    ],
  },
  {
    title: "Strategy Sessions",
    tiers: [
      {
        title: TierName.TIER_1,
        value: "Monthly",
      },
      {
        title: TierName.TIER_2,
        value: "Bi-weekly",
      },
      {
        title: TierName.TIER_3,
        value: "Weekly",
      },
      {
        title: TierName.TIER_4,
        value: "On-demand",
      },
    ],
  },
  {
    title: "Custom Branding",
    tiers: [
      {
        title: TierName.TIER_1,
        value: <CloseIcon className="mx-auto size-5 text-gray-600" />,
      },
      {
        title: TierName.TIER_2,
        value: <CheckIcon className="mx-auto size-5 text-gray-600" />,
      },
      {
        title: TierName.TIER_3,
        value: <CheckIcon className="mx-auto size-5 text-gray-600" />,
      },
      {
        title: TierName.TIER_4,
        value: <CheckIcon className="mx-auto size-5 text-gray-600" />,
      },
    ],
  },
  {
    title: "Enterprise SLA",
    tiers: [
      {
        title: TierName.TIER_1,
        value: <CloseIcon className="mx-auto size-5 text-gray-600" />,
      },
      {
        title: TierName.TIER_2,
        value: <CloseIcon className="mx-auto size-5 text-gray-600" />,
      },
      {
        title: TierName.TIER_3,
        value: <CloseIcon className="mx-auto size-5 text-gray-600" />,
      },
      {
        title: TierName.TIER_4,
        value: <CheckIcon className="mx-auto size-5 text-gray-600" />,
      },
    ],
  },
  {
    title: "Custom Development",
    tiers: [
      {
        title: TierName.TIER_1,
        value: <CloseIcon className="mx-auto size-5 text-gray-600" />,
      },
      {
        title: TierName.TIER_2,
        value: <CloseIcon className="mx-auto size-5 text-gray-600" />,
      },
      {
        title: TierName.TIER_3,
        value: <CloseIcon className="mx-auto size-5 text-gray-600" />,
      },
      {
        title: TierName.TIER_4,
        value: <CheckIcon className="mx-auto size-5 text-gray-600" />,
      },
    ],
  },
];
