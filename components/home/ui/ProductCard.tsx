type ProductCardProps = {
  title: string;
  price: string;
  store: string;
};

export default function ProductCard({
  title,
  price,
  store,
}: ProductCardProps) {
  return (
    <div className="rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 p-5 hover:shadow-xl transition">
      <div className="h-32 bg-zinc-100 dark:bg-zinc-700 rounded-xl mb-4" />

      <h3 className="text-sm font-semibold text-zinc-900 dark:text-white mb-2">
        {title}
      </h3>

      <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-4">
        فروشنده: {store}
      </p>

      <div className="flex items-center justify-between">
        <span className="font-bold text-zinc-900 dark:text-white">
          {price} تومان
        </span>
        <button className="text-sm text-white bg-orange-500 px-4 py-2 rounded-lg hover:bg-orange-600 transition">
          مشاهده
        </button>
      </div>
    </div>
  );
}
