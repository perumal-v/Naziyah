import React from "react";


export default function Services() {
  const missions = [
    {
      title: "Academic Project Guidance",
      description:
        "We provide guidance and support to students in their academic projects, helping them to develop their skills and knowledge in the field of engineering.",
    },
    {
      title: "Prototype & Industrial Solutions",
      description:
        "We strive to create prototypes and industrial solutions that are affordable, innovative, and practical.",
    },
    {
      title: "Training & Documentation",
      description:
        "We aim to provide training and documentation to help students and professionals understand and implement our solutions.",
    }
  ]

  return (
    <div className="min-h-fit bg-gray-900 px-4 sm:px-6 lg:px-16 py-16">
      <h2 className="text-4xl font-bold text-center text-[#F9AA33] mb-12">

        Services
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto hover:shadow-xl transition-shadow duration-300">
        {missions.map((mission, index) => (
          <div
            key={index}
            className="bg-[#344955] text-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:scale-[1.02]"
          >
            <h3 className="text-2xl font-semibold text-[#fefae0] mb-3">
              {mission.title}
            </h3>
            <p className="text-white leading-relaxed">{mission.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
