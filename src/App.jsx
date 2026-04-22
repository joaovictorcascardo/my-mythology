
//HEITOR POLASTRI, JOÃO VICTOR, KAIO BOLSONI

import { criaturas } from "./data/criaturas";
import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Filtros from "./components/Filtros";
import FiltroAtributo from "./components/FiltroAtributo";
import Galeria from "./components/Galeria";

function App() {
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("");
  const [atributosSelecionados, setAtributosSelecionados] = useState([]);

  const alternarAtributo = (valor) => {
    if (valor === "") {
      setAtributosSelecionados([]);
      return;
    }
    setAtributosSelecionados((prev) =>
      prev.includes(valor)
        ? prev.filter((a) => a !== valor)
        : [...prev, valor]
    );
  };

  const criaturasFiltradas = criaturas.filter((criatura) => {
    const nomeBate = criatura.nome.toLowerCase().includes(busca.toLowerCase());
    const categoriaBate = categoria === "" || criatura.categoria === categoria;
    const atributoBate =
      atributosSelecionados.length === 0 ||
      atributosSelecionados.every((attr) => criatura.atributos?.includes(attr));
    return nomeBate && categoriaBate && atributoBate;
  });

  return (
    <div className="min-h-screen p-8 pt-12 flex flex-col items-center">
      <Header />

      <div className="w-full max-w-3xl flex flex-col items-center">
        <SearchBar valor={busca} aoDigitar={setBusca} />
      </div>

      <div className="flex flex-col gap-6 mb-12 w-full max-w-4xl">
        <Filtros
          categoriaSelecionada={categoria}
          aoMudarCategoria={setCategoria}
        />
        <FiltroAtributo
          atributosSelecionados={atributosSelecionados}
          aoAlternarAtributo={alternarAtributo}
        />
      </div>

      <Galeria criaturas={criaturasFiltradas} />
    </div>
  );
}

export default App;