"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Body() {
  const [windowWidth, setWindowWidth] = useState(0);
  
  useEffect(() => {
    // Set initial width
    setWindowWidth(window.innerWidth);
    
    // Handle resize events
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Responsive sizing functions
  const getTitleSize = () => {
    if (windowWidth > 1800) return "text-5xl";
    if (windowWidth > 1200) return "text-4xl";
    if (windowWidth > 768) return "text-3xl";
    return "text-2xl";
  };
  
  const getContentSize = () => {
    if (windowWidth > 1800) return "text-xl";
    if (windowWidth > 1200) return "text-lg";
    return "text-base";
  };
  
  return (
    <div className="flex flex-col w-full min-h-screen bg-black text-white">
      
      {/* Main content section */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-7xl mx-auto">
          {/* Responsive layout - stacked on mobile, side-by-side on larger screens */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-16">
            {/* Text content section - takes 60% on desktop */}
            <div className="w-full md:w-3/5 space-y-4 sm:space-y-6">
              <h1 className={`font-bold ${getTitleSize()}`}>
                Hello, I'm Rajendra,  full-stack developer interested in photography and photo editing.
              </h1>
              <p className={`${getContentSize()} text-gray-300 max-w-2xl`}>
              Through photography, I strive to freeze time—preserving meaningful moments with a balance of imagination and technical precision
              </p>
              
              {/* Experience and contact info with checkmarks */}
              <div className="pt-4 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-black">
                    ✓
                  </div>
                  <span className={getContentSize()}>3 Years of Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-black">
                    ✓
                  </div>
                  <span className={getContentSize()}>E-mail: rajendra.pasha@gmail.com</span>
                </div>
              </div>
            </div>
            
            {/* Image section - takes 40% on desktop */}
            <div className="w-full md:w-2/5 flex justify-center md:justify-end">
              <div className="relative overflow-hidden rounded-lg bg-yellow-100 p-1.5">
                <Image
                  src="/images/rajendra.jpg"
                  alt="Rajendra Pasha"
                  width={300}
                  height={360}
                  className="rounded-lg object-cover"
                  style={{
                    width: windowWidth > 1800 ? '350px' : windowWidth > 1200 ? '300px' : windowWidth > 768 ? '250px' : '220px',
                    height: 'auto'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end p-4 gap-2">
        <div className="w-10 h-10 flex items-center justify-center rounded-md cursor-pointer bg-gradient-to-br from-yellow-500 via-pink-500 to-purple-500">
          <span className="text-white">IG</span>
        </div>
        <div className="w-10 h-10 flex items-center justify-center rounded-md cursor-pointer bg-blue-600">
          <span className="text-white">in</span>
        </div>
        <div className="w-10 h-10 flex items-center justify-center rounded-md cursor-pointer bg-black border-2 border-white">
          <span className="text-white">X</span>
        </div>
      </div>
    </div>
  );
}