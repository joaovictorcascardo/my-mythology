export default function Filtros({ categoriaSelecionada, aoMudarCategoria }) {
  return (
    <div className="w-full max-w-sm">
      <select
        value={categoriaSelecionada}
        onChange={(e) => aoMudarCategoria(e.target.value)}
        className="w-full p-3 bg-stone-800 border border-stone-600 rounded-md text-stone-200 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-colors cursor-pointer shadow-inner"
      >
        <option value="">📜 Todos os Panteões</option>
        <option value="Mitologia Grega">🏺 Mitologia Grega</option>
        <option value="Mitologia Nórdica">⚔️ Mitologia Nórdica</option>
        <option value="Mitologia Egípcia">👁️ Mitologia Egípcia</option>
        <option value="Mitologia Japonesa">🌸 Mitologia Japonesa</option>
      </select>
    </div>
  );
}