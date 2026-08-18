"use client";

import ContactSection from "@/components/contactUs";
import Image from "next/image";

const spuImages = [
  { id: 1, src: "/pari23.jpg", alt: "SPU Image 1" },
  { id: 2, src: "/pari24.jpg", alt: "SPU Image 2" },
  { id: 3, src: "/pari25.jpg", alt: "SPU Image 3" },
  { id: 5, src: "/pari26.jpg", alt: "SPU Image 5" },
];

export default function Spu() {
  return (
    <>
      <section className="py-12">
        <div className="container mx-auto px-0">
          {spuImages.map((img) => (
            <div key={img.id} className="mb-8">
              <Image
                src={img.src}
                alt={img.alt}
                width={1920}
                height={1080}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          ))}
        </div>
      </section>
      {/* <ContactSection /> */}
    </>
  );
}
