"use client";

import Image from "next/image";
import { useState } from "react";

// Testimonials data
const testimonialsData = [
  {
    id: 1,
    name: "Chandan Kushwaha",
    batch: "2020 BCA [Batch]",
    imgSrc: "student2.jpg",
    stars: 5,
    text: "For me, choosing Yeti turned out to be the best decision. Yeti International College offers an outstanding blend of practical and theoretical knowledge. The faculty is highly supportive, maintainable, and the resources provided are top-notch. It's truly a place where students can thrive and achieve their academic goals.",
  },
  {
    id: 2,
    name: "Dhiraj Shah",
    batch: "2020 BCA [Batch]",
    imgSrc: "dhiraj.jpg",
    stars: 5,
    text: "Words convey our feelings and a “THANK YOU” conveys our gratitude and appreciation. So, I must thank YETI Int’l College (Former ICHM Lalitpur College) for striding the dream in all of us and supporting a lot in fulfilling it. YETI Int’l College supports developing a strong feeling of self-confidence among the students to win in this competitive world.",
  },
  {
    id: 3,
    name: "Rupesh Kushwaha",
    batch: "2021 BCA [Batch]",
    imgSrc: "student1.jpg",
    stars: 5,
    text: "Yeti international college is the best college in Kathmandu. This College has good infrastructure and monument and vast college environment and equipment are good in condition and libraries are plenty of books and sports centers with all sports equipment and classrooms with good classrooms and infrastructure.",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="section bg-gray-50 py-16">
      <div className="container mx-auto text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl font-bold">What students say about us?</h2>
      </div>

      <div className="container mx-auto px-4">
        <div className="relative flex overflow-x-auto space-x-6">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`flex-shrink-0 w-full sm:w-96 p-6 bg-white rounded-lg shadow-lg transition-transform duration-300 ${
                activeIndex === index ? "scale-100" : "scale-95 opacity-70"
              }`}>
              <div className="text-center">
                <Image
                  src={testimonial.imgSrc}
                  alt={testimonial.name}
                  width={100}
                  height={100}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                <h4 className="text-gray-500 mb-2">{testimonial.batch}</h4>

                <div className="flex justify-center mb-4 text-yellow-400">
                  {Array.from({ length: testimonial.stars }).map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="w-5 h-5">
                      <path d="M3.612 15.443c-.396.198-.86-.149-.746-.592l.83-4.73-3.522-3.356c-.33-.315-.158-.888.283-.95l4.898-.696L8.465.792c.197-.39.73-.39.927 0l2.19 4.327 4.898.696c.441.062.613.635.283.95l-3.522 3.356.83 4.73c.114.443-.35.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-700 italic relative before:content-['“'] after:content-['”']">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
