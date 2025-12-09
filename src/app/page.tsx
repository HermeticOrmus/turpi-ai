import { CategoryCard } from '@/components/CategoryCard';
import { categories, tools, getToolsByCategory } from '@/data/tools';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
              Construye con IA
            </h1>
            <p className="mt-4 text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 font-semibold">
              Las herramientas que necesitas para salir adelante
            </p>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              Las herramientas para construir tu futuro ahora están disponibles gratis o casi gratis.
              <br />
              <strong>Solo necesitas curiosidad y ganas de aprender.</strong>
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/empieza"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-red-500 text-white font-medium hover:from-amber-600 hover:to-red-600 transition-all shadow-lg shadow-amber-200"
              >
                Empieza Aquí
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <Link
                href="#categorias"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Ver Herramientas
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-full max-w-4xl h-96 bg-gradient-to-br from-amber-100 via-yellow-50 to-transparent rounded-full blur-3xl opacity-60" />
      </header>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">{tools.length}+</div>
            <div className="text-sm text-gray-500">Herramientas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">Gratis</div>
            <div className="text-sm text-gray-500">Opciones en cada categoría</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">Dic 2025</div>
            <div className="text-sm text-gray-500">Actualizado</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">100%</div>
            <div className="text-sm text-gray-500">Probadas personalmente</div>
          </div>
        </div>
      </section>

      {/* La Verdad */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-3xl p-8 md:p-12 border border-amber-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            La verdad sobre construir con IA en 2025
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-gray-700">
            <div>
              <div className="text-4xl font-bold text-amber-500 mb-2">1</div>
              <p>
                <strong>No necesitas saber programar.</strong> Solo necesitas saber qué quieres lograr y cómo pedirlo claramente.
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-500 mb-2">2</div>
              <p>
                <strong>Constrúyelo tú mismo.</strong> Las herramientas son mejores que nunca. Lo que antes requería un equipo, ahora solo requiere curiosidad.
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-500 mb-2">3</div>
              <p>
                <strong>Empieza pequeño.</strong> Un problema real. Una solución simple. Itera. No planifiques demasiado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué ahora */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-white">
          <h2 className="text-2xl font-bold mb-4">
            El juego cambió
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 mb-4">
                Las herramientas que antes solo tenían en Silicon Valley ahora están disponibles para cualquiera con internet.
              </p>
              <p className="text-gray-300">
                <strong className="text-white">No importa de dónde vengas.</strong> Lo que importa es lo que quieres construir.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">💰</span>
                <span className="text-gray-300">La mayoría de herramientas son gratis o muy accesibles</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🌎</span>
                <span className="text-gray-300">Puedes trabajar para clientes en cualquier parte del mundo</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📱</span>
                <span className="text-gray-300">Solo necesitas una laptop y conexión a internet</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categorias" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
          Explora por Categoría
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Herramientas probadas con tips prácticos para que empieces hoy.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              toolCount={getToolsByCategory(category.id).length}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-amber-500 to-red-500 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            ¿No sabes por dónde empezar?
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Te guiamos paso a paso para encontrar las herramientas correctas según lo que quieres lograr. Sin experiencia previa.
          </p>
          <Link
            href="/empieza"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-colors"
          >
            Comenzar la Guía
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-sm">
            Hecho con{' '}
            <span className="text-red-500">❤️</span>
            {' '}usando Claude Code
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-400 text-sm">Diciembre 2025</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
