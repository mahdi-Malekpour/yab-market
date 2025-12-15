import ProductCard from "./ui/ProductCard";

const products = [
  {
    id: 1,
    title: "iPhone 13",
    price: "32,500,000",
    store: "دیجی‌کالا",
  },
  {
    id: 2,
    title: "Galaxy S23",
    price: "28,900,000",
    store: "ترب",
  },
  {
    id: 3,
    title: "Xiaomi 13",
    price: "24,100,000",
    store: "Technolife",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-xl font-semibold text-zinc-900 mb-8">
        محصولات پیشنهادی
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}
