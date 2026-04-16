import { criaturas } from "./data/criaturas";
import CardCriatura from "./components/CardCriatura";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import Filtros from "./components/Filtros";
import FiltroHabilidades from "./components/FiltroHabilidades";

function App() {
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("");
  const [habilidades, setHabilidades] = useState([]);

  function alternarHabilidade(hab) {
    if (habilidades.includes(hab)) {
      setHabilidades(habilidades.filter((h) => h !== hab));
    } else {
      setHabilidades([...habilidades, hab]);
    }
  }

  const criaturasFiltradas = criaturas.filter((criatura) => {
    const nomeBate = criatura.nome.toLowerCase().includes(busca.toLowerCase());
    const categoriaBate = categoria === "" || criatura.panteao === categoria;
    const habilidadesBate = habilidades.every((h) => criatura.habilidades.includes(h));
    
    return nomeBate && categoriaBate && habilidadesBate;
  });

  return (
    <div className="min-h-screen bg-stone-900 text-stone-300 font-serif selection:bg-amber-700 selection:text-white">
      <div className="mx-auto max-w-7xl p-8 text-center">
        
        <header className="mb-16">
          <h1 className="inline-block text-6xl md:text-8xl font-black uppercase tracking-tighter text-amber-600 drop-shadow-[0_8px_8px_rgba(0,0,0,0.8)] border-b-8 border-amber-900 pb-2">
            My Mythology
          </h1>
          <p className="mt-4 text-stone-500 text-sm uppercase tracking-[0.3em] font-bold">
            Registros da Antiguidade
          </p>
        </header>
        
        <div className="flex flex-col items-center justify-center gap-6 mb-14 w-full">
          <div className="flex flex-col sm:flex-row gap-6 w-full justify-center items-center">
            <SearchBar valor={busca} aoDigitar={setBusca} />
            <Filtros categoriaSelecionada={categoria} aoMudarCategoria={setCategoria} />
          </div>
          <FiltroHabilidades habilidadesSelecionadas={habilidades} aoAlternarHabilidade={alternarHabilidade} />
        </div>

        <main className="mx-auto grid max-w-6xl gap-8 text-left sm:grid-cols-2 lg:grid-cols-3">
          {criaturasFiltradas.length > 0 ? (
            criaturasFiltradas.map((criatura) => (
              <CardCriatura 
                key={criatura.id} 
                nome={criatura.nome} 
                categoria={criatura.panteao} 
                imagem={criatura.imagem} 
                descricao={criatura.descricao} 
              />
            ))
          ) : (
            <div className="col-span-full text-center py-20 border-2 border-dashed border-stone-800 rounded-2xl">
              <p className="text-stone-500 text-xl italic">
                Nenhum registro antigo encontrado.
              </p>
            </div>
          )}
        </main>

        <footer className="mt-20 pb-10 text-stone-600 text-sm">
          <p>© 2026 Registro de Criaturas Mitológicas - Heitor</p>
        </footer>
      </div>
    </div>
  );
}

export default App;