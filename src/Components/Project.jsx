import { ChevronLeft, PlayCircle } from 'lucide-react';

// --- Multi-Project Data Array ---
const projectsData = [
  {
    id: 1,
    title: "Automated Waste Sorter 3000",
    summary: "ML-powered device for efficient waste separation.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0",
    description: "The Automated Waste Sorter 3000 is a revolutionary device powered by a custom-trained machine learning model, designed to efficiently separate recyclable materials from general waste. It achieves an industry-leading 98.5% accuracy rate, significantly reducing landfill burden and promoting sustainable urban environments. This project showcases advanced computer vision algorithms deployed on edge hardware, demonstrating real-time processing and decision-making capabilities. The user interface provides real-time statistics and historical performance metrics.",
    imageUrl: "https://placehold.co/800x1200/4F46E5/ffffff?text=Sorter+Final+Image",
  },
  {
    id: 2,
    title: "Eco-Route Planner API",
    summary: "Calculates the lowest emission driving routes.",
    videoUrl: "https://www.youtube.com/embed/gW-I2X7X8c4?controls=0",
    description: "The Eco-Route Planner is a RESTful API service integrating real-time traffic, elevation data, and vehicle-specific emission profiles to recommend the most environmentally friendly routes. Built with Python and Flask, it processes millions of data points daily, providing significant fuel savings and CO2 reduction for logistics companies. This project highlights efficient geospatial querying and optimized server-side performance.",
    imageUrl: "https://placehold.co/800x1200/10B981/ffffff?text=Planner+Final+Image",
  },
  {
    id: 3,
    title: "Augmented Reality Catalog",
    summary: "A mobile app to place furniture in a user's home.",
    videoUrl: "https://www.youtube.com/embed/M7lc1UVf-VE?controls=0",
    description: "This mobile application uses ARKit/ARCore to allow users to virtually place 3D furniture models into their physical environment before purchase. The app features dynamic lighting estimation, scale calibration, and a seamless checkout integration. Developed using React Native, the project focused on delivering a smooth, low-latency augmented reality experience that dramatically increased customer engagement and reduced product returns.",
    imageUrl: "https://placehold.co/800x1200/F59E0B/ffffff?text=AR+App+Screenshot",
  },
];

// --- Sub-Components ---

/**
 * Project Card for the List View
 */
// ... (previous lines)

const ProjectCard = ({ project, onSelect }) => (
  <div className="flex-shrink-0 w-72 md:w-80 bg-[var(--bg-secondary)] shadow-xl rounded-xl overflow-hidden border border-[var(--bg-primary)] transition duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:border-[var(--accent)] hover:border-2">
    <div className="relative h-40 overflow-hidden ">
      {/* Small placeholder image for the card */}
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-full object-cover transition duration-500 group-hover:opacity-80"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <PlayCircle className="text-white w-10 h-10 opacity-70" />
      </div>
    </div>

    <div className="p-5">
      <h3 className="text-xl font-bold text-[var(--text-primary)] truncate mb-2">{project.title}</h3>
      <p className="text-[var(--text-secondary)] text-sm mb-4 line-clamp-2">{project.summary}</p>

      <button
        onClick={() => onSelect(project)}
        className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-[var(--accent)] hover:bg-[var(--accent-secondary)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent)] transition duration-150 ease-in-out"
      >
        Preview Project
      </button>
    </div>
  </div>
);

/**
 * List View Component with Horizontal Scrolling
 */
const ProjectList = ({ onSelectProject }) => (
  <div className="pt-4 pb-12">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--accent)] mb-6 md:mb-10 leading-tight h-fit">
      Explore Our Projects
    </h2>

    {/* Horizontal Scroll Container */}
    <div className="flex space-x-6 overflow-x-auto p-4 -m-4 hide-scrollbar">
      {/* Helper style to hide scrollbar, keeping the design clean */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .hide-scrollbar {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
        }
      `}</style>

      {projectsData.map((project) => (
        <ProjectCard key={project.id} project={project} onSelect={onSelectProject} />
      ))}
    </div>
  </div>
);


/**
 * Project Detail View (Based on the original request)
 */
const ProjectDetail = ({ project, onBack }) => {
  return (
    <div className="py-4 h-fit min-h-screen px-4 sm:px-6 lg:px-16 bg-[var(--bg-primary)]">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="inline-flex items-center text-[var(--accent)] hover:text-[var(--accent-secondary)] transition duration-150 mb-8 font-medium"
      >
        <ChevronLeft className="w-5 h-5 mr-1" />
        Back to Project List
      </button>

      {/* Project Heading */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--text-primary)] mb-4 md:mb-6 leading-tight">
        {project.title}
      </h1>
      <p className="text-xl text-[var(--accent)] mb-8">
        Detailed Project Overview
      </p>

      {/* Main Content Grid: Responsive 3-column layout (2/3 + 1/3) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10  w-fit h-fit">

        {/* LEFT SECTION: Video Preview & Description (takes 2/3 on desktop) */}
        <div className="md:col-span-2 flex flex-col space-y-8">

          {/* 1. Video Preview Card */}
          <div className="bg-[var(--bg-secondary)] p-4 shadow-xl rounded-xl border border-[var(--bg-primary)]">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Video Demonstration</h2>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg ring-4 ring-[var(--accent)]/50">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={project.videoUrl}
                title={`Video Preview for ${project.title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* 2. Project Description Card */}
          <div className="bg-[var(--bg-secondary)] p-6 shadow-xl rounded-xl border border-[var(--bg-primary)] h-fit">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Project Description</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              {project.description}
            </p>

            <div className="mt-6">
              <a href="#" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-[var(--accent)] hover:bg-[var(--accent-secondary)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent)] transition duration-150 ease-in-out">
                View Source Code
              </a>
            </div>
          </div>
        </div>

        {/* 3. RIGHT SECTION: Final Project Image (takes 1/3 on desktop) */}
        <div className="md:col-span-1">
          <div className="bg-[var(--bg-secondary)] p-4 shadow-xl rounded-xl border border-[var(--bg-primary)]">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Final Product Snapshot</h2>
            <img
              src={project.imageUrl}
              alt={`Final Image of ${project.title}`}
              className="w-full h-96 md:h-full object-cover rounded-lg shadow-lg"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x1200/9CA3AF/ffffff?text=Image+Unavailable"; }}
            />
            <p className="text-center text-sm text-[var(--text-secondary)] mt-2">
              Deployment in action.
            </p>
          </div>
        </div>

      </div> {/* End of Main Grid */}
    </div>
  );
};


// --- Main App Component (Handles Routing) ---


export { ProjectList, ProjectDetail };