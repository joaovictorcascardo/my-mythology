export default function CardCriatura({ nome, categoria, imagem, descricao, atributos }) {
  return (
    <article className="group relative bg-zinc-900/80 border border-zinc-800/80 rounded-sm overflow-hidden hover:border-amber-700/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(180,83,9,0.15)] flex flex-col h-full">
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-950">
        {imagem ? (
          <img 
            src={imagem} 
            alt={nome} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-zinc-800">
             <span className="text-4xl opacity-20 group-hover:text-amber-900/40 transition-colors">🏛️</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/10 to-transparent"></div>
        <p className="absolute top-3 right-3 bg-zinc-950/80 text-amber-500/90 text-[10px] font-medium uppercase tracking-widest px-3 py-1.5 border border-amber-900/30 backdrop-blur-sm shadow-xl">
          {categoria}
        </p>
      </div>
      <div className="p-6 flex flex-col flex-grow relative">
        <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
        <h2 className="text-2xl font-bold text-zinc-100 mb-4 group-hover:text-amber-500 transition-colors duration-300 drop-shadow-sm">{nome}</h2>
        
        {atributos && atributos.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5 mt-auto">
            {atributos.map((attr, index) => (
              <span key={index} className="bg-zinc-950/50 text-zinc-400 border border-zinc-800/60 text-[10px] uppercase tracking-widest px-2 py-1 rounded-sm shadow-inner">
                {attr}
              </span>
            ))}
          </div>
        )}

        <div className="w-10 h-px bg-amber-900/40 mb-4 transition-all duration-500 group-hover:w-16 group-hover:bg-amber-600/50"></div>
        
        <p className="text-zinc-400 text-sm leading-relaxed line-clamp-4">{descricao}</p>
      </div>
    </article>
  );
}
