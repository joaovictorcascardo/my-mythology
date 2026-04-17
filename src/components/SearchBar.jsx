export default function SearchBar({ valor, aoDigitar }) {
  return (
    <div className="mb-8 w-full">
      <div className="relative w-full max-w-md mx-auto">
        <input
          type="text"
          placeholder="PESQUISAR NOS REGISTROS..."
          value={valor}
          onChange={(e) => aoDigitar(e.target.value)}
          className="w-full p-4 pl-5 pr-14 bg-zinc-900/50 border border-zinc-800/80 text-zinc-200 text-sm tracking-widest uppercase placeholder-zinc-600 focus:outline-none focus:border-amber-700/80 focus:ring-1 focus:ring-amber-700/30 transition-all rounded-sm shadow-inner"
        />
        <span className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-600">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </span>
      </div>
    </div>
  );
}