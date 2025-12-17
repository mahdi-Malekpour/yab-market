type ProductCardProps = {
  title: string;
  price?: string;
  store?: string;
  image?: string;
  link?: string;
  className?: string;
};

export default function ProductCard({
  title,
  price = "",
  store = "",
  image = "/fallback1.png",
  link = "#",
  className = "",
}: ProductCardProps) {
  return (
    <div className={`rounded-2xl bg-white border border-zinc-200 p-5 hover:shadow-xl transition ${className}`}>
      
      {/* عکس محصول */}
      <div className="h-48 w-full mb-4 rounded-xl overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* عنوان */}
      <h3 className="text-sm font-semibold text-zinc-900 mb-2">{title}</h3>

      {/* فروشنده */}
      <p className="text-zinc-500 text-sm mb-4">فروشنده: {store}</p>

      {/* قیمت و دکمه */}
      <div className="flex items-center justify-between">
        <span className="font-bold text-zinc-900">{price} تومان</span>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-white bg-orange-500 px-4 py-2 rounded-lg hover:bg-orange-600 transition"
        >
          مشاهده
        </a>
      </div>
    </div>
  );
}
