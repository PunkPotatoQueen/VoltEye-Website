export default function DevicesList({ devices }) {
  return (
    <div>
      <h2 className="font-semibold mb-4 text-gray-800">
        Dispositivos
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        {devices.map((device) => {
          const isHigh = device.power > 0.5;

          return (
            <div
              key={device.name}
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition flex justify-between"
            >
              <div>
                <p className="font-medium text-gray-800">
                  {device.name}
                </p>
                <p className="text-sm text-gray-600">
                  {device.location}
                </p>
              </div>

              <div className="text-right">
                <p className={`font-bold ${
                  isHigh ? "text-red-500" : "text-green-600"
                }`}>
                  {device.power.toFixed(2)} kW
                </p>

                <p className="text-xs text-gray-600">
                  {isHigh ? "Alto consumo" : "Normal"}
                </p>
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}