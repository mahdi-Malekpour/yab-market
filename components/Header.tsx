// components/Header.tsx
import React from "react";

const Header = () => {
  // اگر بخوای basePath رو از env بگیری
  

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      {/* سمت راست: لوگو */}
      <div className="flex items-center gap-3">
        <img
          src='/Logo.jpg'
          alt="YAB logo"
          width={48}
          height={48}
          className="rounded-2xl shadow-lg"
        />
        <span className="text-xl font-bold">یاب</span>
      </div>

      {/* سمت چپ: هر چیز اضافی */}
      <div>
        {/* مثلا منو یا چیزی */}
      </div>
    </header>
  );
};

export default Header;
