export default function SearchBar({ valor, aoDigitar }) {
  return (
    <div className="w-full max-w-sm">
      <input
        type="text"
        placeholder="Pesquisar registros..."
        value={valor}
        onChange={(e) => aoDigitar(e.target.value)}
        className="w-full p-3 bg-stone-800 border border-stone-600 rounded-md text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-colors shadow-inner"
      />
    </div>
  );
}