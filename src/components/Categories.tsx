import React from "react";

interface CategoriesProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

const Categories: React.FC<CategoriesProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex flex-wrap gap-3 p-4 justify-center md:justify-start">
      <CategoryButton
        label="All"
        isActive={selectedCategory === null}
        onClick={() => onSelectCategory(null)}
      />
      {categories.map((category) => (
        <CategoryButton
          key={category}
          label={category}
          isActive={selectedCategory === category}
          onClick={() => onSelectCategory(category)}
        />
      ))}
    </div>
  );
};

interface CategoryButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
  label,
  isActive,
  onClick,
}) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full border transition-colors duration-200 
      ${
        isActive
          ? "bg-blue-600 text-white border-blue-600"
          : "bg-white text-gray-700 border-gray-300 hover:bg-blue-100"
      }`}
    aria-pressed={isActive}
  >
    {label}
  </button>
);

export default Categories;
