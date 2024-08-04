import React from "react";

const NotFound: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="text-center">
        <h1 className="text-9xl font-semibold mb-12">😥</h1>
        <h1 className="text-5xl font-semibold">Oops!</h1>
        <div className="mt-4">
          <p className="italic text-gray-800">Halaman tidak tersedia</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
