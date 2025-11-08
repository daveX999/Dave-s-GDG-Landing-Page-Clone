import React from "react";

const ThrowbackSection = () => {
  return (
    <section className="bg-yellow-100 py-12">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-12 lg:px-20 xl:px-32">
        <div className="bg-green-200 rounded-2xl md:rounded-[20px] flex flex-col md:flex-row items-center gap-10 md:gap-20 p-10 md:py-0 md:px-20">
          
          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-8 w-full md:w-1/2">
            
            {/* Text */}
            <div className="flex flex-col gap-4 text-center md:text-left">
              <h6 className="uppercase font-light text-2xl text-black">
                Throwback
              </h6>
              <h3 className="font-bold text-3xl md:text-5xl text-black leading-tight">
                Throwback to DevFest Ado-Ekiti ‘24: Vibes and Tech All the Way
              </h3>
            </div>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full">
              <a
                href="https://youtube.com/watch?v=ZwqiifbSOo0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-yellow-400 rounded-xl w-full md:w-fit px-6 py-3 font-medium"
              >
                🎬 Play Highlight
              </a>

              <a
                href="/"
                className="flex items-center justify-center gap-2 bg-white rounded-xl w-full md:w-fit px-6 py-3 font-medium"
              >
                DevFest Ado-Ekiti '24
              </a>
            </div>
          </div>

          {/* RIGHT DECORATION IMAGE */}
          <div className="hidden md:flex md:w-1/2 justify-end">
            <img
              src="https://devfest.gdgadoekiti.com/assets/throwback-icons-CWOLNM5q.svg"
              alt="Throwback icons"
              className="w-full max-w-sm object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThrowbackSection;
