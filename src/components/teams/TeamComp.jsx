import { useState } from "react";
import teamsData from "./TeamsData";

const filters = ["All", "Organizers", "Designers", "Developers", "Content"];

export default function TeamsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredTeams =
    activeFilter === "All"
      ? teamsData
      : teamsData.filter(member => member.category === activeFilter);

  return (
    <section className="bg-yellow-100 pb-20">
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 md:px-[25px] lg:px-[50px] xl:px-[120px] py-10 md:pt-29 md:pb-13">

        {/* Header */}
        <div className="flex items-center justify-center flex-col space-y-[30px] mb-[71px] px-[28px] font-host-grotesk">
          <div className="w-full max-w-[504px]">
            <h5 className="md:text-[26px] text-base text-center font-semibold">OUR TEAMS</h5>
            <h3 className="md:text-[40px] text-2xl font-bold text-center font-funnel">
              Behind every great event is a dedicated team.
            </h3>
            <p className="capitalize text-base text-center mt-5">
              Behind every great experience are people with vision. Meet the creators
              and community leaders bringing DevFest to life.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="w-full pb-5 mb-8 overflow-x-auto md:overflow-visible">
          <div className="flex min-w-max md:min-w-0 md:justify-center px-4 md:px-0">
            <div className="flex space-x-4">
              {filters.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`border border-[#FFDE90] text-base font-normal shadow-[3px_3px_0px_0px_#333333] cursor-pointer py-2 md:py-4 px-4 rounded-md transition-all duration-300 flex items-center justify-center transform hover:scale-105 hover:shadow-lg whitespace-nowrap ${
                    activeFilter === cat ? "bg-[#F9AB00] text-black" : "bg-white text-black"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-[100px] md:gap-y-[200px] px-5">
          {filteredTeams.map((member) => (
            <div
              key={member.id}
              className="transition-all duration-300 perspective-1000 mx-auto transform animate-fade-in-up w-full md:w-[226px] h-[404px] md:h-[288px]"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover rounded-[5px] mb-4"
              />
              <h4 className="text-lg md:text-2xl font-normal mb-1 capitalize">{member.name}</h4>
              <p className="text-[#F6B51E] font-normal text-sm md:text-lg mb-6">{member.role}</p>
            </div>
          ))}
        </div>

      </div>

      {/* CTA Button */}
      <button className="bg-yellow w-[250px] md:mt-[150px] md:w-[220px] mx-auto border border-yellow-200 mt-[100px] shadow-[3px_3px_0px_0px_#333333] text-black font-medium cursor-pointer py-2 md:py-4 px-4 rounded-md transition-all duration-300 flex items-center justify-center transform hover:scale-105 hover:shadow-lg animate-fade-in-up">
        See More
      </button>
    </section>
  );
}
