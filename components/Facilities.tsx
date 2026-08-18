// import Image from "next/image";

// export default function Facilities() {
//   return (
//     <section className="w-4/5 mx-auto text-center py-16">
//       <h1 className="text-3xl font-bold">Our Facilities</h1>
//       <p className="text-gray-600 mt-3">
//         State of the art facilities for students.
//       </p>

//       <div className="mt-10 grid md:grid-cols-3 gap-8">
//         <div>
//           <Image
//             src={"./img-1"}
//             className="rounded-lg shadow hover:shadow-xl transition"
//           />
//           <h3 className="text-xl font-semibold mt-4">World Class Library</h3>
//           <p className="text-gray-600 mt-2">
//             Thousands of books and journals available.
//           </p>
//         </div>
//         <div>
//           <img
//             src="/image/basketball.png"
//             className="rounded-lg shadow hover:shadow-xl transition"
//           />
//           <h3 className="text-xl font-semibold mt-4">Play Ground</h3>
//           <p className="text-gray-600 mt-2">
//             Sports facilities for holistic growth.
//           </p>
//         </div>
//         <div>
//           <img
//             src="/image/cafeteria.png"
//             className="rounded-lg shadow hover:shadow-xl transition"
//           />
//           <h3 className="text-xl font-semibold mt-4">Tasty and Healthy Food</h3>
//           <p className="text-gray-600 mt-2">Nutritious meals served daily.</p>
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";

export default function Facilities() {
  return (
    <section className="w-4/5 mx-auto text-center py-16">
      <h1 className="text-3xl font-bold">Recent News & Activities</h1>
      <p className="text-gray-600 mt-3">
        State of the art facilities for students.
      </p>

      <div className="mt-10 grid md:grid-cols-3 gap-8">
        {/* Library */}
        <div>
          <Image
            src="pari24.jpg"
            alt="World Class Library"
            width={400}
            height={300}
            className="rounded-lg shadow hover:shadow-xl transition"
          />
          <h3 className="text-xl font-semibold mt-4">Campaign</h3>
          <p className="text-gray-600 mt-2">Learn more about campaign</p>
        </div>

        {/* Playground */}
        <div>
          <Image
            src="pari23.jpg"
            alt="Play Ground"
            width={400}
            height={300}
            className="rounded-lg shadow hover:shadow-xl transition"
          />
          <h3 className="text-xl font-semibold mt-4">Campaign</h3>
          <p className="text-gray-600 mt-2">Learn more about campaign</p>
        </div>

        {/* Cafeteria */}
        <div>
          <Image
            src="pari24.jpg"
            alt="Tasty and Healthy Food"
            width={400}
            height={300}
            className="rounded-lg shadow hover:shadow-xl transition"
          />
          <h3 className="text-xl font-semibold mt-4">Campaign</h3>
          <p className="text-gray-600 mt-2">
            Seminar on Mechano-Chemical Sensing
          </p>
        </div>
      </div>

      <div className="mt-10 grid md:grid-cols-3 gap-8">
        {/* Library */}
        <div>
          <Image
            src="pari25.jpg"
            alt="World Class Library"
            width={400}
            height={300}
            className="rounded-lg shadow hover:shadow-xl transition"
          />
          <h3 className="text-xl font-semibold mt-4">Seminar</h3>
          <p className="text-gray-600 mt-2">Conservation Dialogue</p>
        </div>

        {/* Playground */}
        <div>
          <Image
            src="pari26.jpg"
            alt="Play Ground"
            width={400}
            height={300}
            className="rounded-lg shadow hover:shadow-xl transition"
          />
          <h3 className="text-xl font-semibold mt-4">Conservation Reseach</h3>
          <p className="text-gray-600 mt-2">Conservation Reseach Fund</p>
        </div>

        {/* Cafeteria */}
        <div>
          <Image
            src="pari27.jpg"
            alt="Tasty and Healthy Food"
            width={400}
            height={300}
            className="rounded-lg shadow hover:shadow-xl transition"
          />
          <h3 className="text-xl font-semibold mt-4">Research Mentorship </h3>
          <p className="text-gray-600 mt-2">Research Mentorship program</p>
        </div>
      </div>
    </section>
  );
}
