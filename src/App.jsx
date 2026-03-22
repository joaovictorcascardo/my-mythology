import { criaturas } from "./data/criaturas";
import CardCriatura from "./components/CardCriatura";

function App() {
  return (
    <div className="mx-auto max-w-7xl p-8 text-center">
      <h1 className="mb-8 text-4xl font-bold text-purple-500">
        🏛️ My Mythology
      </h1>
      <div className="mx-auto grid max-w-5xl gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
        {criaturas.map((c) => (
          <CardCriatura
            key={c.id}
            nome={c.nome}
            categoria={c.categoria}
            imagem={c.imagem}
            descricao={c.descricao}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
