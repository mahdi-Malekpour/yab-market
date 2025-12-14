export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black font-sans">
      <main className="flex flex-col items-center justify-center w-full max-w-2xl p-16 bg-white dark:bg-gray-900 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
          خوش آمدید!
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
          این صفحه اصلی ساده است و آماده‌ی اضافه کردن محصولات و دسته‌بندی‌ها می‌باشد.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 text-center mt-4">
          سلام من مهدی هستم — Hello, I am Mahdi.
        </p>
      </main>
    </div>
  );
}
