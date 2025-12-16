"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ui/ProductCard";

interface Product {
  id: number;
  title: string;
  price?: string;
  store?: string;
  image: string;
  link?: string;
}

const fallbackProducts: Product[] = [
  { id: 1, title: "iPhone 13", price: "32,500,000", store: "دیجی‌کالا", image: "/fallback1.png", link: "#" },
  { id: 2, title: "Galaxy S23", price: "28,900,000", store: "ترب", image: "/fallback2.png", link: "#" },
  { id: 3, title: "Xiaomi 13", price: "24,100,000", store: "Technolife", image: "/fallback3.png", link: "#" },
];

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("http://127.0.0.1:8000/scrape?url=https://www.digikala.com/search/category-mobile-phone/&scrolls=5");
        const data = await res.json();
        setProducts(data.products?.map((p: any, i: number) => ({
          id: i,
          title: p.title,
          image: p.image,
          link: p.link,
          price: p.price,
          store: p.store,
        })) || fallbackProducts);
      } catch (err) {
        console.error(err);
        setProducts(fallbackProducts);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) return <p className="text-center py-10 text-zinc-700">در حال دریافت محصولات...</p>;

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 bg-white">
      <h2 className="text-xl font-semibold text-zinc-900 mb-8">محصولات پیشنهادی</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            className="bg-white border border-zinc-200 shadow-sm hover:shadow-md transition rounded-xl"
          />
        ))}
      </div>
    </section>
  );
}
