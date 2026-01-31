"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import blackLogo from "../../assets/logoBlack.png";

const Splash = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

//   useEffect(() => {
//     // Check if this is the first load
//     const hasVisited = localStorage.getItem("hasVisitedBefore");

//     if (hasVisited) {
//       setIsFirstLoad(false);
//       // Show minimal splash on reload for 3 seconds
//       const timer = setTimeout(() => {
//         setIsVisible(false);
//       }, 3000);
//       return () => clearTimeout(timer);
//     } else {
//       // First load - show full splash for 3 seconds
//       localStorage.setItem("hasVisitedBefore", "true");
//       setIsFirstLoad(true);
//       const timer = setTimeout(() => {
//         setIsVisible(false);
//       }, 3000);
//       return () => clearTimeout(timer);
//     }
//   }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center"
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center gap-8 px-6">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-5">
                <Image
                  src={blackLogo}
                  alt="AF Homes"
                  width={160}
                  height={60}
                  className="h-20 w-auto md:border-r-2 border-slate-300 rounded-lg"
                />
                <p className="text-lg md:text-2xl text-black mb-6 max-w-2xl mt-5">
                  Your Trusted Partner In Real Estate Excellence
                </p>
              </div>
            </motion.div>

            {/* Greeting - Only on first load */}
            {/* <AnimatePresence>
              {isFirstLoad && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-center"
                >
                  <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                    Welcome to AF Homes
                  </h1>
                  <p className="text-lg md:text-xl text-slate-600 mb-6 max-w-2xl">
                    Your trusted partner in real estate excellence
                  </p>
                  <div className="flex flex-col gap-3 max-w-lg">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.9 }}
                      className="text-slate-700 text-base md:text-lg"
                    >
                      ✨ Premium properties in Dubai
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 1.2 }}
                      className="text-slate-700 text-base md:text-lg"
                    >
                      🤝 Expert guidance and support
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 1.5 }}
                      className="text-slate-700 text-base md:text-lg"
                    >
                      💼 Transparent and trustworthy service
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence> */}

            {/* Loading indicator */}
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: isFirstLoad ? 1.8 : 0.3 }}
              className="flex gap-2"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-slate-400"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.4,
                    delay: i * 0.2,
                    repeat: Infinity,
                  }}
                />
              ))}
            </motion.div> */}
          </div>

          <style jsx>{`
            @keyframes blob {
              0%,
              100% {
                transform: translate(0, 0) scale(1);
              }
              33% {
                transform: translate(30px, -50px) scale(1.1);
              }
              66% {
                transform: translate(-20px, 20px) scale(0.9);
              }
            }
            .animate-blob {
              animation: blob 7s infinite;
            }
            .animation-delay-2000 {
              animation-delay: 2s;
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Splash;
