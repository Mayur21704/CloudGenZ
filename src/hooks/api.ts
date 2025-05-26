// hooks/useProducts.ts
import { useEffect, useState } from "react";
import axios from "axios";
import type { Product } from "../types/type";

export const useProducts = (API_URL: string) => {
  const [data, setData] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(API_URL);
        setData(response.data);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Could not load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [API_URL]);

  return { data, loading, error };
};

export const useDebounce = (input: string, delay = 300): string => {
  const [debouncedValue, setDebouncedValue] = useState(input);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(input), delay);
    return () => clearTimeout(timer);
  }, [input, delay]);

  return debouncedValue;
};
