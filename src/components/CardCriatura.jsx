export default function CardCriatura({ nome, categoria, imagem, descricao, atributos }) {
  return (
    <article className="card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="card__media relative">
        {imagem ? (
          <img src={imagem} alt={nome} className="w-full h-48 object-cover" />
        ) : null}
        <p className="card__categoria absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
          {categoria}
        </p>
      </div>
      <div className="card__body p-5">
        <h2 className="card__titulo text-xl font-bold mb-2">{nome}</h2>
        
        {atributos && atributos.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {atributos.map((attr, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                {attr}
              </span>
            ))}
          </div>
        )}

        <p className="card__descricao text-gray-600 text-sm line-clamp-4">{descricao}</p>
      </div>
    </article>
  );
}
