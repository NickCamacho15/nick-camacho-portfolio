import Image from "next/image";

export default function About() {
  // Categorize skills for better presentation
  const skillCategories = {
    "Languages": ["Java", "TypeScript", "HTML", "CSS"],
    "Frontend": ["React.js", "Vue.js", "Next.js", "Tailwind CSS"],
    "Backend": ["Spring Boot", "Express.js"],
    "Databases": ["PostgreSQL", "MongoDB"]
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-xl mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
          About Me
        </h1>

        {/* Profile Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-10">
          {/* Profile Image */}
          <div className="md:col-span-1 flex justify-center">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg ring-2 ring-white/20 ring-offset-4 ring-offset-blue-900/50">
              <Image
                src="/NickC-Headshot.jpeg"
                alt="Nick Camacho"
                width={224}
                height={224}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>

          {/* Bio and Technical Skills */}
          <div className="md:col-span-2">
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              I&apos;m a Columbus-based full stack developer with a background in HVAC and customer service. 
              I completed full stack bootcamps through Tech Elevator and OSU, and I&apos;m currently earning 
              my Associate&apos;s in Computer & Information Science at Columbus State.
            </p>
            
            {/* Technical Skills Section - Moved higher */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-blue-300 mb-4">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                {Object.entries(skillCategories).map(([category, categorySkills]) => (
                  <div key={category} className="bg-white/5 backdrop-blur-sm rounded-lg p-3">
                    <h3 className="text-white text-sm font-medium mb-2">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {categorySkills.map((skill) => (
                        <span 
                          key={skill}
                          className="px-3 py-1 bg-blue-900/40 text-blue-200 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h2 className="text-2xl font-bold text-blue-300 mb-6 inline-flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
            Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-md p-5 border border-white/10 hover:border-blue-300/30 transition-all hover:transform hover:scale-105">
              <h3 className="text-xl font-semibold text-white">Columbus State Community College</h3>
              <p className="text-blue-300 font-medium mt-1">AS Computer & Information Science</p>
              <p className="text-gray-300 mt-1">Expected Summer 2025</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-md p-5 border border-white/10 hover:border-blue-300/30 transition-all hover:transform hover:scale-105">
              <h3 className="text-xl font-semibold text-white">OSU Bootcamp</h3>
              <p className="text-blue-300 font-medium mt-1">Full Stack App Development</p>
              <p className="text-gray-300 mt-1">2023</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-md p-5 border border-white/10 hover:border-blue-300/30 transition-all hover:transform hover:scale-105">
              <h3 className="text-xl font-semibold text-white">Tech Elevator</h3>
              <p className="text-blue-300 font-medium mt-1">Full Stack Web Dev</p>
              <p className="text-gray-300 mt-1">2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 