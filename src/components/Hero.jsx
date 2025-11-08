import Spline from '@splinetool/react-spline';

export default function Hero({ onShopClick }) {
  return (
    <section className="relative h-[90vh] min-h-[560px] w-full overflow-hidden bg-white" aria-label="Hero">
      {/* 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/MscgRj2doJR2RRa2/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* soft gradient overlays to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white/80" />
      
      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl leading-tight text-gray-900 sm:text-5xl md:text-6xl font-semibold tracking-tight">
          Crisp. Light. Family-ready.
        </h1>
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-gray-600">
          A premium soda crafted for shared moments. Clean ingredients, refreshing taste, designed to delight every table.
        </p>
        <div className="mt-8 flex items-center gap-4">
          <button
            onClick={onShopClick}
            className="rounded-full bg-gray-900 px-6 py-3 text-white transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
            aria-label="Shop Now"
          >
            Shop Now
          </button>
          <a
            href="#learn"
            className="rounded-full border border-gray-300 px-6 py-3 text-gray-900 transition-colors duration-200 hover:border-gray-900"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}
