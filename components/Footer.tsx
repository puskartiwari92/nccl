// "use client";

// import Link from "next/link";

// const aboutInfo = {
//   description:
//     "At Yeti Int'l College, we believe education is the foundation of a successful and fulfilling life. Our college is committed to providing a transformative learning experience that empowers students to excel academically.",
//   phone: "+977-14792063, 9851314471, 9803323042",
//   email: "info@yeticollege.edu.np",
//   hours: "Sun - Fri 6.00 - 18.00",
// };

// const courses = [
//   { id: 1, title: "MBA - Master in Business Administration" },
//   { id: 2, title: "BHM - Bachelor in Hotel Management" },
//   { id: 3, title: "BABM - Bachelor in Airlines Business Management" },
//   { id: 4, title: "BAMM - Bachelor in MICE (Event) Management" },
//   { id: 5, title: "BTTM - Bachelor in Tourism & MICE Management" },
//   { id: 6, title: "BCA - Bachelor in Computer Application" },
// ];

// const supportLinks = [
//   { label: "About Us", href: "/about" },
//   { label: "Our Staff", href: "/staff" },
//   { label: "Available Courses", href: "/courses" },
//   { label: "Gallery", href: "/gallery" },
//   { label: "Contact Us", href: "/contact" },
// ];

// const socialLinks = [
//   {
//     icon: "fa-brands fa-facebook",
//     href: "https://www.facebook.com/YETICollege",
//   },
//   {
//     icon: "fa-brands fa-instagram",
//     href: "https://www.instagram.com/yetiintlcollege/",
//   },
//   {
//     icon: "fa-brands fa-youtube",
//     href: "https://www.youtube.com/@YETIInternationalCollege",
//   },
// ];

// export default function Footer() {
//   return (
//     <footer className="bg-gray-100 text-gray-700 ">
//       <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
//         {/* About */}
//         <div>
//           <h4 className="border-b-2 border-blue-900 inline-block mb-3 font-bold text-lg">
//             About
//           </h4>
//           <p className="text-sm">{aboutInfo.description}</p>
//           <p className="mt-2 text-sm">
//             <i className="fa-solid fa-phone"></i> {aboutInfo.phone}
//           </p>
//           <p className="mt-1 text-sm">
//             <i className="fa-solid fa-envelope"></i> {aboutInfo.email}
//           </p>
//           <p className="mt-1 text-sm">
//             <i className="fa-solid fa-clock"></i> {aboutInfo.hours}
//           </p>
//         </div>

//         {/* Courses */}
//         <div>
//           <h4 className="border-b-2 border-blue-900 inline-block mb-3 font-bold text-lg">
//             Outstanding Courses
//           </h4>
//           <ul className="space-y-2 text-sm">
//             {courses.map((course) => (
//               <li key={course.id}>
//                 <Link
//                   href={`/course/${course.id}`}
//                   className="hover:text-blue-600">
//                   {course.title}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Support */}
//         <div>
//           <h4 className="border-b-2 border-blue-900 inline-block mb-3 font-bold text-lg">
//             Support
//           </h4>
//           <ul className="space-y-2 text-sm">
//             {supportLinks.map((link, index) => (
//               <li key={index}>
//                 <Link href={link.href} className="hover:text-blue-600">
//                   {link.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Flexible Learning */}
//         <div>
//           <h4 className="border-b-2 border-blue-900 inline-block mb-3 font-bold text-lg">
//             Flexible Learning
//           </h4>
//           <p className="text-sm mb-3">
//             At Yeti Int'l College, we believe education is the foundation of a
//             successful and fulfilling life.
//           </p>
//           <img src="logo.png" alt="logo" className="w-28" />
//         </div>
//       </div>

//       {/* Bottom Footer */}
//       <div className="border-t border-gray-300 mt-6 py-4">
//         <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
//           <p>
//             2025 © Yeti Int&apos;l College, All Rights Reserved, Developed By:{" "}
//             <a
//               href="https://github.com/kushwahachandanbtry"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="font-bold hover:underline">
//               Chandan Kushwaha
//             </a>
//           </p>

//           <div className="flex items-center gap-4 mt-3 md:mt-0">
//             <span>Follow Us:</span>
//             <div className="flex gap-3">
//               {socialLinks.map((social, index) => (
//                 <a
//                   key={index}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer">
//                   <i
//                     className={`${social.icon} text-lg hover:text-blue-600`}></i>
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image src="/NccLogo.png" alt="logo" width={74} height={29} />
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link) => (
                    <Link href="/" key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    href="/"
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row">
                    <p className="whitespace-nowrap">{link.label}:</p>
                    <p className="medium-14 whitespace-nowrap text-blue-70">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            {/* <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-30">
                  {SOCIALS.links.map((link) => (
                    <Link href="/" key={link}>
                      <Image src={link} alt="logo" width={24} height={24} />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div> */}
            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-30">
                  {SOCIALS.links.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform">
                        <Image
                          src={item.icon}
                          alt="social icon"
                          width={24}
                          height={24}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">
          Copyright © 2026 Society for Conservation Biology - | All Rights
          Reserved, Powered by: Prabesh Dhungana
        </p>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
