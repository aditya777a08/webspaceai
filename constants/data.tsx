
import React from 'react';
import { CardData, FooterLinkColumn } from '../types';
import { StoryIcon, ModernaLogo, ArrowRightIcon } from '../components/icons';

export const heroSlides = [
  {
    title: 'Spring Update',
    description: 'Introducing GPT-4o and making more capabilities available for free in ChatGPT.',
    imageUrl: 'https://picsum.photos/seed/spring/1200/600',
    buttonText: 'Learn more',
  },
  {
    title: 'Explore Our Research',
    description: 'Advancing AI to benefit all of humanity.',
    imageUrl: 'https://picsum.photos/seed/research/1200/600',
    buttonText: 'See publications',
  },
  {
    title: 'AI for Business',
    description: 'Deploy the world\'s most capable models in your own applications.',
    imageUrl: 'https://picsum.photos/seed/business/1200/600',
    buttonText: 'Discover our APIs',
  },
  {
    title: 'Join Our Team',
    description: 'Help us build the future of artificial intelligence.',
    imageUrl: 'https://picsum.photos/seed/team/1200/600',
    buttonText: 'View careers',
  },
];

export const chatGptCards: CardData[] = [
  {
    category: 'For Everyone',
    title: 'Let your imagination run wild',
    imageUrl: 'https://picsum.photos/seed/everyone/600/600',
  },
  {
    category: 'For Teams',
    title: 'A superassistant for every member of your team',
    imageUrl: 'https://picsum.photos/seed/teams/600/600',
  },
];

export const researchCards: CardData[] = [
  {
    category: 'GPT-4o',
    date: 'May 13, 2024',
    title: 'Hello GPT-4o',
    imageUrl: 'https://picsum.photos/seed/gpt4o/600/800',
  },
  {
    category: 'Sora',
    title: 'Video generation models as world simulators',
    imageUrl: 'https://picsum.photos/seed/sora/600/800',
  },
];

export const businessCards: CardData[] = [
  {
    category: 'OpenAI for business',
    title: 'Explore AI solutions for companies of all sizes',
    imageUrl: 'https://picsum.photos/seed/aisolutions/600/600',
  },
  {
    category: 'ChatGPT Enterprise',
    title: 'Empower your entire workforce with Enterprise-grade AI',
    imageUrl: 'https://picsum.photos/seed/enterprise/600/600',
  },
];

export const developerCards: CardData[] = [
  {
    category: 'API',
    title: 'Start building with a simple API call',
    imageUrl: 'https://picsum.photos/seed/api/600/600',
  },
  {
    category: 'Quickstart',
    title: 'Get up and running with our API',
    linkText: '',
    codeSnippet: {
      lang: 'python',
      code: `1 from openai import OpenAI
2 client = OpenAI()
3 
4 response = client.chat.completions.create(
5   model="gpt-3.5-turbo",
6   messages=[
7     {"role": "system", "content": "You are a helpful assistant."},
8     {"role": "user", "content": "Who won the world series in 2020?"},
9     {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
10    {"role": "user", "content": "Where was it played?"}
11  ]
12)`
    }
  },
];

export const storiesCards: CardData[] = [
  {
    category: 'Story',
    logo: <StoryIcon className="w-16 h-16" />,
    title: 'Lifespan uses GPT-4 to improve health literacy and patient outcomes.',
    bgColor: 'bg-slate-700',
  },
  {
    category: 'Story',
    logo: <ModernaLogo className="w-32 h-16"/>,
    title: 'Developing life-saving treatments',
    bgColor: 'bg-red-700',
  },
];

export const newsCards: CardData[] = [
  {
    category: 'Company',
    date: 'Jun 10, 2024',
    title: 'OpenAI and Apple announce partnership',
    imageUrl: 'https://picsum.photos/seed/apple/600/600',
  },
  {
    category: 'Company',
    date: 'May 8, 2024',
    title: 'Introducing the Model Spec',
    imageUrl: 'https://picsum.photos/seed/modelspec/600/600',
  },
];

export const menuLinks: FooterLinkColumn[] = [
    {
        title: "Research",
        links: [
            { text: "Overview", href: "#" },
            { text: "Index", href: "#" },
            { text: "GPT-4o", href: "#" },
            { text: "Sora", href: "#" },
        ],
    },
    {
        title: "Products",
        links: [
            { text: "ChatGPT", href: "#" },
            { text: "API", href: "#" },
            { text: "Pricing", href: "#" },
            { text: "For Business", href: "#" },
        ],
    },
    {
        title: "Company",
        links: [
            { text: "About us", href: "#" },
            { text: "News", href: "#" },
            { text: "Careers", href: "#" },
            { text: "Security", href: "#" },
        ],
    },
    {
      title: "Safety",
      links: [
          { text: "Safety Framework", href: "/safety" },
          { text: "Safety Standards", href: "#" },
      ],
  }
];

export const footerLinks: FooterLinkColumn[] = [
    {
        title: "Our research",
        links: [
            { text: "Overview", href: "#" },
            { text: "Index", href: "#" },
            { text: "Latest advancements", href: "#" },
            { text: "GPT-4", href: "#" },
            { text: "DALL·E 3", href: "#" },
            { text: "Sora", href: "#" },
        ],
    },
    {
        title: "ChatGPT",
        links: [
            { text: "For Everyone", href: "#" },
            { text: "For Teams", href: "#" },
            { text: "For Enterprises", href: "#" },
            { text: "ChatGPT login", href: "#", external: true },
        ],
    },
    {
        title: "API",
        links: [
            { text: "Platform overview", href: "#" },
            { text: "Pricing", href: "#" },
            { text: "Documentation", href: "#", external: true },
            { text: "API login", href: "#", external: true },
        ],
    },
    {
        title: "Explore more",
        links: [
            { text: "OpenAI for business", href: "#" },
            { text: "Stories", href: "#" },
        ],
    },
    {
        title: "Safety",
        links: [
            { text: "Safety Framework", href: "/safety" },
            { text: "Safety standards", href: "#" },
        ],
    },
    {
        title: "Teams",
        links: [
            { text: "Safety Systems", href: "#" },
            { text: "Preparedness", href: "#" },
            { text: "Superalignment", href: "#" },
        ],
    },
    {
        title: "Company",
        links: [
            { text: "About us", href: "#" },
            { text: "News", href: "#" },
            { text: "Our Charter", href: "#" },
            { text: "Security", href: "#" },
            { text: "Residency", href: "#" },
            { text: "Careers", href: "#" },
        ],
    },
    {
        title: "Terms & policies",
        links: [
            { text: "Terms of use", href: "#" },
            { text: "Privacy policy", href: "#" },
            { text: "Brand guidelines", href: "#" },
            { text: "Other policies", href: "#" },
        ],
    },
];
