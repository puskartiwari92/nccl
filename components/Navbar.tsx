// import { NAV_LINKS } from "@/constants"
// import Image from "next/image"
// import Link from "next/link"
// import Button from "./Button"

// const Navbar = () => {
//   return (
//     <nav className="flexBetween max-container padding-container relative z-30 py-5">
//       <Link href="/">
//         <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
//       </Link>

//       <ul className="hidden h-full gap-12 lg:flex">
//         {NAV_LINKS.map((link) => (
//           <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
//             {link.label}
//           </Link>
//         ))}
//       </ul>

//       <div className="lg:flexCenter hidden">
//         <Button
//           type="button"
//           title="Login"
//           icon="/user.svg"
//           variant="btn_dark_green"
//         />
//       </div>

//       <Image
//         src="menu.svg"
//         alt="menu"
//         width={32}
//         height={32}
//         className="inline-block cursor-pointer lg:hidden"
//       />
//     </nav>
//   )
// }

// export default Navbar

// "use client";

// import { NAV_LINKS } from "@/constants";
// import Image from "next/image";
// import Link from "next/link";
// import Button from "./Button";
// import { useState } from "react";

// const Navbar = () => {
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);

//   return (
//     <nav className="flexBetween max-container padding-container relative z-30 py-5">
//       <Link href="/">
//         <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
//       </Link>

//       <ul className="hidden h-full gap-12 lg:flex">
//         {NAV_LINKS.map((link) => (
//           <li
//             key={link.key}
//             className="relative group"
//             onMouseEnter={() => setOpenDropdown(link.key)}
//             onMouseLeave={() => setOpenDropdown(null)}>
//             {link.children ? (
//               <>
//                 <span className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
//                   {link.label}
//                 </span>
//                 {/* Dropdown */}
//                 {openDropdown === link.key && (
//                   <ul className="absolute left-0 top-full mt-1 bg-white text-black shadow-lg rounded-lg w-40">
//                     {link.children.map((child) => (
//                       <li key={child.key}>
//                         <Link
//                           href={child.href}
//                           className="block px-4 py-2 hover:bg-gray-100">
//                           {child.label}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </>
//             ) : (
//               <Link
//                 href={link.href}
//                 className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
//                 {link.label}
//               </Link>
//             )}
//           </li>
//         ))}
//       </ul>

//       <div className="lg:flexCenter hidden">
//         <Button
//           type="button"
//           title="Login"
//           icon="/user.svg"
//           variant="btn_dark_green"
//         />
//       </div>

//       <Image
//         src="menu.svg"
//         alt="menu"
//         width={32}
//         height={32}
//         className="inline-block cursor-pointer lg:hidden"
//       />
//     </nav>
//   );
// };

// export default Navbar;

// "use client";
// import { useEffect, useState } from "react";
// import { NAV_LINKS } from "@/constants";
// import Image from "next/image";
// import Link from "next/link";
// import Button from "./Button";
// // import { useState } from "react";
// import { ChevronDown } from "lucide-react";

// const Navbar = () => {
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     // <nav className="flexBetween max-container bg-red-600  padding-container relative z-30 py-10">
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         scrolled ? "bg-green-600 py-5" : "bg-red-600 py-10"
//       }`}>
//       <Link href="/">
//         <Image src="/logo.png" alt="logo" width={74} height={29} />
//       </Link>

//       <ul className="hidden h-full gap-12 lg:flex">
//         {NAV_LINKS.map((link) => (
//           <li
//             key={link.key}
//             className="relative group"
//             onMouseEnter={() => setOpenDropdown(link.key)}
//             onMouseLeave={() => setOpenDropdown(null)}>
//             {link.children ? (
//               <>
//                 <span className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
//                   {link.label}
//                   <ChevronDown
//                     size={16}
//                     className={`ml-1 transition-transform ${
//                       openDropdown === link.key ? "rotate-180" : ""
//                     }`}
//                   />
//                 </span>
//                 {/* Dropdown */}
//                 {openDropdown === link.key && (
//                   <ul className="absolute left-0 top-full  bg-white text-black shadow-lg rounded-lg w-80">
//                     {link.children.map((child) => (
//                       <li key={child.key}>
//                         <Link
//                           href={child.href}
//                           className="block px-4 py-2 hover:bg-gray-100">
//                           {child.label}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </>
//             ) : (
//               <Link
//                 href={link.href}
//                 className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
//                 {link.label}
//               </Link>
//             )}
//           </li>
//         ))}
//       </ul>

//       <div className="lg:flexCenter flex gap-8 hidden">
//         {/* <Button
//           type="button"
//           title="Login"
//           icon="/user.svg"
//           variant="btn_dark_green"
//         /> */}
//         <Link href="/">
//           <Image src="/spu-logo.png" alt="logo" width={74} height={29} />
//         </Link>
//         {/* <Button
//           type="button"
//           title="Login"
//           icon="/user.svg"
//           variant="btn_dark_green"
//         /> */}
//       </div>

//       <Image
//         src="menu.svg"
//         alt="menu"
//         width={32}
//         height={32}
//         className="inline-block cursor-pointer lg:hidden"
//       />
//     </nav>
//   );
// };

// export default Navbar;

"use client";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${
        scrolled ? " bg-white py-4 shadow-md" : " py-6  bg-slate-200"
      }`}>
      {/* ✅ Container for full-width flex layout */}
      <div className="flex justify-between items-center max-w-[1440px] mx-auto px-6">
        {/* Logo */}
        <Link href="/">
          <Image src="/NccLogo.png" alt="logo" width={80} height={44} />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <li
              key={link.key}
              className="relative group"
              onMouseEnter={() => setOpenDropdown(link.key)}
              onMouseLeave={() => setOpenDropdown(null)}>
              {link.children ? (
                <>
                  <span className=" text-[16px] flex items-center cursor-pointer pb-1.5 transition-all hover:font-bold">
                    {link.label}
                    <ChevronDown
                      size={16}
                      className={`ml-1 transition-transform ${
                        openDropdown === link.key ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                  {/* Dropdown */}
                  {/* {openDropdown === link.key && (
                    <ul className="absolute left-0 top-full bg-white text-black rounded-lg w-80 shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
                      {link.children.map((child) => (
                        <li key={child.key}>
                          <Link
                            href={child.href}
                            className="block px-4 py-2 hover:bg-gray-100">
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )} */}
                  {/* {openDropdown === link.key && (
                    <ul className="absolute left-0 top-full bg-white text-black rounded-lg w-80 shadow-[0_4px_12px_rgba(0,0,0,0.15)] divide-y divide-gray-200">
                      {link.children.map((child) => (
                        <li key={child.key}>
                          <Link
                            href={child.href}
                            className="flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-700 hover:bg-green-100 hover:text-green-700 transition-colors duration-200">
                            {child.label}
                            <span className="text-gray-400 group-hover:text-green-600">
                              ›
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )} */}
                  {openDropdown === link.key && (
                    <ul
                      className={`absolute left-1/2 top-full transform -translate-x-1/2 bg-white text-black rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.15)] p-4 gap-4 grid
      ${
        link.key === "courses"
          ? "grid-cols-2 w-full min-w-[60vw] "
          : "grid-cols-1 w-full min-w-[20vw]"
      }`}>
                      {link.children.map((child) => (
                        <li
                          key={child.key}
                          className=" rounded-md hover:bg-blue-300 transition-colors duration-200">
                          <Link
                            href={child.href}
                            className="block px-4 py-1 text-sm font-medium text-gray-700 hover:text-gray-90 ">
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={link.href}
                  className=" text-[16px] cursor-pointer pb-1.5 transition-all hover:font-bold">
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="hidden lg:flex gap-8 items-center">
          <Link href="/">
            <Image src="/NccLogo.png" alt="logo" width={74} height={55} />
          </Link>
        </div>

        {/* Mobile Menu */}
        <Image
          src="/menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="lg:hidden inline-block cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default Navbar;
