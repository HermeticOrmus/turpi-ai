import { ToolCard } from '@/components/ToolCard';
import {
  categories,
  getToolsByCategory,
  getCategoryInfo,
  Category,
} from '@/data/tools';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.id }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryInfo(slug as Category);

  if (!category) {
    notFound();
  }

  const categoryTools = getToolsByCategory(slug as Category);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          href="/"
          className="inline-flex items-center text-gray-500 hover:text-gray-900 transition-colors"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to all categories
        </Link>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div
          className={`bg-gradient-to-r ${category.color} rounded-3xl p-8 md:p-12 text-white`}
        >
          <span className="text-6xl mb-4 block">{category.icon}</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{category.name}</h1>
          <p className="text-white/90 text-lg max-w-2xl">{category.description}</p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          {categoryTools.length} tools in this category
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      {/* Quick Recommendation */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-indigo-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Diego&apos;s recommendation
          </h3>
          <p className="text-gray-700">
            {category.id === 'llm' &&
              'Start with Claude for complex thinking and building. Use Grok to verify and get real-time info. ChatGPT for quick questions and image generation.'}
            {category.id === 'coding' &&
              'If you\'re comfortable with the terminal, Claude Code is unmatched. If you prefer a visual editor, start with Cursor.'}
            {category.id === 'image' &&
              'Midjourney for the best quality. DALL-E (via ChatGPT) for convenience. Ideogram when you need text in your images.'}
            {category.id === 'hosting' &&
              'Vercel for most web projects - it\'s magical. Railway when you need more flexibility (databases, background jobs).'}
            {category.id === 'database' &&
              'Supabase. Generous free tier, auth included, easy to use. It\'s the obvious choice for most projects.'}
            {category.id === 'automation' &&
              'n8n if you can self-host and want power. Zapier if you want simplicity and don\'t mind paying.'}
            {category.id === 'design' &&
              'Canva for quick, good-enough graphics. Figma if you\'re doing serious UI design.'}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <Link href="/" className="text-indigo-600 hover:underline">
            &larr; Back to home
          </Link>
          <div className="text-gray-400 text-sm">December 2025</div>
        </div>
      </footer>
    </div>
  );
}
