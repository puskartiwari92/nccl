// "use client";

// import { useState } from "react";
// import Image from "next/image";

// const featuresData = [
//   {
//     id: 1,
//     title: "Computer lab and Internet",
//     content:
//       "The college runs professional business programs based on efficient learning modules. Most BA-HM (BHM), MBA, and BCA curricula require computer support. To meet this need, the college has ensured the availability of a sophisticated computer lab equipped with branded computers, all connected to the Internet through a dedicated 100/100 Mbps lease line serving the needs of 400 students at a time.",
//     imgSrc: "Smart-Lab-of-the-Future-Powered-by-IoT-min.jpg",
//   },
//   {
//     id: 2,
//     title: "Classrooms and surroundings",
//     content:
//       "The classrooms of Yeti College have an in-built multi-media facility, audio-visual, and computer access. CCTV surveillance covers all the classrooms and most college areas ensuring a safe and secure learning environment.",
//     imgSrc: "classroom.jpeg",
//   },
// ];

// export default function Features() {
//   const [activeTab, setActiveTab] = useState(0);

//   return (
//     <section
//       id="features"
//       className="py-16 bg-cover bg-center"
//       style={{ backgroundImage: "url('/assets/images/ui/bg.png')" }}>
//       <div className="container mx-auto px-4 text-center mb-12">
//         <h2 className="text-3xl font-bold">Features</h2>
//       </div>

//       {/* Tabs */}
//       <div className="container mx-auto px-4 flex justify-center mb-8">
//         <ul className="flex space-x-4">
//           {featuresData.map((feature, index) => (
//             <li key={feature.id}>
//               <button
//                 onClick={() => setActiveTab(index)}
//                 className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300
//                   ${
//                     activeTab === index
//                       ? "bg-[#B21237] text-white"
//                       : "bg-white text-gray-700 hover:bg-[#B21237] hover:text-white"
//                   }`}>
//                 {feature.title}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Tab Content */}
//       <div className="container mx-auto px-4">
//         {featuresData.map((feature, index) => (
//           <div
//             key={feature.id}
//             className={`${
//               activeTab === index ? "block" : "hidden"
//             } transition duration-500`}>
//             <div className="flex flex-col lg:flex-row items-center gap-8">
//               {/* Text */}
//               <div className="lg:w-1/2 order-2 lg:order-1 flex flex-col justify-center">
//                 <h3 className="text-2xl font-bold mb-4 relative inline-block pb-2">
//                   {feature.title}
//                   <span className="absolute bottom-0 left-0 w-16 h-1 bg-[#B21237] rounded-full"></span>
//                 </h3>
//                 <p className="italic text-gray-700">{feature.content}</p>
//               </div>

//               {/* Image */}
//               <div className="lg:w-1/2 order-1 lg:order-2 text-center">
//                 <Image
//                   src={feature.imgSrc}
//                   alt={feature.title}
//                   width={600}
//                   height={400}
//                   className="rounded-lg object-cover w-full h-auto"
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import { Testimonials } from "@/constants";
import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat p-20">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/hero-image2.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            {/* <Image
              src="/camp.svg"
              src="/samplelogo.png"
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
            /> */}
            <h2 className="bold-32 lg:bold-48">What students say about us?</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {Testimonials.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
};

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-5 bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg flex items-center justify-center">
        <Image
          src={icon}
          alt="map"
          width={72}
          height={72}
          className="rounded-full transition-transform duration-500 ease-out hover:scale-125 hover:rotate-6 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]"
        />
      </div>

      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  );
};

export default Features;
