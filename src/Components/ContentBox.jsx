import React from 'react'

const ContentBox = () => {

  const cards = [
    {
      title: "Proven Expertise",
      content:
        "We focus on developing IoT and robotics-based projects with real-world applications.",
    },
    {
      title: "Affordable Solutions",
      content:
        "We provide cost-effective solutions to help students and businesses implement cutting-edge technologies.",
    },
    {
      title: "End to End Support",
      content:
        "We offer end-to-end support to ensure your project's success from concept to deployment.",
    },
    {
      title: "Dedicated Student Consultation",
      content:
        "We provide personalized consultations to help you navigate the complexities of engineering projects.",
    },
    {
      title: "Future Vision",
      content:
        "We aim to integrate AI and IoT for sustainable smart systems and automation.",
    },
    {
      title: "Team Naziya Creed",
      content:
        "A dedicated team passionate about technology, learning, and innovation.",
    },
  ];

  return (
    <div className="min-h-fit bg-[var(--bg-primary)] px-4 sm:px-6 lg:px-10 py-10 ">
      <h1 className="text-3xl font-bold text-center text-[var(--accent)] pb-10 scroll:text-[var(--text-primary)] scroll-smooth">
        Why Choose us?
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto ">
        {cards.map((card, index) => (
          <div
            key={index}
            className=" bg-[var(--bg-secondary)] text-[var(--text-primary)] shadow-md rounded-2xl p-6  transition duration-300 transform hover:scale-[1.02] hover:shadow-2xl"
          >
            <h2 className="text-xl font-semibold text-[var(--accent-secondary)] mb-2">
              {card.title}
            </h2>
            <p className="text-[var(--text-primary)] leading-relaxed">{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ContentBox
