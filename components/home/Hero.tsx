"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-zinc-50">
      <div className="mx-auto max-w-7xl px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* Text */}
        <div className="text-center md:text-right">
          <span className="inline-block mb-4 rounded-full bg-orange-100 text-orange-600 px-4 py-1 text-sm font-medium">
            یاب | مقایسه هوشمند قیمت
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 leading-tight">
            همه فروشگاه‌ها
            <span className="text-orange-500"> یک‌جا</span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-zinc-600 max-w-xl mx-auto md:mx-0">
            محصولات فروشگاه‌های مختلف رو ببین، مقایسه کن و مستقیم وارد سایت فروشنده شو
          </p>

          {/* Search */}
          <div className="mt-8 flex max-w-xl mx-auto md:mx-0 shadow-lg rounded-xl overflow-hidden">
            <input
              type="text"
              placeholder="جستجوی محصول..."
              className="flex-1 px-5 py-4 text-sm outline-none border border-zinc-200"
            />
            <button className="bg-orange-500 px-6 text-white font-semibold hover:bg-orange-600 transition">
              جستجو
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="relative flex justify-center">
          <Image
            src="/hero.png"
            alt="YAB hero"
            width={480}
            height={480}
            className="rounded-3xl shadow-2xl"
            priority
          />
        </div>

      </div>
    </section>
  );
}
