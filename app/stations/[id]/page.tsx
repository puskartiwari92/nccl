"use client";
import { useParams, useRouter } from "next/navigation";
import { stations } from "@/app/constant/stations";
import { MapPin, CloudRain, ArrowUp, ChevronLeft } from "lucide-react";

export default function StationDetailPage() {
  const params = useParams();
  const router = useRouter();

  // Find station by ID from URL
  const station = stations.find((s) => s.id === params.id);

  if (!station) {
    return (
      <div className="p-20 text-center">
        <h2 className="text-2xl font-bold">Station Not Found</h2>
        <button
          onClick={() => router.back()}
          className="text-blue-500 underline mt-4">
          Go Back
        </button>
      </div>
    );
  }

  const stats = [
    { label: "1 hours", value: station.rainfall.h1 },
    { label: "3 hours", value: station.rainfall.h3 },
    { label: "6 hours", value: station.rainfall.h6 },
    { label: "12 hours", value: station.rainfall.h12 },
    { label: "24 hours", value: station.rainfall.h24 },
  ];

  return (
    <main className="max-w-4xl mt-24 mx-auto p-6">
      <button
        onClick={() => router.push("/")} // Change to your map page path
        className="flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-6 transition-colors">
        <ChevronLeft size={20} /> Back to Monitoring Map
      </button>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
        <div className="bg-blue-600 p-6 text-white">
          <h1 className="text-3xl font-bold">{station.name}</h1>
          <p className="opacity-90">Station Index: {station.id}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          <div className="space-y-4">
            <h3 className="font-semibold text-slate-800 border-b pb-2">
              Geographic Information
            </h3>
            <DetailRow
              icon={<MapPin size={18} />}
              label="District"
              value={station.district}
            />
            <DetailRow
              icon={<ArrowUp size={18} />}
              label="Elevation"
              value={`${station.elevation}m`}
            />
            <DetailRow
              icon={<CloudRain size={18} />}
              label="Latitude"
              value={station.lat}
            />
            <DetailRow
              icon={<CloudRain size={18} />}
              label="Longitude"
              value={station.lng}
            />

            {/* <div className="mt-6">
              <p className="text-xs text-slate-400 mb-2 uppercase font-bold tracking-widest">
                Site Photo
              </p>
              <img
                src={station.image}
                alt={station.name}
                className="w-full h-52 object-cover rounded-xl border shadow-inner"
              />
            </div> */}
          </div>

          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 h-fit">
            <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
              <CloudRain className="text-blue-500" /> Latest Rainfall Data
            </h3>
            <div className="space-y-2">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="flex justify-between items-center p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
                  <span className="text-slate-600 font-medium">{s.label}</span>
                  <span className="font-mono text-blue-700 font-bold">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-slate-400 mt-4 text-center italic">
              Data last synced: {new Date().toLocaleTimeString()}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

function DetailRow({ icon, label, value }: any) {
  return (
    <div className="flex items-center gap-4 py-1">
      <div className="text-blue-500 bg-blue-50 p-2 rounded-lg">{icon}</div>
      <div>
        <p className="text-[10px] uppercase text-slate-400 font-bold tracking-tight">
          {label}
        </p>
        <p className="font-semibold text-slate-700">{value}</p>
      </div>
    </div>
  );
}
