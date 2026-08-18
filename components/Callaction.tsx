"use client";

import Link from "next/link";

export default function CallToAction2() {
  return (
    <section
      id="call-to-action-2"
      className="call-to-action-2 section bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div
          className="flex justify-center"
          data-aos="zoom-in"
          data-aos-delay="100">
          <div className="w-full xl:w-10/12 text-center">
            <h3 className="text-3xl font-bold mb-4">Call To Action</h3>
            <p className="mb-6 text-gray-300">
              Click below to connect with us. Whether you’re looking for program
              details, admissions support, or just want to learn more, we’re
              here to guide you every step of the way.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#B21237] hover:bg-red-700 text-white font-semibold py-3 px-6 rounded transition">
              Get in Touch Now!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
