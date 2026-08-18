export default function Courses() {
  return (
    <section id="courses" className="w-4/5 mx-auto text-center py-20">
      <h1 className="text-3xl font-bold">Courses We Offer</h1>
      <p className="text-gray-600 mt-3">Explore our wide range of courses.</p>

      <div className="mt-10 grid md:grid-cols-3 gap-8">
        <div className="bg-red-50 p-6 rounded-lg shadow hover:shadow-xl transition">
          <h3 className="text-xl font-semibold">Intermediate</h3>
          <p className="text-gray-600 mt-2">
            Perfect for beginners to get started.
          </p>
        </div>
        <div className="bg-red-50 p-6 rounded-lg shadow hover:shadow-xl transition">
          <h3 className="text-xl font-semibold">Degree</h3>
          <p className="text-gray-600 mt-2">
            In-depth learning with expert guidance.
          </p>
        </div>
        <div className="bg-red-50 p-6 rounded-lg shadow hover:shadow-xl transition">
          <h3 className="text-xl font-semibold">Post Graduation</h3>
          <p className="text-gray-600 mt-2">
            Advanced knowledge for career growth.
          </p>
        </div>
      </div>
    </section>
  );
}
