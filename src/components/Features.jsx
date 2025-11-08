import { Check } from 'lucide-react';

const features = [
  'Naturally flavored, zero artificial colors',
  'Lightly carbonated for a smooth sip',
  'Family-size and mini cans available',
  'Recyclable packaging',
];

export default function Features() {
  return (
    <section id="learn" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Designed for everyday moments
            </h2>
            <p className="mt-4 text-gray-600">
              A soda that pairs with dinner, game night, and everything in between. Clean taste, refined bubbles, and
              a balanced sweetness that brings people together.
            </p>

            <ul className="mt-8 space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-white">
                    <Check size={16} />
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-gray-50 p-6">
            <img
              src="https://images.unsplash.com/photo-1604908177146-1c2a9805e8e8?q=80&w=1200&auto=format&fit=crop"
              alt="Soda can with condensation"
              className="w-full rounded-xl object-cover shadow-sm"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
