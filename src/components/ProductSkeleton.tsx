import React from "react";

const ProductSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md h-full animate-pulse">
      <div className="pt-[100%] bg-gray-200 relative"></div>
      <div className="p-4">
        <div className="h-4 w-16 bg-gray-200 mb-4 rounded"></div>
        <div className="h-5 bg-gray-200 mb-2 rounded w-full"></div>
        <div className="h-5 bg-gray-200 mb-4 rounded w-3/4"></div>
        <div className="flex justify-between items-center">
          <div className="h-6 w-16 bg-gray-200 rounded"></div>
          <div className="h-4 w-12 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
