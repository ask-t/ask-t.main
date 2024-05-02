"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";


const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="https://drive.google.com/uc?export=view&id=1PVtUgmJvOCOHw2C1FCnCLeHN86wbuAri" width={700} height={700} alt={""} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="text-base lg:text-lg">
            <p>
            I am a student of a Computer Science program, where I have developed a robust foundation in computing and mathematics, tailored to meet the demands of the discipline. Throughout my studies, I have honed my skills in analyzing and solving complex problems by identifying and defining specific computing requirements needed for effective solutions.
            </p>
            <br />
            <p>
            My education has equipped me with the capability to design, implement, and evaluate computer-based systems, processes, components, or programs that meet desired specifications and needs. I have also learned to function effectively within teams to achieve collective goals, and have cultivated a deep understanding of professional, ethical, legal, security, and social responsibilities in the computing field.
            </p>
            <br />
            <p>
            Furthermore, I possess strong communication skills, which enable me to interact effectively with diverse audiences. I am aware of the local and global impacts of computing on individuals, organizations, and society, and I am committed to continuous professional development to stay current in the field. My training has also emphasized the application of mathematical foundations, algorithmic principles, and computer science theory in the design and modeling of computer-based systems, allowing me to make informed design choices and build software systems of varying complexity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
