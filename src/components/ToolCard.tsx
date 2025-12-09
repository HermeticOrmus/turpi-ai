import { Tool } from '@/data/tools';
import Link from 'next/link';

interface ToolCardProps {
  tool: Tool;
}

const pricingColors: Record<string, string> = {
  free: 'bg-green-100 text-green-800',
  freemium: 'bg-blue-100 text-blue-800',
  paid: 'bg-amber-100 text-amber-800',
  enterprise: 'bg-purple-100 text-purple-800',
};

const pricingLabels: Record<string, string> = {
  free: 'Free',
  freemium: 'Free tier',
  paid: 'Paid',
  enterprise: 'Enterprise',
};

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-lg hover:border-gray-200 transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
            {tool.name}
          </h3>
          <span
            className={`inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-medium ${pricingColors[tool.pricing]}`}
          >
            {pricingLabels[tool.pricing]}
          </span>
        </div>
        <Link
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-indigo-600 transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </Link>
      </div>

      <p className="text-gray-600 text-sm mb-4">{tool.tagline}</p>

      <div className="mb-4">
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
          Best for
        </p>
        <div className="flex flex-wrap gap-1">
          {tool.bestFor.slice(0, 3).map((use) => (
            <span
              key={use}
              className="px-2 py-1 bg-gray-50 text-gray-600 rounded-lg text-xs"
            >
              {use}
            </span>
          ))}
        </div>
      </div>

      {tool.diegoTake && (
        <div className="pt-4 border-t border-gray-100">
          <p className="text-xs font-medium text-indigo-600 mb-1">Diego&apos;s take</p>
          <p className="text-sm text-gray-600 italic">&ldquo;{tool.diegoTake}&rdquo;</p>
        </div>
      )}
    </div>
  );
}
