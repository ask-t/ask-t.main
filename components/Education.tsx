"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";


const Education = () => {
  const base: string = "https://drive.google.com/uc?export=view&id=";
  const info = [
    {
      title: "Enterprise Informaiton Systems",
      date: "May 2022 - Present",
      image: `${base}1PVtUgmJvOCOHw2C1FCnCLeHN86wbuAri`,
      description: "I am a full stack web developer with a passion for creating interactive and responsive web applications.I have experience working with JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git.I am a quick learner and I am always looking to expand my knowledge and skill set.I am a team player and I am excited to work with others to create amazing applications."
    },
    {
      title: "TESTTEST",
      date: "Jan 2022 - Apr 2022",
      image: `${base}1PVtUgmJvOCOHw2C1FCnCLeHN86wbuAri`,
      description: "I am a full stack web developer with a passion for creating interactive and responsive web applications.I have experience working with JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git.I am a quick learner and I am always looking to expand my knowledge and skill set.I am a team player and I am excited to work with others to create amazing applications."
    },
  ]
  return (
    <div className="container">
      <h2 className="text-4xl font-bold text-white mb-4 pb-10">Education</h2>
      <section className="text-white" id="Experience">
        {info.map((item, index) => (
          <div key={index}>
            {index % 2 === 0 ?
              (
                <div className="md:grid md:grid-cols-2 gap-8 space-y-10 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                  <Image src={item.image} width={700} height={700} alt={""} />
                  <div className="mt-4 md:mt-0 flex flex-col h-full">
                    <h2 className="text-left text-3xl font-bold text-white mb-4">{item.title}</h2>
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
