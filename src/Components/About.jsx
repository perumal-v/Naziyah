import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



const About = () => {
  return (
    <section className="bg-[var(--bg-primary)] text-[var(--text-primary)] py-12 px-6 sm:px-12  ">
      <div className="max-w-10xl mx-auto flex flex-col md:flex-row items-center justify-center ">

        {/* Right Text */}
        <div className="flex flex-col items-center justify-center max-w-6xl h-fit">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--accent)] mb-0 flex justify-center items-center ">
            About Us
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed m-1 text-xl font-sans h-fit">
            Our consultancy provides expert engineering project guidance and
            prototype solutions in <span className="text-[var(--accent-secondary)]">Automation</span>,{" "}
            <span className="text-[var(--accent-secondary)]">IoT</span> and{" "}
            <span className="text-[var(--accent-secondary)]">Robotics</span> for Diploma and UG
            engineering students. With award-winning experience in{" "}
            <span className="text-[var(--accent-secondary)]">MSME</span> and academic projects, we
            help students, startups, and industries transform ideas into
            affordable, innovative, and practical solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
