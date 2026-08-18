"use client";
import Image from "next/image";
import { principalData } from "./principalData";

const PrincipalMessage = () => {
  return (
    <section
      id="services"
      style={{
        backgroundImage: "url('/assets/images/ui/bg.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
      className="services section py-12 mt-20">
      <div className="container mx-auto px-4">
        {principalData.map((item, index) => (
          <div
            key={index}
            className="bg-white/80 rounded-2xl shadow-lg p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left content */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                {item.title} <span className="text-blue-600">{item.role}</span>
              </h2>
              <div className="text-gray-700 space-y-4 leading-relaxed">
                {item.message.split("\n").map(
                  (line, i) =>
                    line.trim() && (
                      <p key={i} className="mb-2">
                        {line}
                      </p>
                    )
                )}
              </div>
              <p className="mt-6 font-semibold text-gray-900">
                {item.name} <br />
                {item.designation} <br />
                {item.college}
              </p>
            </div>

            {/* Right content */}
            <div className="flex justify-center lg:justify-end">
              <Image
                src={item.image}
                alt={item.role}
                width={400}
                height={500}
                className="rounded-2xl shadow-md object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PrincipalMessage;
