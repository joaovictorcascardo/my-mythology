export default function FiltroAtributo({ atributosSelecionados = [], aoAlternarAtributo }) {
  const atributos = [
    { valor: "", rotulo: "Todos os Atributos" },
    { valor: "Força", rotulo: "Força" },
    { valor: "Agilidade", rotulo: "Agilidade" },
    { valor: "Inteligência", rotulo: "Inteligência" },
    { valor: "Resistência", rotulo: "Resistência" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {atributos.map((attr) => {
        const isSelected =
          attr.valor === ""
            ? atributosSelecionados.length === 0
            : atributosSelecionados.includes(attr.valor);

        return (
          <button
            key={attr.valor}
            onClick={() => aoAlternarAtributo(attr.valor)}
            className={`px-5 py-2 text-xs uppercase tracking-widest transition-all duration-300 ease-in-out border rounded-sm ${
              isSelected
                ? "bg-zinc-800/80 text-zinc-200 border-zinc-600/50"
                : "bg-transparent text-zinc-600 border-transparent hover:text-zinc-400"
            }`}
          >
            {attr.rotulo}
          </button>
        );
      })}
    </div>
  );
}
