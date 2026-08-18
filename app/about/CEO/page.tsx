"use client";

import Image from "next/image";

interface MessageData {
  id: number;
  title: string;
  highlight: string;
  studenthighlight: string;
  message: string;
  author: string;
  designation: string;
  image?: string;
}

const messages: MessageData[] = [
  {
    id: 1,
    title: "Quality Food ",
    highlight: "Water  ",
    studenthighlight: " Safety,",
    message: `
     
     Research and monitoring from early 2026 reveal that food and water safety remains a critical public health challenge in Nepal, driven by rapid urbanization, climate change, and infrastructure gaps. While nearly all of the population has access to "improved" water sources, the actual quality of that water is often compromised.
    `,
    author: "Prabesh Dhungana",
    designation:
      "International students from USA get research experience in Nepal",
    image: "/pari32.jpg", // replace with actual path or keep empty
  },
];

export default function MessageCeo() {
  return (
    <section
      id="services"
      className="relative py-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/ui/bg.png')" }}>
      <div className="container mx-auto px-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className="grid md:grid-cols-2 mt-10 gap-10 items-start bg-white/70 rounded-2xl p-8 shadow-lg"
            data-aos="fade-up"
            data-aos-delay="100">
            {/* Left: Message */}
            <div>
              <h1 className="text-2xl font-bold mb-2">
                {msg.title}{" "}
                <span className="text-red-600">{msg.highlight}</span>
              </h1>

              <span className="text-red-600">{msg.studenthighlight}</span>
              <p className="text-gray-700 text-sm   leading-relaxed">
                {msg.message}
              </p>
              <p className="mt-6 font-semibold">
                <span>{msg.author}</span> <br />
                <span className="text-gray-600">{msg.designation}</span>
              </p>
            </div>

            {/* Right: Image */}
            <div className="flex flex-col items-center">
              {msg.image ? (
                <Image
                  src={msg.image}
                  alt={msg.author}
                  width={400}
                  height={400}
                  className="rounded-xl shadow-md object-cover"
                />
              ) : (
                <h1 className="text-xl font-bold text-gray-500">
                  Coming soon...
                </h1>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
