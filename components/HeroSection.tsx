"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Asuku Takahashi",
                3000,
                "CS Student",
                3000,
                "Web Developer",
                3000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptuous.
          </p>

        </div>
        <div className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
        <Image
          src="https://drive.google.com/uc?export=view&id=1EeIfuOzGwpW-0twcqmLJnJ0j8k3MnUqD"
          alt="hero image"
          className="rounded-full min-w-96"
          width={300}
          height={300}

        />
        </div>
      </div>
    </section>
  );
}

export default HeroSection