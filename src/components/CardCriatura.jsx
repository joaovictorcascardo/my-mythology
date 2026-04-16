export default function CardCriatura({ nome, categoria, imagem, descricao }) {
  return (
    <article className="group flex flex-col bg-stone-800 border border-stone-700 rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-amber-900/40 hover:-translate-y-2 hover:border-amber-700">
      <div className="relative h-72 overflow-hidden bg-stone-950">
        {imagem ? (
          <img 
            src={imagem} 
            alt={nome} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100"
          />
        ) : null}
        <div className="absolute top-3 right-3 bg-stone-900/80 backdrop-blur-sm text-amber-500 text-xs font-bold px-3 py-1 rounded-sm border border-stone-600">
          {categoria}
        </div>
      </div>

      <div className="flex flex-col flex-grow p-6 border-t border-stone-700 group-hover:border-amber-700 transition-colors">
        <h2 className="text-3xl font-bold text-amber-500 mb-3 font-serif drop-shadow-sm">{nome}</h2>
        <p className="text-stone-400 text-base leading-relaxed flex-grow">{descricao}</p>
      </div>
    </article>
  );
}