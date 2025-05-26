import Categories from "../components/Categories";
import ProductCard from "../components/ProductCard";
import ProductSkeleton from "../components/ProductSkeleton";
import Search from "../components/SearchBar";
import { useProductContext } from "../context/ProductContext";

const Products = () => {
  const {
    loading,
    error,
    selectedCategory,
    setSelectedCategory,
    categories,
    filteredProducts,
  } = useProductContext();

  if (error) {
    return (
      <h1 className="text-center text-red-500 text-lg mt-6">Error: {error}</h1>
    );
  }

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-4 pt-4">
        <Categories
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <Search />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {loading
          ? Array.from({ length: 8 }).map((_, index) => (
              <ProductSkeleton key={index} />
            ))
          : filteredProducts?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </>
  );
};

export default Products;
