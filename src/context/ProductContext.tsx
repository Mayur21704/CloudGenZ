import { createContext, useContext, useMemo, useState } from "react";
import { useDebounce, useProducts } from "../hooks/api";
import type { Product } from "../types/type";
import type { ReactNode } from "react";

// Define the shape of the context
interface ProductContextType {
  loading: boolean;
  error: string | null;
  categories: string[];
  search: string;
  setSearch: (value: string) => void;
  selectedCategory: string | null;
  setSelectedCategory: (value: string | null) => void;
  filteredProducts: Product[];
}

// Create context with default values (can be `null` until initialized)
const ProductContext = createContext<ProductContextType | undefined>(undefined);

// Provider component
export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const { data, loading, error } = useProducts(import.meta.env.VITE_API_URL);
  console.log(data);

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);

  const categories = useMemo(() => {
    return [...new Set(data?.map((p) => p.category) || [])];
  }, [data]);

  const filteredProducts = useMemo(() => {
    if (!data) return [];

    let filtered = data;

    if (selectedCategory) {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (debouncedSearch) {
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(debouncedSearch.toLowerCase())
      );
    }

    return filtered;
  }, [data, selectedCategory, debouncedSearch]);

  return (
    <ProductContext.Provider
      value={{
        loading,
        error,
        categories,
        search,
        setSearch,
        selectedCategory,
        setSelectedCategory,
        filteredProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// Hook to access the context
export const useProductContext = () => useContext(ProductContext);
