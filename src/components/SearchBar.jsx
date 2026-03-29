export default function SearchBar({ valor, aoDigitar }) {
  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="PESQUISAR SUA CRIATURA"
        value={valor}
        onChange={(e) => aoDigitar(e.target.value)}
        className="w-full max-w-md p-2 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>
  );
}