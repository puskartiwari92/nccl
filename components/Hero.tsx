// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";

// const heroSlides = [
//   {
//     title: (
//       <>
//         Empowering <span className="text-blue-500">Future Unleashing</span>{" "}
//         Innovation...
//       </>
//     ),
//     description:
//       "We are committed to shaping future leaders through quality education and hands-on learning. Our programs in IT, Business, Hospitality, and Management foster creativity, critical thinking, and innovation, empowering students to thrive in a rapidly evolving world.",
//   },
//   {
//     title: (
//       <>
//         Your <span className="text-blue-500">Journey</span> to{" "}
//         <span className="text-blue-500">Success</span> Begins Here
//       </>
//     ),
//     description:
//       "Discover industry-relevant programs in IT, Business, Hospitality, and Management designed to equip you with the knowledge and skills for a successful career.",
//   },
//   {
//     title: (
//       <>
//         <span className="text-blue-500">Education</span> That Prepares You for
//         the Real <span className="text-blue-500">World</span>
//       </>
//     ),
//     description:
//       "From practical training to global exposure, our diverse courses like ABM, BCA, BHM, BBA, and MBA help you become career-ready and future-focused.",
//   },
// ];

// const heroImages = [
//   "/hero-image3.png",
//   "/hero-imagered.png",
//   // Add more images if needed
// ];

// const Hero = () => {
//   const [slideIndex, setSlideIndex] = useState(0);

//   // Automatic slide change
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSlideIndex((prev) => (prev + 1) % heroSlides.length);
//     }, 5000); // Change slide every 5 seconds
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section id="hero" className="hero section bg-gray-900 text-white py-20">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row items-center gap-8">
//           {/* Left Column: Slide Text */}
//           <div className="lg:w-1/2 flex flex-col justify-center space-y-6">
//             <h1 className="text-4xl lg:text-5xl font-bold">
//               {heroSlides[slideIndex].title}
//             </h1>
//             <p className="text-gray-300">
//               {heroSlides[slideIndex].description}
//             </p>
//             <div className="flex space-x-4 mt-4">
//               <a
//                 href="?page=get-started"
//                 className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md transition">
//                 Get Started
//               </a>
//               <a
//                 href="https://www.youtube.com/watch?v=KKVNhm7afvo"
//                 className="flex items-center space-x-2 border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition">
//                 <i className="bi bi-play-circle"></i>
//                 <span>Watch Video</span>
//               </a>
//             </div>
//           </div>

//           {/* Right Column: Image Slider */}
//           <div className="lg:w-1/2 relative w-full h-80 lg:h-[400px]">
//             {heroImages.map((img, index) => (
//               <div
//                 key={index}
//                 className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
//                   index === slideIndex ? "opacity-100 z-10" : "opacity-0 z-0"
//                 }`}>
//                 <Image
//                   src={img}
//                   alt={`Hero ${index}`}
//                   fill
//                   className="object-contain"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "./Button";

const heroSlides = [
  {
    title: (
      <>
        National Cryosphere <span className="text-blue-500 ">and</span> Climate
        Lab (NCCL)
      </>
    ),
    description: "Research on Climate,Glaciers & Water Resources in Himalays.",
  },
  {
    title: (
      <>
        Seven <span className="text-blue-500">Years </span> in{" "}
        <span className="text-blue-500">Science</span> Begins Here
      </>
    ),
    description:
      "Embark on a transformative journey where curiosity meets discovery. Our comprehensive seven-year curriculum provides a seamless pathway from foundational learning to advanced mastery in the scientific field.",
  },
  {
    title: (
      <>
        <span className="text-blue-500">Achievements </span> And the Way{" "}
        <span className="text-blue-500">Forward</span>
      </>
    ),
    description:
      "Celebrating a legacy of excellence while pivoting toward a tech-driven future. We turn milestones into stepping stones, ensuring our students are prepared for the evolving challenges of the global workforce.",
  },
];

const heroImages = ["/pari42.jpg", "/pari43.jpg", "/pari44.jpg"];

const Hero = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  // Automatic slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-container mt-16 padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      {/* <div className="  hero-map" /> */}

      {/* Left Column: Slide Text */}
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-52">{heroSlides[slideIndex].title}</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          {heroSlides[slideIndex].description}
        </p>

        <div className="flex flex-col w-full gap-3 sm:flex-row mt-10">
          {/* <Button type="button" title="Get Started" variant="btn_red" /> */}
          <Button
            type="button"
            title="Combine"
            variant="btn_red"
            className="px-6 py-3"
          />

          <a
            href="https://www.youtube.com/watch?v=ptQ2VDfCcUA"
            className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-6 py-3 hover:bg-white hover:text-black transition">
            <Image src="/play.svg" alt="play" width={20} height={20} />
            <span>Watch Video</span>
          </a>
        </div>
      </div>

      {/* Right Column: Image Slider */}
      <div className="relative flex flex-1 items-start">
        <div className="relative w-full h-80 lg:h-[400px]">
          {heroImages.map((img, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                index === slideIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}>
              <Image
                src={img}
                alt={`Hero ${index}`}
                fill
                className="object-contain rounded-3xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
