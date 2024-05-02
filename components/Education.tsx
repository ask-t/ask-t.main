"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";


const Education = () => {
  const base: string = "https://drive.google.com/uc?export=view&id=";
  const info = [
    {
      title: "Brigham Young University – Hawaii",
      position: "Bachelor of Science: Computer Science",
      date: "Jan 2022 - Dec 2025",
      image: `${base}1tAKIGObxdr13be9NpJI3p8pWBAIqGyyB`,
      description: ""
    },
    {
      title: "",
      position: "Music: Piano Performance Minor",
      date: "",
      image: `${base}1Oe-4IhGv3bvbcEXgp67TXL1b3-7aRoLt`,
      description: ""
    },
    {
      title: "",
      position: "Social Work Minor",
      date: "",
      image: `${base}1X39o03StOdYZcXvRgvR5ljLk3Sdf60PE`,
      description: ""
    },
  ]
  return (
    <div className="container" id="education">
      <h2 className="text-4xl font-bold text-white mb-4 pb-10">Education</h2>
      <section className="text-white" id="Education">
        {info.map((item, index) => (
          <div key={index}>
            {index % 2 === 0 ?
              (
                <div className="md:grid md:grid-cols-2 gap-8 space-y-10 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                  <Image src={item.image} width={700} height={700} alt={""} />
                  <div className="mt-4 md:mt-0 flex flex-col h-full">
                    <h2 className="text-left text-3xl font-bold text-white mb-4">{item.title}</h2>
                    <p className="text-left italic text-xl font-bold mb-3">{item.position}</p>
                    <p className="text-right italic">{item.date}</p>
                    <p className="text-base lg:text-lg">
                      {item.description}
                    </p>
                  </div>
                </div >
              ) :
              (
                <div className="md:grid md:grid-cols-2 gap-8 space-y-10 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                  <div className="mt-4 md:mt-0 flex flex-col h-full">
                    <h2 className="text-left text-3xl font-bold text-white mb-4">{item.title}</h2>
                    <p className="text-left italic text-xl font-bold mb-3">{item.position}</p>
                    <div className="text-right italic">{item.date}</div>
                    <p className="text-base lg:text-lg">
                      {item.description}
                    </p>
                  </div>
                  <Image src={item.image} width={700} height={700} alt={""} />
                </div>
              )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Education;
