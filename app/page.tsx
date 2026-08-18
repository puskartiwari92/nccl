import About from "@/components/About";
import BatchCards from "@/components/Batch";
import CallToAction2 from "@/components/Callaction";
import Camp from "@/components/Camp";
import Campus from "@/components/Campus";
import ClassSection from "@/components/ClassSection";
import Courses from "@/components/courses";
import CTA from "@/components/CTA";
import Facilities from "@/components/Facilities";
import FaqSection from "@/components/FaqSection";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StartsSection";
import Testimonials from "@/components/Testimonial";

// import { stations } from "@/constants/stations";
import StationDetails from "@/components/StationDetails";
import dynamic from "next/dynamic";
import { stations } from "./constant/stations";
import MapStation from "@/components/MapStation";

export default function Home() {
  return (
    <>
      <Hero />
      <Camp />
      {/* <Courses /> */}
      <Campus />
      {/* <CTA /> */}
      <Facilities />

      {/* <Features /> */}
      {/* <Guide /> */}

      <About />

      <MapStation />
      {/* <BatchCards />
      <About />
      <ClassSection />
      <CallToAction2 />
      <Features />
      <Testimonials />
      <StatsSection />
      <FaqSection /> */}
      {/* <StatsSection /> */}
      <FaqSection />

      {/* <Guide /> */}
      {/* <Features /> */}
      {/* <GetApp /> */}
    </>
  );
}
