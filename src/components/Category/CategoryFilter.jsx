import { useState } from "react";
import { useResponsive } from "../../helper/useResponsive";

const CategoryFilter = ({ categories, onSelect }) => {
  const [active, setActive] = useState(categories[0]); 

  const { isDesktopOrLaptop, isMobile } = useResponsive();

  const handleClick = (category) => {
    setActive(category);
    if (onSelect) onSelect(category); 
  };

  return (
    <>
      {isDesktopOrLaptop && (
        <section className="background-primary w-full px-40 py-12 flex gap-5 border-primary ">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleClick(category)}
              className={`py-5 w-full px-6 rounded-md transition-colors duration-300 cursor-pointer
                ${
                  active === category
                    ? "bg-[#262626] text-white"
                    : "background-primary border border-primary text-white hover:bg-[#1a1a1a]"
                }`}
            >
              {category}
            </button>
          ))}
        </section>
      )}

      {isMobile && (
        <section className="background-primary">
          <div className="flex overflow-y-auto gap-6 px-6 py-10 hide-scrollbar">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleClick(category)}
                className={`py-3 px-5 rounded-md w-[200px] transition-colors duration-300 cursor-pointer flex-shrink-0
                  ${
                    active === category
                      ? "bg-[#262626] text-white"
                      : "background-primary border border-primary text-white hover:bg-[#1a1a1a]"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default CategoryFilter;