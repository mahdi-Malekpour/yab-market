"use client";

import Image from "next/image";

export default function Header() {
  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">

        {/* Site name */}
        <h1 className="text-3xl font-extrabold text-orange-500">
          یاب
        </h1>

        {/* Logo + Dark mode */}
        <div className="flex items-center gap-4">
          {/* <button
            onClick={toggleDark}
            className="rounded-full border border-zinc-300 px-4 py-2 text-sm hover:bg-zinc-100 transition"
          >
            دارک مود
          </button> */}

          <Image
            src="/Logo.jpg"
            alt="YAB logo"
            width={40}
            height={40}
            priority
            className="rounded-2xl shadow-lg"
          />
        </div>

      </div>
    </header>
  );
}
