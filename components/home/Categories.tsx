export default function Categories() {
  const categories = [
    { title: "موبایل", icon: "📱" },
    { title: "لپ‌تاپ", icon: "💻" },
    { title: "هدفون", icon: "🎧" },
    { title: "ساعت هوشمند", icon: "⌚" },
    { title: "لوازم خانگی", icon: "🏠" },
    { title: "گیمینگ", icon: "🎮" },
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">

        {/* Title */}
        <div className="mb-10 text-center md:text-right">
          <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-900">
            دسته‌بندی‌ها
          </h2>
          <p className="mt-2 text-zinc-500 text-sm md:text-base">
            محصولات رو سریع‌تر از طریق دسته‌بندی پیدا کن
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="group flex flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50 py-6 transition hover:border-orange-500 hover:bg-orange-50"
            >
              <span className="text-3xl mb-3">{cat.icon}</span>
              <span className="text-sm font-semibold text-zinc-800 group-hover:text-orange-600">
                {cat.title}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

