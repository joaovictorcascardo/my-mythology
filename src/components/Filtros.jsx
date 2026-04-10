export default function Filtros({ categoriaSelecionada, aoMudarCategoria }) {
  return (
    <div className="mb-8">
      <select
        value={categoriaSelecionada}
        onChange={(e) => aoMudarCategoria(e.target.value)}
        className="w-full max-w-md p-2 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        <option value="">Todas as Mitologias</option>
        <option value="Mitologia Grega">Mitologia Grega</option>
        <option value="Mitologia Nórdica">Mitologia Nórdica</option>
        <option value="Mitologia Egípcia">Mitologia Egípcia</option>
        <option value="Mitologia Japonesa">Mitologia Japonesa</option>
      </select>
    </div>
  );
}