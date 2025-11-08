import React from "react";

export default function VideoComp() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-yellow-100">
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 md:px-[25px] lg:px-[50px] xl:px-[120px]">
        
        {/* Background container */}
        <div className="relative w-full rounded-3xl overflow-hidden">
          
          {/* Gradient + grid bg */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#F4A500] via-[#FDB913] to-[#F4A500]">
            <div className="absolute inset-0 opacity-30 grid grid-cols-8 md:grid-cols-12 h-full">
              {Array.from({ length: 96 }).map((_, i) => (
                <div
                  key={i}
                  className={`border border-[#E89500]/30 ${
                    i % 2 === 0
                      ? "bg-[#F9B233]/20"
                      : "bg-[#FDB913]/10"
                  }`}
                ></div>
              ))}
            </div>
          </div>

          {/* Video container */}
          <div className="relative z-10 aspect-video bg-black/20 backdrop-blur-sm flex items-center justify-center p-6 md:p-12 w-full h-[270px] md:h-[480px]">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/sSis-198D_o"
              title="DevFest Ado-Ekiti 2025"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}
