const CategoryFilter = ({ categories, selected, onChange }) => {
  return (
    <div className="mb-6">
      <label className="mb-3 block font-semibold text-card-foreground">Categories</label>
      <div className="space-y-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onChange(category)}
            className={`w-full text-left px-4 py-2 rounded transition-colors ${
              selected === category
                ? 'bg-[#815331] text-white'
                : 'bg-muted text-muted-foreground hover:bg-[#815331]/10'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
