export default function AnalyzeButton({ analyze, disabled, loading }) {
  return (
    <button
      onClick={analyze}
      disabled={disabled || loading}
      className={`w-[120px] py-3 mt-6 rounded-md font-medium transition flex items-center justify-center gap-2
        ${disabled || loading
          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
          : "bg-black text-white hover:bg-[#5e8a86] cursor-pointer"
        }`}
    >
      {loading ? (
        <>
          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          Analyzing...
        </>
      ) : (
        "Analyze"
      )}
    </button>
  );
}