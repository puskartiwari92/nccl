"use client";

import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    img: "admission.png",
    alt: "Admission Open",
    title: "Admission Open",
    link: "?page=contact",
    btnText: "Apply",
  },
  {
    img: "about.png",
    alt: "About Us",
    title: "About Us",
    link: "?page=about-intro",
    btnText: "View More",
  },
  {
    img: "scholarship.png",
    alt: "Scholarship",
    title: "Scholarship",
    link: "#",
    btnText: "Apply",
  },
];

const BatchCards = () => {
  return (
    <section className="py-12  bg-slate-100 ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl z-40 -mt-40 shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center">
              <Image
                src={card.img}
                alt={card.alt}
                width={270}
                height={200}
                // className="mb-4"
              />
              <h5 className="text-lg font-semibold mb-3">{card.title}</h5>
              <Link
                href={card.link}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition">
                {card.btnText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BatchCards;
