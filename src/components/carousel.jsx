import React, { startTransition } from "react";
import { useState } from "react";
import { useEffect } from "react";
import banner1 from "../assets/images/banner3.png";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner1.jpg";
import { MoveDownRight } from 'lucide-react';
import { MoveUpRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
function Carousel() {
    // help me make a slider image wiche it will change the image "banner" every 5 seconds or when the user click on the right or left button
    // it should swich bettwen the images banner1, banner2, banner3
    // start 
    const [banner, setBanner] = useState(banner1);
    const [index, setIndex] = useState(0);
    const [show, setShow] = useState(false);
    const banners = [banner1, banner2, banner3];
    const nextBanner = () => {
      setIndex((index + 1) % banners.length);
      setBanner(banners[index]);
      setShow(true);
    };
    const prevBanner = () => {
        setIndex((index - 1 + banners.length) % banners.length);
        setBanner(banners[index]);
        setShow(true);
        };
    useEffect(() => {
        const interval = setInterval(() => {
          nextBanner();
        }, 8000);
        return () => clearInterval(interval);
      }, [index]);

    
  return (
    <div className=" w-full relative px-20  overflow-hidden  rounded-lg mt-10">
      <div className="fade-in" key={index}>
        <img
          src={banners[index]}
          alt="banner"
          className="  object-cover  h-[700px]   w-full rounded-xl    "
        />
      </div>
      <div>
        <div className="absolute top-20 translate-x-10 transform  text-start">
         <div
         className="bg-black p-5 rounded-lg flex items-end gap-5 w-7/12"
         >
         <h1 className="text-7xl font-semibold text-white leading-tight ">
            we are degital <br /> meets fashions  
            
          </h1>
          <p
          className="border-2 w-11 h-11 border-white p-2 rounded-full text-white mb-3 hover:rotate-45 transition duration-500 ease-in-out" 
          >
          <MoveDownRight className="  " />
          </p>
         </div>

          <p className="text-white text-lg mt-5 w-7/12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            voluptates, quidem, dolorum, quas doloremque quos quae quia quibusdam a 
          </p>
        </div>
        
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2   ">
         <div className="flex flex-col gap-1  ">
         <div className="flex  gap-2 hover:bg-white rounded-full transition duration-500 ease-in-out   ">
         <button className=" bg-white  text-balck text-md px-5 py-3 rounded-full font-semibold">
            Shop Now
          </button>
          <button className="  bg-white  text-balck text-lg p-3 rounded-full font-semibold hover:rotate-45 transition duration-500 ease-in-out   ">
          <MoveUpRight />
          </button>
         </div>

          <p className="text-white text-center text-md px-5">
            Top Collection
          </p>
         </div>
          </div> 
            <div className="absolute top-20 right-24 flex gap-5">
            <div className="p-3 rounded-full flex gap-4">
            <button 
            onClick={prevBanner}
            className="text-black bg-white rounded-full p-2  hover:-translate-x-1 transition duration-300 ease-in-out ">
            <ChevronLeft />
            </button>
           
            <button 
            onClick={nextBanner}
            className="text-black bg-white rounded-full p-2 hover:translate-x-1 transition duration-300 ease-in-out"
            >
            <ChevronRight />
            </button>
            </div>
            </div>
            

      </div>
    </div>
  );
}

export default Carousel;
