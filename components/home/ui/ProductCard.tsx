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
    <div className="rounded-xl bg-white border border-zinc-200 p-5 hover:shadow-lg transition">
      <div className="h-32 bg-zinc-100 rounded-lg mb-4" />

      <h3 className="text-sm font-semibold text-zinc-900 mb-2">
        {title}
      </h3>

      <p className="text-zinc-600 text-sm mb-4">
        فروشنده: {store}
      </p>

      <div className="flex items-center justify-between">
        <span className="font-bold text-zinc-900">
          {price} تومان
        </span>
        <button className="text-sm text-white bg-zinc-900 px-4 py-2 rounded-lg hover:bg-zinc-800">
          مشاهده
        </button>
      </div>
    </div>
  );
}
