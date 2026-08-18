// "use client";
// import { useState } from "react";
// import { stations } from "@/app/constant/stations";
// import dynamic from "next/dynamic";
// import StationDetails from "./StationDetails";

// // Dynamically import map to avoid SSR errors
// const MapSection = dynamic(() => import("@/components/MapSection"), {
//   ssr: false,
//   loading: () => (
//     <div className="h-[500px] w-full bg-gray-100 animate-pulse rounded-xl" />
//   ),
// });

// const MapStation = () => {
//   const [selectedStation, setSelectedStation] = useState(null);

//   return (
//     <main className="max-w-7xl mx-auto p-6 space-y-8">
//       <header>
//         <h1 className="text-3xl font-bold text-slate-800">
//           Rainfall Monitoring Network
//         </h1>
//         <p className="text-slate-500">
//           Center for Analytical Science - Research Division
//         </p>
//       </header>

//       <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
//         <div className="xl:col-span-2">
//           <MapSection
//             stations={stations}
//             onStationSelect={setSelectedStation}
//           />
//         </div>
//         <div className="xl:col-span-1">
//           <StationDetails station={selectedStation} />
//         </div>
//       </div>
//     </main>
//   );
// };

// export default MapStation;

"use client";
import { stations } from "@/app/constant/stations";
import dynamic from "next/dynamic";

const MapSection = dynamic(() => import("@/components/MapSection"), {
  ssr: false,
  loading: () => (
    <div className="h-[600px] w-full bg-slate-100 animate-pulse rounded-xl" />
  ),
});

export default function MapStation() {
  return (
    <main className="max-w-7xl mx-auto p-6 space-y-8">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Rainfall Monitoring Network
          </h1>
          <p className="text-slate-500 font-medium">
            Center for Analytical Science
          </p>
        </div>
        <div className="text-right hidden md:block">
          <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold">
            ● Live Monitoring
          </span>
        </div>
      </header>

      <div className="w-full">
        <MapSection stations={stations} />
      </div>
    </main>
  );
}
