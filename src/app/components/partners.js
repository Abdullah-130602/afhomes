"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Aldar from "../../assets/developers/Aldar.png";
import Azizi from "../../assets/developers/Azizi.png";
import Binghatti from "../../assets/developers/Binghatti.png";
import DAMAC from "../../assets/developers/DAMAC.png";
import Ellington from "../../assets/developers/Ellington.png";
import Emaar from "../../assets/developers/Emaar.png";
import Danube from "../../assets/developers/Danube.jpeg";
import Meraas from "../../assets/developers/Meraas.png";
import Nakheel from "../../assets/developers/Nakheel.png";
import OMNIYAT from "../../assets/developers/OMNIYAT.png";
import Sobha from "../../assets/developers/SOBHA.png";

const Partners = () => {
  const partners = [
    { id: 1, name: "Aldar", logo: Aldar },
    { id: 2, name: "Azizi", logo: Azizi },
    { id: 3, name: "Binghatti", logo: Binghatti },
    { id: 4, name: "DAMAC", logo: DAMAC },
    { id: 5, name: "Ellington", logo: Ellington },
    { id: 6, name: "Emaar", logo: Emaar },
    { id: 7, name: "Danube", logo: Danube },
    { id: 8, name: "Meraas", logo: Meraas },
    { id: 9, name: "Nakheel", logo: Nakheel },
    { id: 10, name: "OMNIYAT", logo: OMNIYAT },
    { id: 11, name: "Sobha", logo: Sobha },
  ];

  // split into two logical rows for desktop animation
  const midPoint = Math.ceil(partners.length / 2);
  const row1 = partners.slice(0, midPoint);
  const row2 = partners.slice(midPoint);

  const row1Loop = [...row1, ...row1];
  const row2Loop = [...row2, ...row2];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute top-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-blue-100 rounded-full mix-blend-multiply blur-3xl opacity-20" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-72 h-72 md:w-96 md:h-96 bg-purple-100 rounded-full mix-blend-multiply blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-3">
            Our Partners
          </h2>
          <p className="text-sm md:text-lg text-slate-600 max-w-2xl mx-auto">
            Carefully selected developers across the UAE that we regularly work
            with to source high‑quality properties.
          </p>
        </motion.div>

        {/* Logos grid (mobile & small screens) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:hidden rounded-3xl bg-white/80 backdrop-blur-sm shadow-sm border border-slate-100 px-4 py-6 sm:px-6 sm:py-8"
        >
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6 items-center justify-items-center">
            {partners.map((p) => (
              <div
                key={p.id}
                className="group w-full max-w-[110px] sm:max-w-[130px] md:max-w-[150px] aspect-[3/1] flex items-center justify-center rounded-xl bg-white shadow-xs border border-slate-100 transition-all duration-200 hover:shadow-md hover:-translate-y-1"
              >
                <div className="relative w-[80%] h-[70%]">
                  <Image
                    src={p.logo}
                    alt={p.name}
                    fill
                    className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-200"
                    sizes="(max-width: 640px) 80px, (max-width: 1024px) 110px, 140px"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Animated marquee (desktop / tablet) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden md:block rounded-3xl bg-white/80 backdrop-blur-sm shadow-sm border border-slate-100 px-4 py-6 sm:px-6 sm:py-8"
        >
          <div className="space-y-6">
            {/* Row 1 */}
            <div className="relative overflow-hidden">
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

              <div className="partner-marquee partner-marquee-left">
                <div className="partner-track flex items-center gap-6">
                  {row1Loop.map((p, idx) => (
                    <div
                      key={`row1-${p.id}-${idx}`}
                      className="group w-40 h-16 flex items-center justify-center rounded-xl bg-white shadow-xs border border-slate-100 transition-all duration-200 hover:shadow-md hover:-translate-y-1 flex-shrink-0"
                    >
                      <div className="relative w-[80%] h-[70%]">
                        <Image
                          src={p.logo}
                          alt={p.name}
                          fill
                          className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-200"
                          sizes="160px"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Row 2 (opposite direction) */}
            <div className="relative overflow-hidden">
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

              <div className="partner-marquee partner-marquee-right">
                <div className="partner-track flex items-center gap-6">
                  {row2Loop.map((p, idx) => (
                    <div
                      key={`row2-${p.id ?? "empty"}-${idx}`}
                      className="group w-40 h-16 flex items-center justify-center rounded-xl bg-white shadow-xs border border-slate-100 transition-all duration-200 hover:shadow-md hover:-translate-y-1 flex-shrink-0"
                    >
                      {p.logo && (
                        <div className="relative w-[80%] h-[70%]">
                          <Image
                            src={p.logo}
                            alt={p.name}
                            fill
                            className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-200"
                            sizes="160px"
                            loading="lazy"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-8"
        >
          <p className="text-slate-600 text-sm md:text-lg">
            Trusted by leading developers across the Middle East.
          </p>
        </motion.div>
      </div>

      {/* Animation styles for desktop marquee */}
      <style jsx>{`
        .partner-marquee {
          width: 100%;
        }

        .partner-track {
          will-change: transform;
        }

        .partner-marquee-left .partner-track {
          animation: partner-marquee-left 18s linear infinite;
        }

        .partner-marquee-right .partner-track {
          animation: partner-marquee-right 20s linear infinite;
        }

        @keyframes partner-marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes partner-marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .partner-marquee-left .partner-track,
          .partner-marquee-right .partner-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Partners;
