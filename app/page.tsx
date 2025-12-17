"use client";

import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Hero />
      <Categories />
      <FeaturedProducts />
    </main>
  );
}
  