export default function EnergyCard({ total }) {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-2xl shadow-md">
      
      <p className="text-white/90 text-sm font-medium">
        Consumo em tempo real
      </p>

      <h2 className="text-4xl font-bold text-white mt-2">
        {total.toFixed(2)} kW
      </h2>

      <p className="text-white/70 text-xs mt-2">
        Atualizado agora
      </p>

    </div>
  );
}