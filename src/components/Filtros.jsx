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
          className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ease-in-out border-2 ${categoriaSelecionada === cat.valor
              ? "bg-red-600 text-white border-red-600 shadow-md transform scale-105"
              : "bg-white text-gray-700 border-red-200 hover:border-red-400 hover:bg-red-50 hover:text-red-700"
            }`}
        >
          {cat.rotulo}
        </button>
      ))}
    </div>
  );
}
