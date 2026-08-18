// components/WhyUs.tsx
"use client";

import Image from "next/image";

interface WhyUsItem {
  title: string;
  description: string;
  image: string;
}

const whyUsData: WhyUsItem[] = [
  {
    title: "Food Safety and Regulation",
    description:
      "Over 60% of households in Nepal are using water contaminated with sewage (indicated by the presence of E. coli and coliform bacteria).",
    image: "/whyus1.png",
  },
  {
    title: "Contamination Levels:",
    description:
      "While 98.2% of the population uses an improved water source, the majority of these sources fail safety tests due to cross-contamination with rainwater and aging sewage systems",
    image: "/whyus3.png",
  },
  {
    title: "Improved Source",
    description:
      "Studies by NAST (Nepal Academy of Science and Technology) show that even jar water and tap water in the capital frequently exceed national standards for fecal coliform. Biofilm formation in old pipelines makes disinfection particularly difficult.",
    image: "/whyus2.png",
  },
  {
    title: "Kathmandu Valley Specifics:",
    description:
      "We prepare you for today’s competitive world with a perfect blend of theory, practice, and personality development.",
    image: "/whyus4.png",
  },
];

const WhyUs = () => {
  return (
    // <section
    //   id="services"
    //   className="services section py-16 bg-cover bg-center mt-20"
    //   style={{ backgroundImage: "url('/assets/images/ui/bg.png')" }}>
    //   {/* Section Title */}
    //   <div className="container mx-auto text-center mb-12">
    //     <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
    //     <p className="text-gray-600 max-w-2xl mx-auto">
    //       Because we combine quality education, practical training, and a
    //       supportive environment to shape confident, career-ready graduates.
    //     </p>
    //   </div>

    //   {/* Content */}
    //   <div className="container mx-auto grid md:grid-cols-3 gap-8 items-center">
    //     {/* Left two items */}
    //     <div className="flex flex-col gap-10">
    //       {whyUsData.slice(0, 2).map((item, idx) => (
    //         <div key={idx} className="text-center md:text-right">
    //           <Image
    //             src={item.image}
    //             alt={item.title}
    //             width={40}
    //             height={40}
    //             className="rounded-full mx-auto md:ml-auto mb-4"
    //           />
    //           <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
    //           <p className="text-gray-600">{item.description}</p>
    //         </div>
    //       ))}
    //     </div>

    //     {/* Center Image */}
    //     <div className="hidden md:flex justify-center">
    //       <Image
    //         src="/whyuscenter.png"
    //         alt="Why Us"
    //         width={250}
    //         height={250}
    //         className="rounded-full"
    //       />
    //     </div>

    //     {/* Right two items */}
    //     <div className="flex flex-col gap-10">
    //       {whyUsData.slice(2).map((item, idx) => (
    //         <div key={idx} className="text-center md:text-left">
    //           <Image
    //             src={item.image}
    //             alt={item.title}
    //             width={40}
    //             height={40}
    //             className="rounded-full mx-auto md:mr-auto mb-4"
    //           />
    //           <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
    //           <p className="text-gray-600">{item.description}</p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>

    <section
      id="services"
      className="py-20 bg-cover bg-center mt-20"
      style={{ backgroundImage: "url('/assets/images/ui/bg.png')" }}>
      {/* Section Title */}
      <div className="container mx-auto text-center mb-16 px-4">
        <h2 className="text-4xl font-bold mb-4">
          Water Quality and Safety Status (2026)
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          The Department of Food Technology and Quality Control (DFTQC) is the
          primary regulatory body. In 2026, their focus has shifted toward
          stricter enforcement and digital monitoring
        </p>
      </div>

      {/* Content Grid */}
      <div className="container mx-auto grid md:grid-cols-3 gap-12 items-center px-4">
        {/* Left two items */}
        <div className="flex flex-col gap-12">
          {whyUsData.slice(0, 2).map((item, idx) => (
            <div
              key={idx}
              className="text-center md:text-right space-y-3 hover:scale-105 transition-transform duration-300">
              <Image
                src={item.image}
                alt={item.title}
                width={80}
                height={80}
                className="rounded-full mx-auto md:ml-auto shadow-md"
              />
              <h4 className="text-xl font-semibold">{item.title}</h4>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className="hidden md:flex justify-center">
          <Image
            src="/whyuscenter.png"
            alt="Why Us"
            width={280}
            height={280}
            className="rounded-full shadow-lg"
          />
        </div>

        {/* Right two items */}
        <div className="flex flex-col gap-12">
          {whyUsData.slice(2).map((item, idx) => (
            <div
              key={idx}
              className="text-center md:text-left space-y-3 hover:scale-105 transition-transform duration-300">
              <Image
                src={item.image}
                alt={item.title}
                width={80}
                height={80}
                className="rounded-full mx-auto md:mr-auto shadow-md"
              />
              <h4 className="text-xl font-semibold">{item.title}</h4>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
