import Application from "../Application";

const HeroContent = () => {
  return (
    <div className="relative min-h-screen">
      <section className="relative min-h-screen flex flex-col justify-center md:justify-start pt-[140px] pb-0 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover object-center"
            alt="background"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfVjGnZEN87X4dc3IVQ9BxICfnfIKQQwqkWA&s"
            style={{ filter: "brightness(0.5)" }}
          />
        </div>

        {/* Content */}
        <div className="container mx-auto max-w-7xl px-4 md:px-8 relative z-10 pb-32 md:pb-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4 md:mb-4">
              <span className="text-white text-xs md:text-sm font-medium">
                You're Welcome To 👋
              </span>
            </div>

            <h1 className="text-white font-bold text-5xl md:text-7xl lg:text-8xl mb-4 md:mb-4 leading-[1.1]">
              DevFest<br />Ado-Ekiti 2025
            </h1>

            <p className="text-white text-sm md:text-base lg:text-lg mb-4 md:mb-4 max-w-2xl leading-relaxed">
              Where Developers, Designers, And Innovators Share Bold Ideas And Shape The Future Of Technology In Ekiti,
              Across Nigeria, And Beyond.
            </p>

            {/* Tickets Buttons */}
            <div>
              <h3 className="text-white text-sm md:text-base mb-3 flex items-center gap-2 font-medium">
                Get Your Ticket
              </h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="https://gdg.community.dev/events/details/google-gdg-ado-ekiti-presents-devfest-ado-ekiti-2025-day-one-hands-on-workshops-amp-codelabs-1/"
                  className="bg-[#F6B51E] border border-[#FFDE90] hover:bg-[#F9AB00] text-black cursor-pointer py-2 md:py-4 px-4 rounded-md font-semibold text-lg md:text-base flex items-center justify-center transition-all">
                  Day 1
                </a>

                <a href="https://gdg.community.dev/events/details/google-gdg-ado-ekiti-presents-devfest-ado-ekiti-2025-day-two-conference/"
                  className="bg-[#F6B51E] border border-[#FFDE90] hover:bg-[#F9AB00] text-black cursor-pointer py-2 md:py-4 px-4 rounded-md font-semibold text-lg md:text-base flex items-center justify-center transition-all">
                  Day 2
                </a>
              </div>
            </div>
          </div>
        </div>

        <Application />

        
      </section>
    </div>
  );
};

export default HeroContent;
