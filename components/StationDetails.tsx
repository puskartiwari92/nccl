import { MapPin, CloudRain, ArrowUp } from "lucide-react";

export default function StationDetails({ station }: { station: any }) {
  if (!station)
    return (
      <div className="h-full flex items-center justify-center text-gray-400 bg-gray-50 rounded-xl border-2 border-dashed">
        Click a station on the map to view details
      </div>
    );

  const stats = [
    { label: "1 hours", value: station.rainfall.h1 },
    { label: "3 hours", value: station.rainfall.h3 },
    { label: "6 hours", value: station.rainfall.h6 },
    { label: "12 hours", value: station.rainfall.h12 },
    { label: "24 hours", value: station.rainfall.h24 },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200">
      <div className="bg-blue-600 p-4 text-white flex justify-between items-center">
        <h2 className="text-xl font-bold">{station.name}</h2>
        <span className="text-sm opacity-80">ID: {station.id}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
        <div className="space-y-3">
          <DetailRow
            icon={<MapPin size={16} />}
            label="District"
            value={station.district}
          />
          <DetailRow
            icon={<ArrowUp size={16} />}
            label="Elevation"
            value={`${station.elevation}m`}
          />
          <DetailRow
            icon={<CloudRain size={16} />}
            label="Lat/Long"
            value={`${station.lat}, ${station.lng}`}
          />
          <img
            src={station.image}
            alt="Station"
            className="w-full h-40 object-cover rounded-lg mt-4 border"
          />
        </div>

        <div className="border rounded-lg overflow-hidden">
          <div className="bg-slate-100 p-2 font-semibold text-sm">
            Latest Rainfall
          </div>
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex justify-between p-3 border-b last:border-0 text-sm">
              <span>{s.label}</span>
              <span className="font-mono">{s.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DetailRow({ icon, label, value }: any) {
  return (
    <div className="flex items-center gap-3 text-sm">
      <div className="text-blue-500">{icon}</div>
      <span className="text-gray-500 w-20">{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}
