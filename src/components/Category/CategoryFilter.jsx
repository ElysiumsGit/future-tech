import { useState } from "react";

const CategoryFilter = ({ categories, onSelect }) => {
  const [active, setActive] = useState(categories[0]); 

  const handleClick = (category) => {
    setActive(category);
    if (onSelect) onSelect(category); 
  };

  return (
    <section className="bg-black w-full px-40 py-12 flex gap-5 border-primary flex-wrap">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleClick(category)}
          className={`py-3 px-6 rounded-md transition-colors duration-300 
            ${
              active === category
                ? "bg-[#262626] text-white"
                : "bg-black border border-primary text-white hover:bg-[#1a1a1a]"
            }`}
        >
          {category}
        </button>
      ))}
    </section>
  );
};

export default CategoryFilter;