interface FilterProps {
  activeCategory: string;
  onCategoryChange: (cat: "all" | "coffee" | "cake") => void;
}

export default function Filter({
  activeCategory,
  onCategoryChange,
}: FilterProps) {
  const categories: { id: "all" | "coffee" | "cake"; label: string }[] = [
    { id: "all", label: "All" },
    { id: "coffee", label: "Coffee" },
    { id: "cake", label: "Cakes" },
  ];

  return (
    <section className="text-center pt-[60px] pb-[30px] px-5">
      <h2 className="text-[35px] text-[#6f4e37] font-bold mb-[25px]">
        Our Menu
      </h2>
      <div className="flex justify-center flex-wrap gap-5">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onCategoryChange(cat.id)}
            className={`px-[30px] py-[12px] rounded-[30px] text-[16px] border-2 border-[#d4a373] transition-colors ${
              activeCategory === cat.id
                ? "bg-[#d4a373] text-white"
                : "bg-white text-[#6f4e37] hover:bg-[#d4a373] hover:text-white"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </section>
  );
}
