// types/course.ts
export interface CourseData {
  title: string;
  bannerImage: string;
  bgImage: string;
  categories: { label: string; icon: string }[];
  duration: { label: string; icon: string };
  intakes: string[];
  objectives: string[];
  description: string;
  syllabusImage: string;
  applyLink: string;
}
