import { criaturas } from "./data/criaturas";
import CardCriatura from "./components/CardCriatura";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import Filtros from "./components/Filtros";

function App() {
  // Criamos os estados para guardar o que o usuário digita e o que ele seleciona
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("");

  // Aqui fazemos o filtro: ele pega a lista inteira e só deixa passar quem
  // combina com o nome digitado E com a categoria escolhida
  const criaturasFiltradas = criaturas.filter((criatura) => {
    const nomeBate = criatura.nome.toLowerCase().includes(busca.toLowerCase());
    const categoriaBate = categoria === "" || criatura.categoria === categoria;
    return nomeBate && categoriaBate;
  });

  return (
    <div className="min-h-screen bg-stone-900 text-stone-300 font-serif selection:bg-amber-700 selection:text-white">
      <div className="mx-auto max-w-7xl p-8 text-center">
        
        {/* Título Novo: Robusto, Pesado e Monumental */}
        <header className="mb-16">
          <h1 className="inline-block text-6xl md:text-8xl font-black uppercase tracking-tighter text-amber-600 drop-shadow-[0_8px_8px_rgba(0,0,0,0.8)] border-b-8 border-amber-900 pb-2">
            My Mythology
          </h1>
          <p className="mt-4 text-stone-500 text-sm uppercase tracking-[0.3em] font-bold">
            Registros da Antiguidade
          </p>
        </header>
        
        {/* Controles de Busca e Filtro (Mantendo as props originais setBusca e setCategoria) */}
        <div className="flex flex-col items-center justify-center gap-6 mb-14 sm:flex-row">
          <SearchBar setBusca={setBusca} />
          <Filtros setCategoria={setCategoria} />
        </div>

        {/* Listagem de Cards: Organizada em Grid (grade) */}
        <main className="mx-auto grid max-w-6xl gap-8 text-left sm:grid-cols-2 lg:grid-cols-3">
          {criaturasFiltradas.length > 0 ? (
            criaturasFiltradas.map((criatura) => (
              <CardCriatura 
                key={criatura.id} 
                nome={criatura.nome} 
                categoria={criatura.categoria} 
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