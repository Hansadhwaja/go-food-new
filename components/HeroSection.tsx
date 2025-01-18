'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import { carouselImages } from "@/constants";
import { Button } from "./ui/button";

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(true);
    const totalSlides = carouselImages.length;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    };

    useEffect(() => {
        if (!isOpen) return;
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, [isOpen]);

    return (
        <>
            <Button className={`transition delay-0 ease-in text-black gradient-bg mt-2 hover:scale-110 hover:-translate-y-1  font-semibold ${isOpen ? 'animate-offLoading' : 'animate-onLoading'}`} onClick={() => setIsOpen(true)}>Open Carausel</Button>
            {isOpen && (<div className={`relative mt-12 w-full mx-auto transition-height duration-150 ease-in ${isOpen ? 'animate-onLoading expandHeight' : 'animate-offLoading collapseHeight'}}`}>
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-1000 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {carouselImages.map((image) => (
                            <div key={image.id} className="min-w-full flex justify-center h-[200px] lg:h-[400px]">
                                <Image
                                    src={image.imgSrc}
                                    alt={`Image ${image.id}`}
                                    className="size-full object-cover object-center rounded-xl"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <Button onClick={prevSlide} className="absolute top-1/2 left-4 bg-transparent transform -translate-y-1/2  py-2 px-4 rounded-full hover:bg-gray-100 hover:text-black">&#10094;</Button>
                <Button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent hover:bg-gray-100 hover:text-black py-2 px-4 rounded-full">&#10095;</Button>
                <Button className='bg-transparent transition delay-100 ease-out hover:bg-white hover:text-black text-2xl shadow-xl absolute top-4 right-4 hover:animate-dance' onClick={() => setIsOpen(false)}>X</Button>
                <div className="flex justify-center gap-1">
                    {carouselImages.map((_, index) => (
                        <div key={index} className={`w-12 h-2 mt-4 rounded-full ${currentIndex === index ? 'gradient-bg' : 'bg-gray-100'}`} onClick={() => setCurrentIndex(index)}></div>
                    ))}
                </div>
            </div>)}
        </>
    );
};

export default Carousel;
