// import Camp from "@/components/Camp";
// import Features from "@/components/Features";
// import GetApp from "@/components/GetApp";
// import Guide from "@/components/Guide";
// import Hero from "@/components/Hero";

// export default function Aboutus() {
//   return (
//     <>
//       {" "}
//       {/* <Hero />
//       <Camp />
//       <Guide />
//       <Features />
//       <GetApp /> */}
//       <Features />
//     </>
//   );
// }

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import ContactSection from "@/components/contactUs";

interface Service {
  title: string;
  description: string;
  link: string;
  icon: string; // Bootstrap icon class or Lucide icon name
}

const services: Service[] = [
  {
    title: "Academic Support Services",
    description:
      "Comprehensive guidance through tutoring, academic counseling, and mentorship programs to help students excel in their studies.",
    link: "/about-us",
    icon: "bi bi-mortarboard",
  },
  {
    title: "Career Development and Placement",
    description:
      "Assistance with internships, job placement, resume building, and career counseling to prepare students for successful professional futures.",
    link: "/about-us",
    icon: "bi bi-briefcase",
  },
  {
    title: "Library and Information Resources",
    description:
      "Access to a vast collection of physical and digital resources, including books, journals, and research tools, along with dedicated study spaces.",
    link: "/about-us",
    icon: "bi bi-book",
  },
  {
    title: "Health and Wellness Services",
    description:
      "On-campus medical facilities, mental health counseling, and fitness programs to support the overall well-being of students.",
    link: "/about-us",
    icon: "bi bi-heart-pulse",
  },
];

export default function AboutUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  return (
    <div className="space-y-20 mb-10">
      {/* Services Section */}
      <section id="services" className="py-12 mt-20 ">
        <div className="container mx-auto px-4">
          <p className="text-gray-700 leading-relaxed text-justify mb-10">
            YETI Int’l College was established in 2010 AD and got official
            registration and approval on 20th June 2011 AD, has been imparting
            technical and academic knowledge of international standards in the
            field of professional education. It is affiliated to Sripatum
            University, Thailand recognized and approved by the Ministry of
            Education, Science, and Technology, Government of Nepal.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white shadow border border-slate-200 rounded-2xl flex gap-4 items-start">
                <i className={`${service.icon} text-3xl text-blue-600`} />
                <div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="text-gray-600 mb-2">{service.description}</p>
                  <a
                    href={service.link}
                    className="text-blue-600 font-medium hover:underline">
                    Read More →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Video Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-xl overflow-hidden shadow">
            <iframe
              width="100%"
              height="300"
              src="https://www.youtube.com/embed/KKVNhm7afvo"
              title="Yeti College Annual Day"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="rounded-xl"
              allowFullScreen
            />
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-3">
              12th Annual Day, Farewell and Welcome Program 2080
            </h4>
            <p className="text-gray-700">
              A spectacular farewell program marking the end of an unforgettable
              chapter. We also warmly welcome new learners and extend best
              wishes to our graduates. 🌸✨
              <br />
              <strong>Admission Open Now!</strong>
            </p>
          </div>
        </div>
      </section>

      {/* <ContactSection /> */}
    </div>
  );
}
