"use client";

import { useState } from "react";
import Image from "next/image";

interface CourseDetailsProps {
  courseData: any;
}

const CourseDetails = ({ courseData }: CourseDetailsProps) => {
  // const [activeTab, setActiveTab] = useState("description");

  return (
    <div>
      {/* Banner */}
      <div className="relative w-full h-[60vh] overflow-hidden text-center">
        <div className="absolute inset-0 bg-[rgba(77,26,26,0.1)] z-10"></div>
        <Image
          src={courseData.bannerImage}
          alt={courseData.title}
          fill
          className="object-cover transition-transform duration-1000 hover:scale-105"
          priority
        />
        <h1 className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white bg-black bg-opacity-60 px-6 py-3 rounded text-2xl md:text-4xl font-bold shadow-lg">
          {courseData.title}
        </h1>
      </div>

      {/* Main Content */}
      <div
        className="bg-cover bg-center bg-no-repeat py-10"
        style={{ backgroundImage: `url('${courseData.bgImage}')` }}>
        <div className="container mx-auto px-4">
          {/* Tabs */}
          <div className="flex justify-center space-x-10 pb-6">
            <h4
              // onClick={() => setActiveTab("description")}
              className={`cursor-pointer text-lg font-semibold border-b-2 pb-1 ${
                // activeTab === "description"
                // ? "border-red-500 text-black"
                // :
                "border-transparent text-gray-600"
              }`}>
              Description
            </h4>
            {/* <h4
              onClick={() => setActiveTab("syllabus")}
              className={`cursor-pointer text-lg font-semibold border-b-2 pb-1 ${
                activeTab === "syllabus"
                  ? "border-red-500 text-black"
                  : "border-transparent text-gray-600"
              }`}>
              Syllabus
            </h4> */}
          </div>

          {/* Info Section */}
          {/* <div className="flex flex-col lg:flex-row justify-between items-center px-5 pb-8 gap-6">
            <div>
              <h4 className="text-black font-semibold">Categories:</h4>
              {courseData.categories.map((cat: any, index: number) => (
                <h5 key={index} className="text-black">
                  <i className={`${cat.icon} text-red-600 mr-2`}></i>
                  {cat.label}
                </h5>
              ))}
            </div>
            <div>
              <h4 className="text-black font-semibold">Duration:</h4>
              <h5 className="text-black">
                <i
                  className={`${courseData.duration.icon} text-red-600 mr-2`}
                />
                {courseData.duration.label}
              </h5>
            </div>
            <div>
              <a
                href={courseData.applyLink}
                className="btn btn-primary px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded shadow">
                Apply Now
              </a>
            </div>
          </div> */}

          <h4 className="py-3 text-xl font-bold">{courseData.title}</h4>

          {/* Tabs Content */}
          {/* {activeTab === "description" && ( */}
          <div className="pb-8">
            <p className="mb-6">{courseData.description}</p>
            <h4 className="py-2 font-semibold">Intake</h4>
            <p>{courseData.intakes.join(", ")}</p>
            <h4 className="py-2 font-semibold">Objectives</h4>
            <ul className="list-disc list-inside">
              {courseData.objectives.map((obj: string, index: number) => (
                <li key={index}>{obj}</li>
              ))}
            </ul>
          </div>
          {/* )} */}

          {/* {activeTab === "syllabus" && (
            <div className="pb-8">
              <Image
                src={courseData.syllabusImage}
                alt={`${courseData.title} Syllabus`}
                width={1000}
                height={600}
                className="w-full h-auto object-contain rounded"
              />
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
