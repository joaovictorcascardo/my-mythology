export default function FiltroHabilidades({ habilidadesSelecionadas, aoAlternarHabilidade }) {
  const habilidades = [
    { valor: "Força", rotulo: "💪 Força" },
    { valor: "Magia", rotulo: "✨ Magia" },
    { valor: "Inteligência", rotulo: "🧠 Inteligência" },
    { valor: "Velocidade", rotulo: "⚡ Velocidade" },
  ];

  return (
    <div className="flex flex-col items-center gap-3 w-full mt-4">
      <span className="text-stone-500 text-sm font-semibold uppercase tracking-widest">Habilidades</span>
      <div className="flex flex-wrap gap-2 justify-center">
        {habilidades.map((hab) => {
          const selecionado = habilidadesSelecionadas.includes(hab.valor);
          return (
            <button
              key={hab.valor}
              onClick={() => aoAlternarHabilidade(hab.valor)}
              className={`px-3 py-1.5 rounded-lg border text-sm font-semibold transition-all duration-200 ${
                selecionado
                  ? "bg-amber-800/80 border-amber-600 text-amber-100 shadow-[0_0_10px_rgba(217,119,6,0.5)]"
                  : "bg-stone-800 border-stone-700 text-stone-400 hover:bg-stone-700 hover:border-amber-700/50 hover:text-stone-300"
              }`}
            >
              {hab.rotulo}
            </button>
          );
        })}
      </div>
    </div>
  );
}
