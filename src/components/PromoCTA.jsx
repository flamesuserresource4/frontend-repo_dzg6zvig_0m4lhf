export default function PromoCTA() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="overflow-hidden rounded-3xl bg-gray-900">
          <div className="grid items-center gap-8 p-10 text-white md:grid-cols-2 md:p-14">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Family Pack: 20% Off This Week
              </h3>
              <p className="mt-3 text-white/80">
                Stock the fridge. Mix and match flavors. Free shipping on orders over $35.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#buy"
                  className="rounded-full bg-white px-6 py-3 text-gray-900 transition-transform duration-200 hover:scale-[1.02] active:scale-95"
                  aria-label="Buy Now"
                >
                  Buy Now
                </a>
                <a
                  href="#gallery"
                  className="rounded-full border border-white/30 px-6 py-3 text-white transition-colors hover:bg-white/10"
                >
                  Browse Flavors
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute -inset-12 rounded-[36px] bg-gradient-to-br from-white/10 to-white/0 blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1603394585701-8f88b0ddf57b?q=80&w=1200&auto=format&fit=crop"
                alt="Assorted soda cans"
                className="relative z-10 w-full rounded-2xl object-cover shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
