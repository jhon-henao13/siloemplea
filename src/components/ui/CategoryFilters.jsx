export default function CategoryFilters({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="w-full py-4 bg-surface sticky top-16 z-40 border-b border-surface-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
          Filtrar por oficio:
        </p>
        <div className="flex space-x-2 overflow-x-auto no-scrollbar scroll-smooth pb-2">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => onSelectCategory(category)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-primary text-surface shadow-sm scale-105'
                    : 'bg-surface border border-slate-200 text-text-main hover:border-primary'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}