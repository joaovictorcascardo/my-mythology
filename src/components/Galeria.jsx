import CardCriatura from "./CardCriatura";

export default function Galeria({ criaturas }) {
  return (
    <div className="mx-auto w-full max-w-6xl grid gap-8 pb-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-left">
      {criaturas.length > 0 ? (
        criaturas.map(({ id, ...props }) => (
          <CardCriatura key={id} {...props} />
        ))
      ) : (
        <p className="col-span-full mt-10 text-center text-zinc-600 text-lg uppercase tracking-widest">
          Nenhuma criatura ou deus encontrado nos pergaminhos.
        </p>
      )}
    </div>
  );
}