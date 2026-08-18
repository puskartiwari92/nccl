// "use client";

// import { useParams } from "next/navigation";

// export default function CoursePage() {
//   const params = useParams(); // { id: "mba" } or { id: "bhm" } etc.
//   const courseId = params.id as string;

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold">Course: {courseId.toUpperCase()}</h1>
//       {/* You can map details by id */}
//     </div>
//   );
// }

// app/courses/[id]/page.tsx
import { coursesData } from "@/data/courses";
import CourseDetails from "@/components/CourseDetails";

export default function CoursePage({ params }: { params: { id: string } }) {
  const courseData = coursesData[params.id];

  if (!courseData) {
    return <div className="p-6 text-red-600">Course not found</div>;
  }

  return <CourseDetails courseData={courseData} />;
}
