import React from "react";

const Application = () => {
  return (
    <div className="absolute bottom-0 min-h-40 left-0 right-0 z-20 hidden md:block bg-black/80">
      <div className="container flex items-center justify-center mx-auto px-4 md:px-8 py-6 md:py-8">
        <div className="flex min-w-[80%] lg:min-w-6xl flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
          {/* 📅 Date */}
          <div className="flex items-start gap-3 md:flex-1">
            {/* <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_672_2547)">
                <path
                  d="M19.158 3.56434H16.7818V5.34647C16.7818 5.5181 16.748 5.68804 16.6823 5.8466C16.6167 6.00516 16.5204 6.14923 16.399 6.27059C16.2777 6.39195 16.1336 6.48821 15.9751 6.55389C15.8165 6.61957 15.6465 6.65337 15.4749 6.65337C15.3033 6.65337 15.1334 6.61957 14.9748 6.55389C14.8162 6.48821 14.6722 6.39195 14.5508 6.27059C14.4295 6.14923 14.3332 6.00516 14.2675 5.8466C14.2018 5.68804 14.168 5.5181 14.168 5.34647V3.56434H7.2474V5.34647C7.2474 5.69308 7.10971 6.0255 6.86462 6.27059C6.61953 6.51568 6.28711 6.65337 5.9405 6.65337C5.59389 6.65337 5.26148 6.51568 5.01638 6.27059C4.77129 6.0255 4.6336 5.69308 4.6336 5.34647V3.56434H2.25742C2.11605 3.56273 1.9758 3.58949 1.84495 3.64303C1.7141 3.69657 1.59532 3.7758 1.49563 3.87605C1.39593 3.9763 1.31736 4.09551 1.26454 4.22666C1.21173 4.3578 1.18575 4.4982 1.18814 4.63956V17.9343C1.18578 18.0732 1.2108 18.2111 1.26177 18.3403C1.31274 18.4695 1.38866 18.5874 1.4852 18.6872C1.58174 18.7871 1.697 18.8669 1.8244 18.9222C1.95181 18.9775 2.08885 19.0072 2.22772 19.0095H19.158C19.2969 19.0072 19.4339 18.9775 19.5613 18.9222C19.6887 18.8669 19.804 18.7871 19.9005 18.6872C19.9971 18.5874 20.073 18.4695 20.124 18.3403C20.1749 18.2111 20.1999 18.0732 20.1976 17.9343V4.63956..."
                  fill="#F6B51E"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_672_2547">
                  <rect width="21.3856" height="21.3856" fill="white"></rect>
                </clipPath>
              </defs>
            </svg> */}

            <div>
              <h3 className="text-white font-medium text-xl mb-1.5">Date</h3>
              <p className="text-white text-xl">14th Nov. 2025</p>
              <p className="text-white text-xl">15th Nov. 2025</p>
            </div>
          </div>

          {/* 📍 Location */}
          <div className="flex items-start gap-3 md:flex-1 md:border-l md:border-white/20 md:pl-8">
            {/* <svg width="22" height="22" ...></svg> */}
            <div>
              <h3 className="text-white font-medium text-xl mb-1.5">
                Location
              </h3>
              <p className="text-white text-xl">BrainBench Hub</p>
              <p className="text-white text-xl">
                Obafemi Awolowo Civic Centre.
              </p>
            </div>
          </div>

          {/* ⏱ Time */}
          <div className="flex items-start gap-3 md:flex-1 md:border-l md:border-white/20 md:pl-8">
            {/* <svg width="22" height="22" ...></svg> */}
            <div>
              <h3 className="text-white font-medium text-xl mb-1.5">Time</h3>
              <p className="text-white text-xl">9AM PROMPT</p>
              <p className="text-white text-xl">9AM PROMPT</p>
            </div>
          </div>

          {/* 💬 Chat button */}
          <button className="w-12 cursor-pointer h-12 md:w-14 md:h-14 rounded-full bg-[#F6B51E] flex items-center justify-center hover:bg-[#B8955A] transition-colors flex-shrink-0 ml-auto md:ml-0">
            {/* <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="text-black"
            >
              <path
                d="M21 15C21 15.5304..."
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Application;
