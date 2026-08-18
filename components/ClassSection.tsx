"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const courses = [
  {
    id: 1,
    title: "Center For Analytical Science",
    img: "/mbabg.png",
    desc: "This program of studies consists of two (2) compul...",
  },
  {
    id: 2,
    title: "Standardization of Safety Protocols",
    img: "/bhmbg.png",
    desc: "Service-minded students want to learn creatively w...",
  },
  {
    id: 3,
    title: "Innovation in Environmental Monitoring",
    img: "/babm.png",
    desc: "Landing at SPU Airline, an airline where students ...",
  },
  {
    id: 4,
    title: "Professional Mentorship & Capacity Building",
    img: "/bamm.png",
    desc: "The BA in MICE (Event) Management program at Sripa...",
  },
  {
    id: 5,
    title: "Evidence-Based Policy Advocacy",
    img: "/bttm.png",
    desc: "The BA in MICE (Event) Management program at Sripa...",
  },
  {
    id: 6,
    title: "Center for Analytical Science",
    img: "/bcabg.png",
    desc: "YETI International College(former Bhadra Ghale Mul...",
  },
];

export default function ClassSection() {
  const [offset, setOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setOffset((prev) => (prev + 1) % courses.length);
    }, 2000); // slide every 3 seconds
    return () => clearInterval(slideInterval);
  }, []);

  // Duplicate the courses array so we can loop seamlessly
  const displayCourses = [...courses, ...courses];

  return (
    <section id="classes" className="classes section py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">We Offer</h2>

        <div className="flex overflow-hidden" ref={containerRef}>
          <div
            className="flex transition-transform duration-700"
            style={{
              transform: `translateX(-${(offset * 100) / 4}%)`,
              width: `${(displayCourses.length * 100) / 4}%`,
            }}>
            {displayCourses.map((course, index) => (
              <div key={index} className="w-1/6 p-2 flex-shrink-0">
                <div className="bg-white rounded-xl shadow-lg">
                  <Image
                    src={course.img}
                    alt={course.title}
                    width={500}
                    height={300}
                    className="rounded-t-xl object-cover w-full h-48"
                  />
                  <div className="p-4">
                    <h5 className="text-lg font-bold text-[#B21237]">
                      {course.title}
                    </h5>
                    <p className="text-gray-600">{course.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
