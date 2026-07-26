import React, { useEffect, useRef, useState } from "react";
import { Smile, MapPin, Users, Star } from "lucide-react";

/* ================= STATS DATA ================= */

const stats = [
  {
    icon: Smile,
    value: 50,
    suffix: "+",
    label: "HAPPY CLIENTS",
  },
  {
    icon: MapPin,
    value: 10,
    suffix: "+",
    label: "LOCATIONS",
  },
  {
    icon: Users,
    value: 15,
    suffix: "+",
    label: "TEAM",
  },
  {
    icon: Star,
    value: 4.9,
    suffix: "",
    label: "GOOGLE REVIEWS",
  },
];

const Stats: React.FC = () => {
  const [counts, setCounts] = useState<number[]>(
    stats.map(() => 0)
  );

  const sectionRef = useRef<HTMLElement | null>(null);

  const [start, setStart] = useState(false);

  /* ================= VISIBILITY DETECTION ================= */

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);

          // Run animation only once
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    const currentSection = sectionRef.current;

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  /* ================= COUNTER ANIMATION ================= */

  useEffect(() => {
    if (!start) return;

    const duration = 2000;
    const stepTime = 20;

    const intervals: ReturnType<typeof setInterval>[] = [];

    stats.forEach((stat, index) => {
      let currentValue = 0;

      const endValue = stat.value;

      const totalSteps = duration / stepTime;

      const increment = endValue / totalSteps;

      const interval = setInterval(() => {
        currentValue += increment;

        if (currentValue >= endValue) {
          currentValue = endValue;

          setCounts((previousCounts) => {
            const updatedCounts = [...previousCounts];

            updatedCounts[index] = endValue;

            return updatedCounts;
          });

          clearInterval(interval);

          return;
        }

        setCounts((previousCounts) => {
          const updatedCounts = [...previousCounts];

          updatedCounts[index] =
            endValue % 1 !== 0
              ? Number(currentValue.toFixed(1))
              : Math.floor(currentValue);

          return updatedCounts;
        });
      }, stepTime);

      intervals.push(interval);
    });

    /* Cleanup all intervals */
    return () => {
      intervals.forEach((interval) => {
        clearInterval(interval);
      });
    };
  }, [start]);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/bg-photo.avif')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
          Our{" "}
          <span className="text-[rgb(255,153,51)]">
            Work So Far
          </span>
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">

          {stats.map((stat) => {
            const Icon = stat.icon;

            const index = stats.indexOf(stat);

            return (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-5"
              >

                {/* Icon */}
                <div
                  className="
                    w-20 h-20
                    rounded-full
                    bg-red-600
                    flex items-center justify-center
                    text-white
                    shadow-lg
                  "
                >
                  <Icon size={34} />
                </div>

                {/* Number */}
                <h3 className="text-5xl md:text-6xl font-extrabold text-white">
                  {counts[index]}
                  {stat.suffix}
                </h3>

                {/* Label */}
                <p className="text-white/70 tracking-widest text-xs md:text-sm uppercase">
                  {stat.label}
                </p>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Stats;