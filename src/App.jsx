import { criaturas } from "./data/criaturas";
import CardCriatura from "./components/CardCriatura";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import Filtros from "./components/Filtros";
import FiltroAtributo from "./components/FiltroAtributo";

function App() {
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("");
  const [atributosSelecionados, setAtributosSelecionados] = useState([]);


  //Ou esse prev ai eh valor anteior
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
      <div className="mb-14 text-center">
        <h1 className="mb-4 text-5xl md:text-6xl font-black tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700 drop-shadow-sm">
          My Mythology
        </h1>
        <div className="h-px w-48 bg-gradient-to-r from-transparent via-amber-700/50 to-transparent mx-auto"></div>
      </div>

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

      <div className="mx-auto w-full max-w-6xl grid gap-8 pb-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-left">
        {criaturasFiltradas.length > 0 ? (
          criaturasFiltradas.map(({ id, ...props }) => (
            <CardCriatura key={id} {...props} />
          ))
        ) : (
          <p className="col-span-full mt-10 text-center text-zinc-600 text-lg uppercase tracking-widest">
            Nenhuma criatura ou deus encontrado nos pergaminhos.
          </p>
        )}
      </div>
    </div>
  );
}

export default App;