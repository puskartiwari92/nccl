export default function CTA() {
  return (
    <section className="w-4/5 mx-auto my-20 bg-[url('/image/banner_ggu.jpg')] bg-cover bg-center rounded-lg shadow-lg text-center py-24 relative">
      <div className="absolute inset-0 bg-blue-500 rounded-lg"></div>
      <h1 className="relative text-4xl font-bold text-white">
        Enroll For Our Various Courses
      </h1>
      <a
        href="/contact"
        className="relative mt-6 inline-block border-2 border-yellow-400 text-yellow-400 px-6 py-3 rounded-md hover:bg-yellow-400 hover:text-black transition">
        Contact Us
      </a>
    </section>
  );
}
