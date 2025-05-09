"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Body() {
    const [windowWidth, setWindowWidth] = useState(0);
    
    useEffect(() => {
        setWindowWidth(window.innerWidth);
        
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    const getTitleSize = () => {
        if (windowWidth > 1800) return "text-4xl";
        if (windowWidth > 1200) return "text-3xl";
        return "text-2xl";
    };
    
    const getParaSize = () => {
        if (windowWidth > 1800) return "text-xl";
        if (windowWidth > 1200) return "text-lg";
        return "text-base";
    };
    
    const getImageSize = () => {
        if (windowWidth > 1800) return 200;
        if (windowWidth > 1200) return 175;
        return 150;
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white p-6 md:p-8 lg:p-10 rounded-lg shadow-lg flex flex-col lg:flex-row items-center gap-6 w-full max-w-screen-2xl mx-auto">
                
                {/* Text Section with asymmetric padding */}
                <div className="flex-1 order-2 lg:order-1 text-center lg:text-left 
                                pl-3 sm:pl-5 md:pl-8 lg:pl-12 xl:pl-16 
                                pr-3 sm:pr-4 md:pr-6 lg:pr-8 xl:pr-10">
                    <h1 className={`font-bold mb-2 md:mb-4 ${getTitleSize()}`}>
                        Hello, I'm Rajendra Pasha
                    </h1>
                    <p className={`text-gray-700 ${getParaSize()}`}>
                        A full-stack developer interested in photography and photo editing.
                        I aim to freeze time with both imagination and accuracy.
                    </p>
                </div>
                
                {/* Image Section */}
                <div className="flex-shrink-0 order-1 lg:order-2 lg:ml-6 xl:ml-8">
                    <Image
                        src="/images/rajendra.jpg"
                        alt="Rajendra Pasha"
                        width={getImageSize()}
                        height={getImageSize() * 2}
                        className="rounded-full mx-auto lg:mx-0"
                    />
                </div>
                
            </div>
        </div>
    );
}