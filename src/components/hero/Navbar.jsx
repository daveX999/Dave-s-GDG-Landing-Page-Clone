import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex relative items-center justify-center w-full">
      {/* ✅ Top Scrolling Bar */}
      <div className="fixed top-0 w-full md:w-[80%] z-50 bg-[#FFE8A5] text-black py-2 overflow-hidden">
        <div className="flex items-center gap-8 animate-scroll">
          {[
            "🏆 DevFest Ado-Ekiti'25: Your Network Just Grew. Now It's Time To Leverage Those Connections",
            "📅 Date: 14th - 15th Nov. 2025",
            "🚀 Industry leaders, innovators, and game-changers united. Were you part of history?"
          ].map((text, i) => (
            <div key={i} className="flex items-center gap-2 whitespace-nowrap">
              <span className="text-sm font-medium">{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Main Navbar */}
      <nav
        className="fixed top-[36px] w-full md:w-[80%] z-40 transition-all duration-300
        bg-white/10 backdrop-blur-xl border border-white/20 px-6 md:px-8 shadow-lg"
      >
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <a href="/" className="flex flex-col mr-6 md:mr-12">
            <img
              alt="logo"
              className="w-28 md:w-40"
              src="https://res.cloudinary.com/dd9o3s5jj/image/upload/v1762213424/logo_hohzvm.svg"
            />
          </a>

          {/* ✅ Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 mr-6">
            <a href="#about" className="navbar-link">
              About Us
            </a>
            <a href="/speakers" className="navbar-link">
              Speakers
            </a>
            <a href="#team" className="navbar-link">
              Team
            </a>
            <a href="/schedule" className="navbar-link">
              Schedule
            </a>
          </div>

          {/* ✅ Desktop CTA */}
          <a
            className="hidden md:flex bg-[#F6B51E] cursor-pointer text-black
            px-4 py-2 rounded-lg gap-2 hover:bg-[#B8955A] transition-colors
            text-sm font-medium whitespace-nowrap"
            href="/schedule"
          >
            View event Schedule
            <img
              alt="arrow"
              src="data:image/svg+xml,%3csvg%20width='34'%20height='34'%20viewBox='0%200%2034%2034'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.66947%2020.6069L19.6151%2013.4552L12.2876%2012.2578L12.3856%2011.2635L21.4577%2012.746L19.9752%2021.8181L19.0015%2021.5945L20.1989%2014.267L10.2533%2021.4188L9.66947%2020.6069Z'%20fill='black'%20stroke='black'/%3e%3c/svg%3e"
            />
          </a>

          {/* ✅ Mobile Hamburger Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-black ml-4 transition-transform duration-300"
          >
            {open ? (
              <svg width="26" height="26" fill="none">
                <path
                  d="M6 6L18 18M6 18L18 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="26" height="26" fill="none">
                <path
                  d="M3 6H21M3 12H21M3 18H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>

        {/* ✅ Mobile Dropdown Menu */}
        <div
          className={`md:hidden absolute left-0 w-full px-6 py-4 bg-white/5 backdrop-blur-xl
            shadow-xl border-b border-white/20 flex flex-col items-start space-y-5 z-30
            transition-all duration-300 ease-in-out
            ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}
          `}
        >
          <a href="#about" className="navbar-link text-black">
            About Us
          </a>
          <a href="/speakers" className="navbar-link text-black">
            Speakers
          </a>
          <a href="#team" className="navbar-link text-black">
            Team
          </a>
          <a href="/schedule" className="navbar-link text-black">
            Schedule
          </a>

          <a
            href="/schedule"
            className="bg-[#F6B51E] text-black w-full py-3 rounded-md
              text-center font-semibold hover:bg-[#B8955A] transition-colors"
          >
            View Event Schedule
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
