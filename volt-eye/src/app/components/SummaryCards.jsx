export default function SummaryCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

      <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
        <p className="text-blue-600 text-sm font-medium">Hoje</p>
        <h2 className="text-xl font-bold text-gray-800">12.4 kWh</h2>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
        <p className="text-purple-600 text-sm font-medium">Mês</p>
        <h2 className="text-xl font-bold text-gray-800">320 kWh</h2>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
        <p className="text-green-600 text-sm font-medium">Economia</p>
        <h2 className="text-xl font-bold text-gray-800">R$ 45</h2>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
        <p className="text-indigo-600 text-sm font-medium">Eficiência</p>
        <h2 className="text-xl font-bold text-gray-800">92%</h2>
      </div>

    </div>
  );
}