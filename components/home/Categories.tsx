const categories = [
  "موبایل",
  "لپ‌تاپ",
  "هدفون",
  "ساعت هوشمند",
  "لوازم خانگی",
  "گیمینگ",
];

export default function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-6">
        دسته‌بندی‌ها
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {categories.map((cat) => (
          <div
            key={cat}
            className="rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 py-6 text-center text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:border-orange-400 hover:text-orange-500 transition cursor-pointer"
          >
            {cat}
          </div>
        ))}
      </div>
    </section>
  );
}
