import { Link, useParams } from "react-router-dom";
import { useProducts } from "../hooks/api";

interface ProductCardProps {
  product: Product;
}

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();

  const { data, error, loading } = useProducts(
    id ? `${import.meta.env.VITE_API_URL}/${id}` : ""
  );

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <BackButton />
        <LoadingSkeleton />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="container mx-auto px-4 py-8">
        <BackButton />
        <div className="bg-red-50 text-red-700 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Error</h2>
          <p>{error || "Product not found."}</p>
        </div>
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <BackButton />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: Product Image & Meta */}
        <section className="bg-white p-8 rounded-lg shadow-sm">
          <div className="aspect-square flex items-center justify-center p-8 bg-gray-50 rounded-lg mb-6">
            <img
              src={data.image}
              alt={data.title || "Product image"}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-yellow-500">★</span>
              <span className="text-gray-700 ml-1">{data.rating?.rate}</span>
              <span className="text-gray-500 ml-1">
                ({data.rating?.count} reviews)
              </span>
            </div>

            <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full">
              {data.category}
            </span>
          </div>
        </section>

        {/* Right: Product Info */}
        <section className="flex flex-col">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {data.title}
          </h1>
          <p className="text-3xl font-bold text-gray-900 mb-6">${data.price}</p>

          <div className="prose prose-gray mb-8 max-w-none">
            <h2 className="text-xl font-semibold mb-4">Description</h2>
            <p className="text-gray-700">{data.description}</p>
          </div>

          <button className="mt-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
            Add to Cart
          </button>
        </section>
      </div>
    </main>
  );
};

const BackButton = () => (
  <Link
    to="/"
    className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-8"
  >
    ← Back to Products
  </Link>
);

const LoadingSkeleton = () => (
  <div className="animate-pulse">
    <div className="h-96 bg-gray-200 rounded-lg mb-8"></div>
    <div className="h-8 bg-gray-200 rounded w-2/3 mb-4"></div>
    <div className="h-6 bg-gray-200 rounded w-1/4 mb-6"></div>
    <div className="h-4 bg-gray-200 rounded mb-3"></div>
    <div className="h-4 bg-gray-200 rounded mb-3"></div>
    <div className="h-4 bg-gray-200 rounded mb-3 w-3/4"></div>
  </div>
);

export default ProductDetails;
