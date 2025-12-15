export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight">
          مقایسه قیمت، هوشمندانه خرید کن
        </h1>
        <p className="mt-6 text-lg text-zinc-600 max-w-2xl mx-auto">
          محصولات فروشگاه‌های مختلف رو یک‌جا ببین و بهترین قیمت رو انتخاب کن
        </p>

        <div className="mt-10 flex justify-center">
          <input
            type="text"
            placeholder="جستجوی محصول..."
            className="w-full max-w-xl rounded-xl border border-zinc-200 px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900"
          />
        </div>
      </div>
    </section>
  );
}
