type ProductCardProps = {
  title: string;
  price: string;
  store: string;
  image: string;   // مسیر عکس محصول
  link: string;    // لینک محصول در سایت اصلی
};

export default function ProductCard({
  title,
  price,
  store,
  image,
  link,
}: ProductCardProps) {
  return (
    <div className="flex flex-col rounded-2xl bg-white border border-zinc-200 p-5 hover:shadow-xl transition h-full">
      {/* تصویر محصول */}
      <div className="flex justify-center items-center mb-4">
        <img
          src={image}
          alt={title}
          className="max-h-40 w-full object-contain rounded-xl"
        />
      </div>

      {/* عنوان محصول */}
      <h3 className="text-sm font-semibold text-zinc-900 mb-2">{title}</h3>

      {/* فروشنده */}
      <p className="text-zinc-500 text-sm mb-4">فروشنده: {store}</p>

      {/* قیمت و دکمه مشاهده */}
      <div className="mt-auto flex items-center justify-between">
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
