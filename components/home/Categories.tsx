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
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h2 className="text-xl font-semibold text-zinc-900 mb-6">
        دسته‌بندی‌ها
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {categories.map((cat) => (
          <div
            key={cat}
            className="rounded-xl bg-white border border-zinc-200 py-6 text-center text-sm font-medium text-zinc-700 hover:shadow-md transition cursor-pointer"
          >
            {cat}
          </div>
        ))}
      </div>
    </section>
  );
}
