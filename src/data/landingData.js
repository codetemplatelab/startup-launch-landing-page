import {
  Sparkles,
  Zap,
  ShieldCheck,
  BarChart3,
  Workflow,
  Cloud,
  Rocket,
  Users,
  Code2,
  Layers,
  LineChart,
  Laptop,
  Bot,
  Compass,
  Globe2,
} from "lucide-react";

export const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Features", href: "#features" },
  { label: "Demo", href: "#demo" },
  { label: "How It Works", href: "#how" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Insights", href: "#insights" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const stats = [
  { label: "Launches powered", value: "1,240+" },
  { label: "Avg. time to ship", value: "14 days" },
  { label: "Global teams", value: "98 countries" },
];

export const features = [
  {
    icon: Sparkles,
    title: "Brand-ready sections",
    description: "Launch messaging that feels premium from day one with bold visuals and clear hierarchy.",
  },
  {
    icon: Zap,
    title: "Conversion-first CTAs",
    description: "Strategically placed call-to-action blocks that guide users into your funnel.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by design",
    description: "Trust-building UI and privacy-first layout patterns that reinforce credibility.",
  },
  {
    icon: BarChart3,
    title: "Insightful analytics",
    description: "Showcase your metrics with clean data cards and interactive trends.",
  },
  {
    icon: Workflow,
    title: "Frictionless onboarding",
    description: "Guide new users from signup to activation with a polished flow.",
  },
  {
    icon: Cloud,
    title: "Scalable architecture",
    description: "Component-driven structure that keeps your marketing site agile.",
  },
];

export const steps = [
  {
    icon: Rocket,
    title: "Create an account",
    description: "Start with a simple signup flow and instantly unlock your launch dashboard.",
  },
  {
    icon: Layers,
    title: "Craft your product",
    description: "Customize messaging, visuals, and pricing using ready-made sections.",
  },
  {
    icon: LineChart,
    title: "Launch to customers",
    description: "Go live with analytics, onboarding, and retention flows already designed.",
  },
];

export const useCases = [
  {
    icon: Users,
    title: "Startup founders",
    description: "Position your vision fast with compelling storytelling and strong CTAs.",
  },
  {
    icon: Laptop,
    title: "Product teams",
    description: "Collaborate on launch messaging and build stakeholder confidence.",
  },
  {
    icon: Code2,
    title: "Developers",
    description: "Ship an MVP-ready site with modern components and clean code.",
  },
  {
    icon: Bot,
    title: "AI & SaaS platforms",
    description: "Show off automation, analytics, and value-driven product benefits.",
  },
];

export const testimonials = [
  {
    name: "Alicia Chang",
    company: "Lumen Labs",
    role: "Co-founder",
    quote:
      "We launched in under two weeks. The layout and animations felt like a premium agency deliverable.",
  },
  {
    name: "Marcus Hale",
    company: "Orbitly",
    role: "Head of Product",
    quote:
      "The template gave us a polished narrative and a clear path to conversion for our beta waitlist.",
  },
  {
    name: "Priya Nair",
    company: "Cascade AI",
    role: "Growth Lead",
    quote:
      "Every section is deliberate. We improved activation rates by 28% after switching.",
  },
  {
    name: "Jonas Richter",
    company: "Northwind",
    role: "CEO",
    quote:
      "Investors loved the clarity. The dashboard visuals and pricing section closed the loop.",
  },
];

export const pricing = [
  {
    name: "Starter",
    price: "$29",
    description: "Launch fast with the essentials for early-stage teams.",
    features: [
      "All landing page sections",
      "Basic analytics cards",
      "Email capture form",
      "Community support",
    ],
  },
  {
    name: "Pro",
    price: "$79",
    description: "Everything you need to scale a new product launch.",
    features: [
      "Dashboard templates",
      "Auth-ready layouts",
      "Advanced animations",
      "Priority updates",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "White-glove experience for venture-backed launches.",
    features: [
      "Dedicated onboarding",
      "Custom integrations",
      "Design review call",
      "Extended license",
    ],
  },
];

export const faqs = [
  {
    question: "Is this ready for production?",
    answer:
      "Yes. The template ships with responsive layouts, clean code, and SEO-ready metadata so you can deploy quickly.",
  },
  {
    question: "Can I customize the sections?",
    answer:
      "Every section is component-based and data-driven. Update colors, content, or layout without touching core logic.",
  },
  {
    question: "Does it include authentication screens?",
    answer:
      "You get polished sign-in and sign-up pages with validation states, plus a sample dashboard experience.",
  },
  {
    question: "Which tools are used?",
    answer:
      "React, Vite, Tailwind CSS, Framer Motion, GSAP, Three.js, and curated animation libraries.",
  },
];

export const announcement = {
  badge: "New",
  title: "Startup Launch Kit is now live",
  description: "Join 1,200+ founders preparing for their next product drop.",
  cta: "Join the waitlist",
};

export const heroHighlights = [
  { icon: Compass, title: "Strategic positioning", meta: "Launch messaging framework" },
  { icon: Globe2, title: "Global-ready", meta: "Multi-region rollout" },
];
