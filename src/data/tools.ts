export type Category =
  | 'llm'
  | 'coding'
  | 'image'
  | 'hosting'
  | 'database'
  | 'automation'
  | 'design';

export type PricingTier = 'free' | 'freemium' | 'paid' | 'enterprise';

export interface Tool {
  id: string;
  name: string;
  slug: string;
  category: Category;
  tagline: string;
  description: string;
  bestFor: string[];
  pricing: PricingTier;
  pricingDetails?: string;
  url: string;
  logoUrl?: string;
  diegoTake?: string;
  lastUpdated: string;
}

export interface CategoryInfo {
  id: Category;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export const categories: CategoryInfo[] = [
  {
    id: 'llm',
    name: 'Asistentes IA',
    description: 'Inteligencias artificiales que entienden y generan texto. Tu compañero para pensar.',
    icon: '🧠',
    color: 'from-purple-500 to-indigo-600',
  },
  {
    id: 'coding',
    name: 'Asistentes de Código',
    description: 'Herramientas que te ayudan a programar, aunque no sepas programar.',
    icon: '💻',
    color: 'from-green-500 to-emerald-600',
  },
  {
    id: 'image',
    name: 'Generación de Imágenes',
    description: 'Crea imágenes describiendo lo que quieres. Diseña sin saber diseñar.',
    icon: '🎨',
    color: 'from-pink-500 to-rose-600',
  },
  {
    id: 'hosting',
    name: 'Hosting y Deploy',
    description: 'Pon tus creaciones en internet. De idea a sitio web en minutos.',
    icon: '🚀',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    id: 'database',
    name: 'Bases de Datos',
    description: 'Guarda y maneja información. La base de cualquier aplicación.',
    icon: '🗄️',
    color: 'from-orange-500 to-amber-600',
  },
  {
    id: 'automation',
    name: 'Automatización',
    description: 'Conecta herramientas y automatiza tareas. Trabaja más inteligente.',
    icon: '⚡',
    color: 'from-yellow-500 to-orange-600',
  },
  {
    id: 'design',
    name: 'Diseño',
    description: 'Crea interfaces y gráficos bonitos fácilmente.',
    icon: '✨',
    color: 'from-violet-500 to-purple-600',
  },
];

export const tools: Tool[] = [
  // LLMs
  {
    id: 'claude',
    name: 'Claude',
    slug: 'claude',
    category: 'llm',
    tagline: 'The thoughtful AI that reasons step by step',
    description: 'Claude is known for nuanced reasoning, honesty about limitations, and excellent writing. Great for complex problems that need careful thinking.',
    bestFor: ['Complex reasoning', 'Writing & editing', 'Code explanation', 'Long documents'],
    pricing: 'freemium',
    pricingDetails: 'Free tier available. Pro $20/mo',
    url: 'https://claude.ai',
    diegoTake: 'My main tool. Best for building and thinking through complex problems. The one I trust most.',
    lastUpdated: '2025-12-08',
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    slug: 'chatgpt',
    category: 'llm',
    tagline: 'The original AI chat that started it all',
    description: 'The most widely used AI assistant. Great general-purpose tool with excellent memory of your conversations and strong image generation.',
    bestFor: ['General questions', 'Image generation', 'Remembering context', 'Plugins & integrations'],
    pricing: 'freemium',
    pricingDetails: 'Free tier. Plus $20/mo',
    url: 'https://chat.openai.com',
    diegoTake: 'Good for quick questions and when I need a second opinion. Best image generation via DALL-E.',
    lastUpdated: '2025-12-08',
  },
  {
    id: 'gemini',
    name: 'Gemini',
    slug: 'gemini',
    category: 'llm',
    tagline: 'Google\'s AI with access to the latest information',
    description: 'Integrated with Google Search and services. Can process huge documents and has real-time information access.',
    bestFor: ['Current events', 'Large documents', 'Google integration', 'Research'],
    pricing: 'freemium',
    pricingDetails: 'Free tier. Advanced $20/mo',
    url: 'https://gemini.google.com',
    diegoTake: 'Great for image generation and when I need info from the web. The 1M token context is incredible for huge documents.',
    lastUpdated: '2025-12-08',
  },
  {
    id: 'grok',
    name: 'Grok',
    slug: 'grok',
    category: 'llm',
    tagline: 'Real-time AI with personality',
    description: 'Built by xAI, integrated with X (Twitter). Has real-time access to news and social sentiment. Known for its wit.',
    bestFor: ['Real-time news', 'Social sentiment', 'Current events', 'Unfiltered answers'],
    pricing: 'paid',
    pricingDetails: 'Requires X Premium ($16/mo)',
    url: 'https://grok.com',
    diegoTake: 'I use it to verify work and get real-time information. Good for checking what\'s happening right now.',
    lastUpdated: '2025-12-08',
  },

  // Coding Assistants
  {
    id: 'claude-code',
    name: 'Claude Code',
    slug: 'claude-code',
    category: 'coding',
    tagline: 'AI coding agent that runs in your terminal',
    description: 'An autonomous coding agent that can read, write, and execute code. Works directly in your development environment.',
    bestFor: ['Building apps', 'Terminal workflows', 'Full autonomy', 'Complex codebases'],
    pricing: 'paid',
    pricingDetails: 'Usage-based via Anthropic API',
    url: 'https://claude.ai/code',
    diegoTake: 'My main tool for building. It runs in the terminal and can work autonomously for hours. Game-changer.',
    lastUpdated: '2025-12-08',
  },
  {
    id: 'cursor',
    name: 'Cursor',
    slug: 'cursor',
    category: 'coding',
    tagline: 'The AI-first code editor',
    description: 'VS Code fork with deep AI integration. Chat with your codebase, autocomplete on steroids, and easy refactoring.',
    bestFor: ['Visual editing', 'Codebase chat', 'Beginners', 'Autocomplete'],
    pricing: 'freemium',
    pricingDetails: 'Free tier. Pro $20/mo',
    url: 'https://cursor.sh',
    diegoTake: 'Great if you prefer a visual editor. More approachable than terminal-based tools.',
    lastUpdated: '2025-12-08',
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    slug: 'github-copilot',
    category: 'coding',
    tagline: 'AI pair programmer in your editor',
    description: 'Autocomplete that understands your code. Works inside VS Code, JetBrains, and other editors.',
    bestFor: ['Autocomplete', 'VS Code users', 'Quick suggestions', 'Boilerplate code'],
    pricing: 'paid',
    pricingDetails: '$10/mo individual',
    url: 'https://github.com/features/copilot',
    diegoTake: 'Good autocomplete, but less powerful than Claude Code for complex tasks.',
    lastUpdated: '2025-12-08',
  },

  // Image Generation
  {
    id: 'midjourney',
    name: 'Midjourney',
    slug: 'midjourney',
    category: 'image',
    tagline: 'The most artistic AI image generator',
    description: 'Known for stunning, artistic images. Works through Discord. The go-to for beautiful, creative imagery.',
    bestFor: ['Artistic images', 'Concept art', 'Illustrations', 'Beautiful aesthetics'],
    pricing: 'paid',
    pricingDetails: 'From $10/mo',
    url: 'https://midjourney.com',
    diegoTake: 'Best quality images, period. The Discord interface is weird at first but you get used to it.',
    lastUpdated: '2025-12-08',
  },
  {
    id: 'dalle',
    name: 'DALL-E',
    slug: 'dalle',
    category: 'image',
    tagline: 'OpenAI\'s image generator, built into ChatGPT',
    description: 'Integrated directly into ChatGPT. Great for quick image generation without leaving your chat.',
    bestFor: ['Quick generation', 'ChatGPT integration', 'Iterating on ideas', 'Text in images'],
    pricing: 'freemium',
    pricingDetails: 'Included with ChatGPT Plus',
    url: 'https://openai.com/dall-e',
    diegoTake: 'Most convenient since it\'s in ChatGPT. Good for quick iterations.',
    lastUpdated: '2025-12-08',
  },
  {
    id: 'ideogram',
    name: 'Ideogram',
    slug: 'ideogram',
    category: 'image',
    tagline: 'Best at text rendering in images',
    description: 'Excels at generating images with readable text - logos, posters, signs. Where others struggle with text, Ideogram shines.',
    bestFor: ['Text in images', 'Logos', 'Posters', 'Marketing graphics'],
    pricing: 'freemium',
    pricingDetails: 'Free tier. Plus from $7/mo',
    url: 'https://ideogram.ai',
    diegoTake: 'When you need text in your image, this is the one. Others still can\'t do text well.',
    lastUpdated: '2025-12-08',
  },

  // Hosting
  {
    id: 'vercel',
    name: 'Vercel',
    slug: 'vercel',
    category: 'hosting',
    tagline: 'Deploy in seconds, scale automatically',
    description: 'The easiest way to deploy web applications. Push your code and it\'s live. Made by the creators of Next.js.',
    bestFor: ['Next.js apps', 'Static sites', 'Quick deploys', 'Previews'],
    pricing: 'freemium',
    pricingDetails: 'Generous free tier. Pro $20/mo',
    url: 'https://vercel.com',
    diegoTake: 'My default for hosting. Connect GitHub, push code, it\'s live. Magic.',
    lastUpdated: '2025-12-08',
  },
  {
    id: 'netlify',
    name: 'Netlify',
    slug: 'netlify',
    category: 'hosting',
    tagline: 'Web hosting with powerful features',
    description: 'Similar to Vercel with great form handling and serverless functions. Popular alternative.',
    bestFor: ['Static sites', 'Forms', 'Serverless functions', 'JAMstack'],
    pricing: 'freemium',
    pricingDetails: 'Free tier. Pro $19/mo',
    url: 'https://netlify.com',
    diegoTake: 'Great alternative to Vercel. Better form handling out of the box.',
    lastUpdated: '2025-12-08',
  },
  {
    id: 'railway',
    name: 'Railway',
    slug: 'railway',
    category: 'hosting',
    tagline: 'Deploy anything, anywhere',
    description: 'More flexible than Vercel - can run databases, background jobs, any Docker container. Great for full applications.',
    bestFor: ['Full-stack apps', 'Databases', 'Background jobs', 'Docker'],
    pricing: 'freemium',
    pricingDetails: 'Free tier. Usage-based pricing',
    url: 'https://railway.app',
    diegoTake: 'When Vercel isn\'t enough. Great for apps that need databases or background processes.',
    lastUpdated: '2025-12-08',
  },

  // Databases
  {
    id: 'supabase',
    name: 'Supabase',
    slug: 'supabase',
    category: 'database',
    tagline: 'The open-source Firebase alternative',
    description: 'Postgres database with auth, storage, and real-time built in. Everything you need to build an app backend.',
    bestFor: ['Full backend', 'Auth', 'Real-time data', 'Storage'],
    pricing: 'freemium',
    pricingDetails: 'Generous free tier. Pro $25/mo',
    url: 'https://supabase.com',
    diegoTake: 'My go-to for databases. Auth, storage, and database in one. The free tier is incredibly generous.',
    lastUpdated: '2025-12-08',
  },
  {
    id: 'firebase',
    name: 'Firebase',
    slug: 'firebase',
    category: 'database',
    tagline: 'Google\'s app development platform',
    description: 'Real-time database, auth, hosting, and more. Deeply integrated with Google Cloud.',
    bestFor: ['Real-time apps', 'Mobile apps', 'Google ecosystem', 'Quick prototypes'],
    pricing: 'freemium',
    pricingDetails: 'Free tier. Pay as you grow',
    url: 'https://firebase.google.com',
    diegoTake: 'Good if you\'re in the Google ecosystem. Supabase is more open and flexible.',
    lastUpdated: '2025-12-08',
  },

  // Automation
  {
    id: 'n8n',
    name: 'n8n',
    slug: 'n8n',
    category: 'automation',
    tagline: 'Workflow automation you can self-host',
    description: 'Visual workflow builder that connects apps and automates tasks. Can be self-hosted for full control.',
    bestFor: ['Complex workflows', 'Self-hosting', 'API integrations', 'Custom logic'],
    pricing: 'freemium',
    pricingDetails: 'Free self-hosted. Cloud from $20/mo',
    url: 'https://n8n.io',
    diegoTake: 'More powerful than Zapier, and you can self-host it. My choice for automation.',
    lastUpdated: '2025-12-08',
  },
  {
    id: 'zapier',
    name: 'Zapier',
    slug: 'zapier',
    category: 'automation',
    tagline: 'Connect your apps, automate your work',
    description: 'The most popular automation tool. Connects 5000+ apps with a simple interface.',
    bestFor: ['Simple automations', 'App integrations', 'Non-technical users', 'Quick setup'],
    pricing: 'freemium',
    pricingDetails: 'Free tier. Starter $19.99/mo',
    url: 'https://zapier.com',
    diegoTake: 'Easier to start with than n8n, but more limited and expensive at scale.',
    lastUpdated: '2025-12-08',
  },

  // Design
  {
    id: 'figma',
    name: 'Figma',
    slug: 'figma',
    category: 'design',
    tagline: 'Collaborative interface design',
    description: 'The industry standard for UI/UX design. Real-time collaboration, prototyping, and design systems.',
    bestFor: ['UI design', 'Prototypes', 'Collaboration', 'Design systems'],
    pricing: 'freemium',
    pricingDetails: 'Free tier. Pro $12/mo',
    url: 'https://figma.com',
    diegoTake: 'The standard for a reason. Even if you\'re not a designer, good to know it exists.',
    lastUpdated: '2025-12-08',
  },
  {
    id: 'canva',
    name: 'Canva',
    slug: 'canva',
    category: 'design',
    tagline: 'Design anything, no skills required',
    description: 'Templates for everything - social media, presentations, videos. Perfect for non-designers.',
    bestFor: ['Quick graphics', 'Social media', 'Presentations', 'Templates'],
    pricing: 'freemium',
    pricingDetails: 'Free tier. Pro $12.99/mo',
    url: 'https://canva.com',
    diegoTake: 'Perfect when you need something fast and good enough. Templates save hours.',
    lastUpdated: '2025-12-08',
  },
];

export function getToolsByCategory(category: Category): Tool[] {
  return tools.filter((t) => t.category === category);
}

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}

export function getCategoryInfo(id: Category): CategoryInfo | undefined {
  return categories.find((c) => c.id === id);
}
