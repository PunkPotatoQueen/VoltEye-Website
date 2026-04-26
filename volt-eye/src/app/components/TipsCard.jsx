export default function TipsCard() {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-md">
      
      <h3 className="font-semibold text-gray-800 mb-2">
        💡 Dica do dia
      </h3>

      <p className="text-sm text-gray-600">
        Ajuste o ar-condicionado para 23°C para reduzir o consumo sem perder conforto.
      </p>

      <button className="mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition">
        Ver mais
      </button>

    </div>
  );
}