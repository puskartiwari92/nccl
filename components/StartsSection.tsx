"use client";

import { useEffect, useState } from "react";

// Stats data
const statsData = [
  { id: 1, title: "BCA", value: 232 },
  { id: 2, title: "BBS", value: 521 },
  { id: 3, title: "MBA", value: 153 },
  { id: 4, title: "BHM", value: 32 },
];

// Hook for animated counter
function useCounter(end: number, duration: number = 1000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16); // ~60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
}

export default function StatsSection() {
  return (
    <section
      id="stats"
      className="py-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/images/ui/bg.png')" }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {statsData.map((stat) => {
            const count = useCounter(stat.value, 1500); // animate count
            return (
              <div
                key={stat.id}
                className="bg-white/70 rounded-lg p-6 shadow-md">
                <span className="block text-4xl font-bold text-[#B21237]">
                  {count}
                </span>
                <p className="mt-2 text-gray-700 font-medium">{stat.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
