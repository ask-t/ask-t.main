import About from "@/components/About";
import Education from "@/components/Education";
import EmailSec from "@/components/EmailSec";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Skill from "@/components/Skill";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4 space-y-36">
        <HeroSection />
          <About/>
          <Skill />
          <Experience />
          <Education />
          {/* <EmailSec /> */}
      </div>
      <Footer />
    </main>
  );
}
