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
            className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ease-in-out border-2 ${
              isSelected
                ? "bg-blue-600 text-white border-blue-600 shadow-md transform scale-105"
                : "bg-white text-gray-700 border-blue-200 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700"
            }`}
          >
            {attr.rotulo}
          </button>
        );
      })}
    </div>
  );
}
