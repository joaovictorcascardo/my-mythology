export default function CardCriatura({ id, nome, categoria, imagem, descricao, taFavoritado, aoFavoritar }) {
  return (
    <article className="group flex flex-col bg-stone-800 border border-stone-700 rounded-xl overflow-hidden shadow-xl transition-all duration-300">
      <div className="relative h-72 overflow-hidden bg-stone-950">
        {imagem ? (
          <img src={imagem} alt={nome} className="w-full h-full object-cover opacity-80" />
        ) : null}
        <div className="absolute top-3 right-3 bg-stone-900/80 text-amber-500 text-xs px-3 py-1 rounded-sm">
          {categoria}
        </div>
      </div>

      <div className="flex flex-col flex-grow p-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-3xl font-bold text-amber-500">{nome}</h2>
          <button 
            onClick={() => aoFavoritar(id)}
            style={{
              padding: '8px 12px',
              backgroundColor: taFavoritado ? 'red' : 'gray',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            {taFavoritado ? "Remover" : "Favoritar"}
          </button>
        </div>
        <p className="text-stone-400 text-base">{descricao}</p>
      </div>
    </article>
  );
}