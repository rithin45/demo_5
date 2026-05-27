import {
  BadgeCheck,
  BrainCircuit,
  Compass,
  Crown,
  Gem,
  Globe2,
  Mic2,
  Radar,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Ticket,
  Users,
  WandSparkles,
} from "lucide-react";

export const eventDetails = {
  name: "Astra Nova 2026",
  tagline:
    "A cinematic summit for founders, designers, and AI product teams shaping the next decade.",
  dateLabel: "21 November 2026",
  location: "Bengaluru, India",
  isoDate: "2026-11-21T18:00:00+05:30",
  shortBlurb:
    "An invitation-only night of keynote launches, founder salons, immersive workshops, and after-hours networking inside a premium, futuristic venue.",
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Pricing", to: "/pricing" },
  { label: "Contact", to: "/#contact" },
];

export const heroMetrics = [
  { value: "1.2K", label: "Curated attendees" },
  { value: "42", label: "World-class speakers" },
  { value: "18", label: "Countries represented" },
];

export const stats = [
  { value: "36", label: "Immersive sessions", note: "Live demos, founder stories, and product deep dives." },
  { value: "08", label: "Signature lounges", note: "Private spaces for VIP networking and team strategy." },
  { value: "94%", label: "Return attendee rate", note: "Built for leaders who care about signal over noise." },
  { value: "$12M+", label: "Partnerships sparked", note: "A showcase for meaningful introductions and investment." },
];

export const highlights = [
  {
    title: "Launch-stage keynotes",
    description:
      "Cinematic talks from operators building category-defining products across AI, design, and modern commerce.",
    icon: Rocket,
  },
  {
    title: "Immersive demo galleries",
    description:
      "Step through interactive environments where prototypes, motion systems, and product stories come alive.",
    icon: WandSparkles,
  },
  {
    title: "Founder matchmaking",
    description:
      "Private roundtables designed to connect investors, creative leaders, and high-growth teams with shared momentum.",
    icon: Radar,
  },
  {
    title: "Precision-crafted hospitality",
    description:
      "From concierge arrival to late-night afterglow, every detail is designed to feel intimate, elevated, and unforgettable.",
    icon: Crown,
  },
];

export const sponsors = [
  "Framer",
  "Stripe",
  "Vercel",
  "Figma",
  "Notion",
  "Linear",
  "Arc",
  "Perplexity",
];

export const testimonials = [
  {
    quote:
      "Astra Nova felt less like a conference and more like the future arriving in real time. Every room had intent.",
    name: "Naina Kapoor",
    title: "VP Product, Northstar Labs",
  },
  {
    quote:
      "The production value was exceptional, but what stood out most was the quality of people in the room.",
    name: "Arjun Malhotra",
    title: "Founder, Circuit House",
  },
  {
    quote:
      "It delivered the elegance of a luxury launch event with the density of a world-class operator summit.",
    name: "Mia Fernandes",
    title: "Design Director, Aether Studio",
  },
];

export const faqs = [
  {
    question: "Who is Astra Nova built for?",
    answer:
      "The experience is designed for founders, product leaders, investors, designers, and creative technologists who value deep conversations and beautifully crafted environments.",
  },
  {
    question: "Will sessions be recorded?",
    answer:
      "Selected stage sessions will be captured for pass holders, but roundtables, matchmaking rooms, and salon discussions remain private by design.",
  },
  {
    question: "Is there a startup team package?",
    answer:
      "Yes. Pro and VIP passes can be reserved for teams, and we also support curated group registrations through the ticket registration form.",
  },
  {
    question: "Can international guests attend?",
    answer:
      "Absolutely. Astra Nova welcomes a global audience, and our concierge team shares hotel, transfer, and arrival guidance once registration is confirmed.",
  },
  {
    question: "What makes the VIP pass different?",
    answer:
      "VIP unlocks private lounges, speaker dinners, concierge fast-track access, and priority placement in founder and investor roundtables.",
  },
];

export const aboutStory = {
  eyebrow: "Built with intention",
  title: "Astra Nova started as a response to generic industry events.",
  description:
    "We wanted to create a gathering where every visual, speaker, conversation, and transition feels considered. No crowded expo halls. No filler talks. Just a sharply curated environment where ambitious people can think bigger together.",
};

export const missionVision = [
  {
    title: "Mission",
    text: "Design the most thoughtfully curated event for builders who care about product craft, brand experience, and meaningful momentum.",
    icon: Compass,
  },
  {
    title: "Vision",
    text: "Become the benchmark for premium founder experiences across Asia, blending conference substance with the emotion of a world-class launch show.",
    icon: Globe2,
  },
];

export const timeline = [
  {
    year: "2023",
    title: "The first salon",
    description: "A small private dinner for 40 operators sparked the idea for a more cinematic community gathering.",
  },
  {
    year: "2024",
    title: "Pilot edition",
    description: "Astra Nova welcomed 250 attendees and sold out in under three weeks, proving appetite for a more elevated format.",
  },
  {
    year: "2025",
    title: "Regional expansion",
    description: "We added immersive demo zones, expanded international participation, and launched partner lounges.",
  },
  {
    year: "2026",
    title: "Flagship summit",
    description: "The next edition scales the experience with richer storytelling, deeper networking, and a sharper hospitality layer.",
  },
];

export const team = [
  {
    name: "Rhea Sanyal",
    role: "Creative Director",
    bio: "Shapes Astra Nova's cinematic world-building, stage language, and experience design.",
  },
  {
    name: "Kabir Mehta",
    role: "Head of Programming",
    bio: "Curates speaker arcs, product showcases, and founder conversations with ruthless quality standards.",
  },
  {
    name: "Sara D'Souza",
    role: "Partnerships Lead",
    bio: "Builds brand partnerships that add signal, not noise, to the summit ecosystem.",
  },
  {
    name: "Dev Anand",
    role: "Guest Experience Lead",
    bio: "Owns the guest journey from arrival concierge to VIP after-hours hospitality.",
  },
];

export const achievements = [
  { label: "Featured partnerships", value: "60+" , icon: ShieldCheck },
  { label: "Speaker NPS", value: "4.9/5", icon: BadgeCheck },
  { label: "Investor meetings hosted", value: "180+", icon: BrainCircuit },
  { label: "Experiential installations", value: "14", icon: Sparkles },
];

export const pricingPlans = [
  {
    name: "Basic Pass",
    featured: false,
    description: "For solo attendees who want the full stage program and community energy.",
    monthlyPrice: 29,
    yearlyPrice: 290,
    icon: Ticket,
    features: [
      "Main stage access",
      "Community lounge entry",
      "Session recordings",
      "Welcome kit and badge",
    ],
  },
  {
    name: "Pro Pass",
    featured: true,
    description: "For operators and startups who want premium access, workshops, and curated networking.",
    monthlyPrice: 79,
    yearlyPrice: 790,
    icon: Star,
    features: [
      "Everything in Basic",
      "Workshop and roundtable access",
      "Priority registration for side events",
      "Team concierge support",
      "Private founder mixer",
    ],
  },
  {
    name: "VIP Pass",
    featured: false,
    description: "For leaders who want white-glove hospitality, intimate rooms, and post-event access.",
    monthlyPrice: 149,
    yearlyPrice: 1490,
    icon: Gem,
    features: [
      "Everything in Pro",
      "VIP fast-track check-in",
      "Speaker dinner invitation",
      "Backstage hospitality suite",
      "Astra Circle annual membership",
    ],
  },
];

export const contactDetails = [
  {
    title: "General enquiries",
    value: "hello@astranova.events",
    icon: Mic2,
  },
  {
    title: "Partnership desk",
    value: "partners@astranova.events",
    icon: Sparkles,
  },
  {
    title: "Venue",
    value: "Skyline Forum, Bengaluru",
    icon: Users,
  },
];
