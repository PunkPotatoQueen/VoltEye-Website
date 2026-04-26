export default function DeviceCard({ device }) {
  const isHigh = device.power > 0.5;

  return (
    <div className="bg-white rounded-2xl p-4 shadow flex justify-between items-center hover:scale-[1.02] transition">

      <div>
        <h3 className="font-semibold">{device.name}</h3>
        <p className="text-sm text-gray-500">{device.location}</p>
      </div>

      <div className="text-right">
        <p className={`font-bold ${isHigh ? "text-red-500" : "text-green-600"}`}>
          {device.power.toFixed(2)} kW
        </p>

        <p className="text-xs text-gray-400">
          {isHigh ? "Alto consumo" : "Normal"}
        </p>
      </div>

    </div>
  );
}