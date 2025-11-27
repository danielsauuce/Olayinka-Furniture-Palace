const LoadMoreButton = ({ hasMore, onClick }) => {
  if (!hasMore) return null;

  return (
    <div className="text-center mt-8">
      <button
        onClick={onClick}
        className="px-6 py-3 bg-white text-[hsl(25_45%_35%)] border-2 border-[hsl(25_45%_35%)] rounded-md shadow hover:bg-[hsl(25_45%_35%)] hover:text-white transition"
      >
        View More
      </button>
    </div>
  );
};

export default LoadMoreButton;
