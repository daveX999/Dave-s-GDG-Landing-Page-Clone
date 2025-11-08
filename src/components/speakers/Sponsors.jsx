import { useState } from "react";
import speakersData from "./SpeakersData";

export default function SpeakersSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleFlip = (idx) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <section className="bg-yellow-100">
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 md:px-[25px] lg:px-[50px] xl:px-[120px] py-10 md:pt-29 md:pb-0">
        {/* Header */}
        <div className="flex items-center justify-center flex-col space-y-[30px] mb-[71px] px-[28px]">
          <div className="w-full max-w-[504px]">
            <h5 className="md:text-[26px] text-base text-center font-semibold">
              OUR SPEAKERS
            </h5>
            <h3 className="md:text-[40px] text-2xl font-bold text-center font-funnel capitalize">
              More than bios, stories that move minds and spark ideas.
            </h3>
            <p className="capitalize text-base text-center mt-5">
              These are the voices shaping industries, changing the narrative,
              influencing conversations, and building what's next.
            </p>
          </div>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7.5 gap-y-10">
          {speakersData.map((spk, idx) => (
            <div
              key={spk.id}
              className="w-[312px] h-[379px] perspective-1000 mx-auto cursor-pointer"
              onClick={() => handleFlip(idx)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-500`}
                style={{
                  transform:
                    activeIndex === idx ? "rotateY(180deg)" : "rotateY(0deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* FRONT */}
                <div
                  className="absolute w-full h-full overflow-hidden"
                  style={{
                    backfaceVisibility: "hidden",
                    borderTopLeftRadius: "74.27px",
                    borderBottomRightRadius: "74.27px",
                  }}
                >
                  <img
                    src={spk.img}
                    alt={spk.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 bg-yellow-400 px-6 py-4"
                    style={{ borderTopRightRadius: "49.76px" }}
                  >
                    <h3 className="text-base md:text-xl text-center font-bold text-gray-900">
                      {spk.name}
                    </h3>
                    <p className="text-xs md:text-sm text-center text-gray-800">
                      {spk.role}
                    </p>
                  </div>
                </div>

                {/* BACK */}
                <div
                  className="absolute border-2 border-yellow w-full h-full bg-yellow-100 p-8"
                  style={{
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                    borderTopLeftRadius: "74.27px",
                    borderBottomRightRadius: "74.27px",
                  }}
                >
                  <div className="flex flex-col justify-between h-full">
                    <div className="space-y-4">
                      <h3 className="text-xs text-black leading-relaxed">
                        {spk.bio}
                      </h3>
                      <p className="text-xs text-black font-medium leading-relaxed">
                        Topic: {spk.topic}
                      </p>
                    </div>

                    {/* Socials */}
                    <div className="flex justify-center gap-4 pt-4">
                      {spk.x && (
                        <a
                          href={spk.x}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="text-lg">𝕏</span>
                        </a>
                      )}
                      {spk.linkedin && (
                        <a
                          href={spk.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="text-lg">🔗</span>
                        </a>
                      )}
                      {spk.website && (
                        <a
                          href={spk.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          🌐
                        </a>
                      )}
                      {spk.email && <a href={spk.email}>📩</a>}
                    </div>
                  </div>
                </div>
               
              </div>
            </div>
          ))}
        </div>

         <a
                  href="/speakers"
                  className="bg-yellow-400 w-[250px] md:mt-[50px] md:w-[220px] mx-auto border border-yellow-200 mt-[63px] shadow-[3px_3px_0px_0px_#333333] text-black font-medium cursor-pointer py-2 md:py-4 px-4 rounded-md transition-all duration-300 flex items-center justify-center transform hover:scale-105 hover:shadow-lg animate-fade-in-up hover:animate-pulse"
                >
                  See all our speakers
                  <span className="ml-2 inline-flex">
                    <img
                      className="w-[24px] h-[24px]"
                      src="data:image/svg+xml,%3csvg%20width='34'%20height='34'%20viewBox='0%200%2034%2034'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.66947%2020.6069L19.6151%2013.4552L12.2876%2012.2578L12.3856%2011.2635L21.4577%2012.746L19.9752%2021.8181L19.0015%2021.5945L20.1989%2014.267L10.2533%2021.4188L9.66947%2020.6069Z'%20fill='black'%20stroke='black'/%3e%3c/svg%3e"
                      alt=""
                    />
                  </span>
                </a>
      </div>
    </section>
  );
}
