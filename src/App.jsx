import { criaturas } from "./data/criaturas";
import CardCriatura from "./components/CardCriatura";
import { useState } from "react";
import SearchBar from "./components/SearchBar";

function App() {

  const [busca, setBusca] = useState("");
  const criaturasFiltradas = criaturas.filter(criatura =>
    criatura.nome.toLowerCase().includes(busca.toLowerCase())
  );

return (
    <div className="mx-auto max-w-7xl p-8 text-center">
      <h1 className="mb-9 text-4xl font-bold text-red-600">
        🏛️ My Mythology
      </h1>
      <SearchBar valor={busca} aoDigitar={setBusca} />
      
      <div className="mx-auto grid max-w-5xl gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
        {criaturasFiltradas.map(({ id, ...props }) => (
          <CardCriatura key={id} {...props} />
        ))}
      </div>
    </div>
  );
}

export default App;
