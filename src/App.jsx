import { criaturas } from "./data/criaturas";
import CardCriatura from "./components/CardCriatura";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import Filtros from "./components/Filtros";

function App() {
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("");
  const [favoritos, setFavoritos] = useState([]);
  const [mostrarFavoritos, setMostrarFavoritos] = useState(false);

  function favoritar(id) {
    if (favoritos.includes(id)) {
      setFavoritos(favoritos.filter((item) => item !== id));
    } else {
      setFavoritos([...favoritos, id]);
    }
  }

  const criaturasFiltradas = criaturas.filter((criatura) => {
    const nomeBate = criatura.nome.toLowerCase().includes(busca.toLowerCase());
    const categoriaBate = categoria === "" || criatura.panteao === categoria;
    const favBate = mostrarFavoritos ? favoritos.includes(criatura.id) : true;
    
    return nomeBate && categoriaBate && favBate;
  });

  return (
    <div className="min-h-screen bg-stone-900 text-stone-300 font-serif">
      <div className="mx-auto max-w-7xl p-8 text-center">
        
        <header className="mb-16">
          <h1 className="inline-block text-6xl md:text-8xl font-black uppercase text-amber-600 border-b-8 border-amber-900 pb-2">
            My Mythology
          </h1>
          <p className="mt-4 text-stone-500 text-sm uppercase tracking-[0.3em] font-bold">
            Registros da Antiguidade
          </p>
          <div className="mt-6 text-amber-400 font-bold text-lg">
            Favoritos: {favoritos.length}
          </div>
        </header>
        
        <div className="flex flex-col items-center justify-center gap-6 mb-14 w-full">
          <div className="flex flex-col sm:flex-row gap-6 w-full justify-center items-center">
            <SearchBar valor={busca} aoDigitar={setBusca} />
            <Filtros categoriaSelecionada={categoria} aoMudarCategoria={setCategoria} />
            <button 
              onClick={() => setMostrarFavoritos(!mostrarFavoritos)}
              className="px-4 py-2 rounded-full border bg-stone-800 text-white"
            >
              {mostrarFavoritos ? "Ver Todos" : "Ver Favoritos"}
            </button>
          </div>
        </div>

        <main className="mx-auto grid max-w-6xl gap-8 text-left sm:grid-cols-2 lg:grid-cols-3">
          {criaturasFiltradas.length > 0 ? (
            criaturasFiltradas.map((criatura) => (
              <CardCriatura 
                key={criatura.id} 
                id={criatura.id}
                nome={criatura.nome} 
                categoria={criatura.panteao} 
                imagem={criatura.imagem} 
                descricao={criatura.descricao}
                taFavoritado={favoritos.includes(criatura.id)}
                aoFavoritar={favoritar}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-stone-500 text-xl italic">Nenhum registro encontrado.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;