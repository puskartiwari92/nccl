// import Image from "next/image";
// import { PEOPLE_URL } from "@/constants";

// export default function Campus() {
//   return (
//     <section className="w-4/5 mx-auto text-center py-16">
//       <h1 className="text-3xl font-bold">Our Global Campus</h1>
//       <p className="text-gray-600 mt-3">Discover our campuses worldwide.</p>

//       <div className="mt-10 grid md:grid-cols-3 gap-6">
//         {PEOPLE_URL.map((img, i) => (
//           <div key={i} className="relative rounded-lg overflow-hidden group">
//             <img src={`/image/${img}`} alt="Campus" className="w-full" />
//             <div className="absolute inset-0 bg-cyan-500/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
//               <h3 className="text-white text-2xl font-semibold">
//                 Campus {i + 1}
//               </h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import { SPU_URL } from "@/constants";

// console.log("peopleurl", PEOPLE_URL);

export default function Campus() {
  return (
    <section className="w-4/5 mx-auto text-center py-16">
      <h1 className="text-3xl font-bold">Featured Projects</h1>
      <p className="text-gray-600 mt-3">Discover our universities worldwide.</p>

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {SPU_URL.map((img, i) => (
          <div key={i} className="relative rounded-lg overflow-hidden group">
            <Image
              src={`${img}`}
              alt={`Courses ${i + 1}`}
              width={400}
              height={300}
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-cyan-500/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <h3 className="text-white text-2xl font-semibold">
                Featured {i + 1}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
