import { CategoryInfo } from '@/data/tools';
import Link from 'next/link';

interface CategoryCardProps {
  category: CategoryInfo;
  toolCount: number;
}

export function CategoryCard({ category, toolCount }: CategoryCardProps) {
  return (
    <Link href={`/category/${category.id}`}>
      <div
        className={`group relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br ${category.color} text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]`}
      >
        <div className="absolute top-0 right-0 -mt-4 -mr-4 text-8xl opacity-20 group-hover:opacity-30 transition-opacity">
          {category.icon}
        </div>

        <div className="relative">
          <span className="text-4xl mb-4 block">{category.icon}</span>
          <h3 className="text-xl font-bold mb-2">{category.name}</h3>
          <p className="text-white/80 text-sm mb-4">{category.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
              {toolCount} herramientas
            </span>
            <span className="text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all">
              &rarr;
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
