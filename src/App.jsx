import { criaturas } from "./data/criaturas";
import CardCriatura from "./components/CardCriatura";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import Filtros from "./components/Filtros";

function App() {
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("");

  const criaturasFiltradas = criaturas.filter((criatura) => {
    const nomeBate = criatura.nome.toLowerCase().includes(busca.toLowerCase());
    const categoriaBate = categoria === "" || criatura.categoria === categoria;
    return nomeBate && categoriaBate;
  });

  return (
    <div className="mx-auto max-w-7xl p-8 text-center">
      <h1 className="mb-9 text-4xl font-bold text-red-600">🏛️ My Mythology</h1>
      <SearchBar valor={busca} aoDigitar={setBusca} />

      <Filtros
        categoriaSelecionada={categoria}
        aoMudarCategoria={setCategoria}
      />

      <div className="mx-auto grid max-w-5xl gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
        
        {criaturasFiltradas.length > 0 ? (
          criaturasFiltradas.map(({ id, ...props }) => (
            <CardCriatura key={id} {...props} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 text-lg">
            Nenhuma criatura ou deus encontrado com esse nome.
          </p>
        )}

      </div>
    </div>
  );
}

export default App;