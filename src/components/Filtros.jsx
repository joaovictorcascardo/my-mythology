export default function Filtros({ categoriaSelecionada, aoMudarCategoria }) {
  const categorias = [
    { valor: "", rotulo: "Todas" },
    { valor: "Mitologia Grega", rotulo: "Grega" },
    { valor: "Mitologia Nórdica", rotulo: "Nórdica" },
    { valor: "Mitologia Egípcia", rotulo: "Egípcia" },
    { valor: "Mitologia Japonesa", rotulo: "Japonesa" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categorias.map((cat) => (
        <button
          key={cat.valor}
          onClick={() => aoMudarCategoria(cat.valor)}
          className={`px-6 py-2.5 text-xs uppercase tracking-widest transition-all duration-300 ease-in-out border rounded-sm ${
            categoriaSelecionada === cat.valor
              ? "bg-amber-900/20 text-amber-500 border-amber-700/50 shadow-[0_0_15px_rgba(180,83,9,0.15)]"
              : "bg-zinc-900/40 text-zinc-500 border-zinc-800/80 hover:border-zinc-700 hover:text-zinc-300"
          }`}
        >
          {cat.rotulo}
        </button>
      ))}
    </div>
  );
}
