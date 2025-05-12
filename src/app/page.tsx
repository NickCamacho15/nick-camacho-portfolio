'use client';

import Link from "next/link";
import { FaLaptopCode } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Glassmorphism card with content */}
      <div className={`z-10 mx-4 max-w-4xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-xl p-8 sm:p-12 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white flex flex-col items-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="relative">
                <FaLaptopCode className="inline-block text-blue-400 animate-pulse" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full animate-ping"></span>
              </span>
              <span>Hi, I&apos;m Nick Camacho</span>
            </div>
            <span className="text-blue-400 mt-2">
              Full Stack Developer
            </span>
          </h1>
          
          <p className="mt-6 text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto transition-all duration-1000 delay-300 ease-out" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)' }}>
            I build clean, modern web apps using Java, React, and PostgreSQL.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 transition-all duration-1000 delay-500 ease-out" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)' }}>
            <Link
              href="/projects"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg px-8 py-3 text-lg transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              View My Work
            </Link>
            <Link
              href="/about"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg px-8 py-3 text-lg transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              About Me
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg px-8 py-3 text-lg transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
