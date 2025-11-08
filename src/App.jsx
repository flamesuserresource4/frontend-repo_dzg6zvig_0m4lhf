import { useRef } from 'react';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Features from './components/Features';
import PromoCTA from './components/PromoCTA';

function App() {
  const shopRef = useRef(null);

  const scrollToShop = () => {
    shopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Minimal navigation */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#" className="text-lg font-semibold tracking-tight">Auré Soda</a>
          <nav className="hidden gap-6 text-sm text-gray-600 sm:flex">
            <a className="transition-colors hover:text-gray-900" href="#gallery">Gallery</a>
            <a className="transition-colors hover:text-gray-900" href="#learn">About</a>
            <a className="transition-colors hover:text-gray-900" href="#buy">Buy</a>
          </nav>
          <button onClick={scrollToShop} className="rounded-full bg-gray-900 px-4 py-2 text-sm text-white">Shop</button>
        </div>
      </header>

      <main className="pt-16">
        <Hero onShopClick={scrollToShop} />
        <Gallery />
        <Features />
        <div id="buy" ref={shopRef}>
          <PromoCTA />
        </div>
      </main>

      <footer className="border-t border-gray-200/70 bg-white py-10">
        <div className="mx-auto max-w-6xl px-6 text-sm text-gray-500">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p>© {new Date().getFullYear()} Auré Beverages. Family-first refreshment.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-gray-700">Privacy</a>
              <a href="#" className="hover:text-gray-700">Terms</a>
              <a href="#" className="hover:text-gray-700">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
