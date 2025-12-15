import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-white dark:bg-zinc-900 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text */}
        <div>
          <span className="inline-block mb-4 rounded-full bg-orange-100 text-orange-600 px-4 py-1 text-sm font-medium dark:bg-orange-500/10 dark:text-orange-400">
            یاب | مقایسه هوشمند قیمت
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white leading-tight">
            همه فروشگاه‌ها  
            <span className="text-orange-500"> یک‌جا</span>
          </h1>

          <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 max-w-xl">
            قیمت محصولات فروشگاه‌های مختلف رو مقایسه کن و بهترین انتخاب رو داشته باش
          </p>

          {/* Search */}
          <div className="mt-8 flex max-w-xl">
            <input
              type="text"
              placeholder="جستجوی محصول..."
              className="flex-1 rounded-r-xl border border-zinc-200 px-5 py-4 text-sm focus:outline-none dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
            />
            <button className="rounded-l-xl bg-orange-500 px-6 text-white font-medium hover:bg-orange-600 transition">
              جستجو
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <Image
            src="/hero.png"
            alt="YAB hero"
            width={520}
            height={520}
            className="rounded-2xl shadow-xl"
            priority
          />
        </div>

      </div>
    </section>
  );
}
