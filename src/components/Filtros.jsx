export default function Filtros({ categoriaSelecionada, aoMudarCategoria }) {
  const categorias = [
    { valor: "", rotulo: "📜 Todos os Panteões" },
    { valor: "Mitologia Grega", rotulo: "🏺 Grega" },
    { valor: "Mitologia Nórdica", rotulo: "⚔️ Nórdica" },
    { valor: "Mitologia Egípcia", rotulo: "👁️ Egípcia" },
    { valor: "Mitologia Japonesa", rotulo: "🌸 Japonesa" },
  ];

  return (
    <div className="flex flex-wrap gap-3 justify-center w-full">
      {categorias.map((cat) => (
        <button
          key={cat.valor}
          onClick={() => aoMudarCategoria(cat.valor)}
          className={`px-4 py-2 rounded-full border text-sm font-semibold transition-all duration-200 ${
            categoriaSelecionada === cat.valor
              ? "bg-amber-600 border-amber-500 text-white shadow-[0_0_10px_rgba(217,119,6,0.6)] scale-105"
              : "bg-stone-800 border-stone-600 text-stone-300 hover:bg-stone-700 hover:border-amber-500"
          }`}
        >
          {cat.rotulo}
        </button>
      ))}
    </div>
  );
}