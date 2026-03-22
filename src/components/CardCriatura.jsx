export default function CardCriatura({ nome, categoria, imagem, descricao }) {
  return (
    <article className="card">
      <div className="card__media">
        {imagem ? (
          <img src={imagem} alt={nome} />
        ) : null}
        <p className="card__categoria">{categoria}</p>
      </div>
      <div className="card__body">
        <h2 className="card__titulo">{nome}</h2>
        <p className="card__descricao">{descricao}</p>
      </div>
    </article>
  );
}
