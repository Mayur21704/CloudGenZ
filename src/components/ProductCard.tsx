import React from "react";
import { Link } from "react-router-dom";
import type { Product } from "../types/type";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
    >
      <div className="relative pt-[100%] bg-gray-50 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="absolute inset-0 w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="mb-2">
          <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
            {product.category}
          </span>
        </div>
        <h2 className="text-lg font-medium text-gray-900 line-clamp-2 mb-2 flex-grow">
          {product.title}
        </h2>
        <div className="flex items-center justify-between mt-2">
          <p className="text-xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </p>
          <div className="flex items-center">
            <span className="text-yellow-500 mr-1">★</span>
            <span className="text-sm text-gray-600">
              {product.rating.rate} ({product.rating.count})
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
