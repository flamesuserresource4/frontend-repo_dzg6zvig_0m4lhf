import { useState } from 'react';

const variants = [
  {
    name: 'Classic',
    color: 'from-rose-100 to-rose-200',
    img: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=1200&auto=format&fit=crop',
    note: 'Balanced fizz with a clean finish.'
  },
  {
    name: 'Citrus',
    color: 'from-lime-100 to-emerald-200',
    img: 'https://images.unsplash.com/photo-1616512650987-56c1234365e7?q=80&w=1200&auto=format&fit=crop',
    note: 'Bright lemon-lime twist.'
  },
  {
    name: 'Berry',
    color: 'from-fuchsia-100 to-pink-200',
    img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c76f1?q=80&w=1200&auto=format&fit=crop',
    note: 'Lightly sweet, vibrant berries.'
  },
];

export default function Gallery() {
  const [active, setActive] = useState(0);

  return (
    <section id="gallery" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Product Gallery</h2>
            <p className="mt-2 text-gray-600">Explore flavors designed for every family member.</p>
          </div>
          <div className="hidden gap-2 sm:flex">
            {variants.map((v, i) => (
              <button
                key={v.name}
                onClick={() => setActive(i)}
                className={`h-2 w-8 rounded-full transition-all ${i === active ? 'bg-gray-900 w-12' : 'bg-gray-300'}`}
                aria-label={`Show ${v.name}`}
              />
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {variants.map((v, i) => (
            <button
              key={v.name}
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${v.color} focus:outline-none`}
            >
              <img
                src={v.img}
                alt={`${v.name} soda can`}
                className={`h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105 ${i === active ? '' : ''}`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-left text-white">
                <p className="text-sm/relaxed opacity-90">{v.note}</p>
                <h3 className="mt-1 text-xl font-medium">{v.name}</h3>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 sm:hidden">
          {variants.map((v, i) => (
            <button
              key={v.name}
              onClick={() => setActive(i)}
              className={`h-2 w-8 rounded-full transition-all ${i === active ? 'bg-gray-900 w-12' : 'bg-gray-300'}`}
              aria-label={`Show ${v.name}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
