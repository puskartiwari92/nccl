// "use client";

// import Image from "next/image";

// const aboutData = {
//   meta: "MORE ABOUT US",
//   title: "Exploring the Top Colleges and Their Impact on Society",
//   description: `At Yeti Int'l College, we believe education is the foundation of a successful and fulfilling life. Our college is committed to providing a transformative learning experience that empowers students to excel academically, grow personally, and prepare for a promising future.`,
//   features: [
//     ["Academic Excellence", "World-Class Facilities", "Vibrant Campus Life"],
//     ["Student-Centered Approach", "Global Opportunities"],
//   ],
//   experience: {
//     years: "15+",
//     text: "Of experience in education service",
//   },
//   image: "/about-hero-bg.jpeg", // put inside /public
// };

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="py-16 bg-cover bg-center"
//       style={{ backgroundImage: "url('/bg.png')" }}>
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Left Content */}
//           <div>
//             <span className="text-sm uppercase tracking-wide text-blue-600 font-semibold">
//               {aboutData.meta}
//             </span>
//             <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
//               {aboutData.title}
//             </h2>
//             <p className="text-gray-600 mb-8">{aboutData.description}</p>

//             <div className="grid grid-cols-2 gap-6">
//               {aboutData.features.map((featureGroup, idx) => (
//                 <ul key={idx} className="space-y-3">
//                   {featureGroup.map((feature, i) => (
//                     <li
//                       key={i}
//                       className="flex items-center gap-2 text-gray-700">
//                       <i className="bi bi-check-circle-fill text-blue-600"></i>
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//               ))}
//             </div>
//           </div>

//           {/* Right Image Section */}
//           <div className="relative">
//             <div className="rounded-2xl overflow-hidden shadow-lg">
//               <Image
//                 src={aboutData.image}
//                 alt="About Us"
//                 width={600}
//                 height={400}
//                 className="rounded-2xl object-cover"
//               />
//             </div>
//             <div className="absolute -bottom-8 -left-8 bg-blue-600 text-white rounded-2xl p-6 shadow-lg">
//               <h3 className="text-3xl font-bold">
//                 {aboutData.experience.years}{" "}
//                 <span className="text-base font-normal">Years</span>
//               </h3>
//               <p className="text-sm">{aboutData.experience.text}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

"use client";

import { useState } from "react";
import Image from "next/image";

const featuresData = [
  {
    id: 1,
    title: "Conservation Research Fund",
    content:
      "Nepal empowers conservation scientists, students, and practitioners to conserve Nepal’s rich natural heritage with evidence‑based research, inclusive dialogue, and action‑oriented funding.",
    imgSrc: "pari32.jpg",
  },
  {
    id: 2,
    title: "Research Mentorship",
    content:
      "Nepal to grow your research skills, access mentorship, support action research, and shape the future of conservation in Nepal through science and collaboration.",
    imgSrc: "pari33.jpg",
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="features"
      className="p-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/images/ui/bg.png')" }}>
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl font-bold">Features</h2>
      </div>

      {/* Tabs */}
      <div className="container mx-auto px-4 flex justify-center mb-8">
        <ul className="flex space-x-4">
          {featuresData.map((feature, index) => (
            <li key={feature.id}>
              <button
                onClick={() => setActiveTab(index)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300
                  ${
                    activeTab === index
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-700 hover:bg-blue-500 hover:text-white"
                  }`}>
                {feature.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Tab Content */}
      <div className="container mx-auto px-4">
        {featuresData.map((feature, index) => (
          <div
            key={feature.id}
            className={`${
              activeTab === index ? "block" : "hidden"
            } transition duration-500`}>
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Text */}
              <div className="lg:w-1/2 order-2 lg:order-1 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4 relative inline-block pb-2">
                  {feature.title}
                  <span className="absolute bottom-0 left-0 w-16 h-1 bg-blue-500 rounded-full"></span>
                </h3>
                <p className=" text-gray-700">{feature.content}</p>
              </div>

              {/* Image */}
              <div className="lg:w-1/2 order-1 lg:order-2 text-center">
                <Image
                  src={feature.imgSrc}
                  alt={feature.title}
                  width={600}
                  height={400}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
