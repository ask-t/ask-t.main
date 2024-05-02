"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import Link from "next/link";


const Experience = () => {
  const base: string = "https://drive.google.com/uc?export=view&id=";
  const info = [
    {
      title: "Enterprise Informaiton Systems",
      position: "Student Developer/Analyst",
      date: "May 2022 - Present",
      image: `${base}1BdxxJkwQ_IS5J5QJ4apx1IYl2i88fzpY`,
      description: "I crafted and upheld web services for various departments, enabling streamlined access to the school database through the Mendix low-code platform. I implemented and organized APIs using the WSO2 API Manager, which simplified database access for non-backend engineers. Additionally, I analyzed customer requirements to design and optimize web architecture, ensuring robust and user-centric solutions.",
      url: "https://oit.byuh.edu/eis",
      site: "What is the EIS?"
    },
    {
      title: "Banyan Dining Hall",
      position: "Line/Cashier/Dish room/Runner",
      date: "Jan 2022 - Apr 2022",
      image: `${base}1gbqBOws5GylkDBpbNbrpb9b5OnVIVUkt`,
      description: ""
    },
  ]
  return (
    <div className="container" id="experience">
      <h2 className="text-4xl font-bold text-white mb-4 pb-10">Experience</h2>
      <section className="text-white" id="Experience">
        {info.map((item,index) =>(
        <div key={index}>
          {index %2 ===0 ?
          (
            <div className="md:grid md:grid-cols-2 gap-8 space-y-10 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
              <Image src={item.image} width={700} height={700} alt={""} />
              <div className="mt-4 md:mt-0 flex flex-col h-full">
                  <h2 className="text-left text-3xl font-bold text-white mb-4">{item.title}</h2>
                  <p className="text-left italic">{item.position}</p>
                  <p className="text-right italic">{item.date}</p>
                  <p className="text-base lg:text-lg">
                    {item.description}
                  </p>
              </div>
              <div className="mb-5">
                {item.url != null && (
                  <p>
                    see more info <Link href={item.url} className="text-sky-400">{item.site}</Link>
                  </p>
                )}
              </div>
            </div >
          ):
          (
            <div className="md:grid md:grid-cols-2 gap-8 space-y-10 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
              <div className="mt-4 md:mt-0 flex flex-col h-full">
                  <h2 className="text-left text-3xl font-bold text-white mb-4">{item.title}</h2>
                  <p className="text-left italic">{item.position}</p>
                  <div className="text-right italic">{item.date}</div>
                <p className="text-base lg:text-lg">
                  {item.description}
                </p>
              </div>
              <div className="mb-5">
              {item.url != null && (
                <p>
                see more info <Link href={item.url} className="text-sky-400">{item.site}</Link>
                </p>
              )}
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

export default Experience;
