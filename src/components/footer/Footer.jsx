import React from "react";

const Footer = () => {
  return (
    <footer className="bg-yellow-100 pb-36">
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 md:px-[25px] lg:px-[50px] xl:px-[120px]">
        
        <div className="flex flex-col gap-24">
          
          {/* TOP ROW */}
          <div className="flex flex-col gap-20 md:flex-row justify-between">
            
            {/* Logo + Socials */}
            <div className="flex flex-col gap-9">
              <img
                className="w-[139px]"
                alt="DevFest Ado-Ekiti Logo"
                src="https://devfest.gdgadoekiti.com/assets/logo-CNZbTeu9.svg"
              />

              <div className="flex flex-row gap-[26px]">
                {/* X (Twitter) */}
                <a
                  className="bg-white w-[50px] h-[50px] rounded-[24px] p-[15px] border border-[#9999994D] shadow-md"
                  href="https://x.com/gdgadoekiti/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="X"
                    className="w-5 h-5"
                    src="data:image/svg+xml,%3csvg%20width='13'%20height='13'%20viewBox='0%200%2013%2013'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_230_1360)'%3e%3cpath%20d='M0.0823333%200H3.91083L7.31792%204.87283L11.4075%200H12.6306L7.78375%205.54017L13%2013H9.17367L5.61492%207.91158L1.222%2013H0L5.14908%207.24533L0.0823333%200Z'%20fill='black'%20fill-opacity='0.4'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_230_1360'%3e%3crect%20width='13'%20height='13'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                  />
                </a>

                {/* LinkedIn */}
                <a
                  className="bg-white w-[50px] h-[50px] rounded-[24px] p-[15px] border border-[#9999994D] shadow-md"
                  href="https://www.linkedin.com/company/gdgadoekiti/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="LinkedIn"
                    className="w-5 h-5"
                    src="/assets/linkedin-hz0c2xmv.svg"
                  />
                </a>

                {/* Instagram */}
                <a
                  className="bg-white w-[50px] h-[50px] rounded-[24px] p-[15px] border border-[#9999994D] shadow-md"
                  href="https://www.instagram.com/p/DQbMD3YDILx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="Instagram"
                    className="w-5 h-5 opacity-70"
                    src="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.4'%3e%3cpath%20d='M10%207.0875C8.3875%207.0875%207.0875%208.4%207.0875%2010C7.0875%2011.6%208.4%2012.9125%2010%2012.9125C11.6%2012.9125%2012.9125%2011.6%2012.9125%2010C12.9125%208.4%2011.6%207.0875%2010%207.0875ZM18.75%2010C18.75%208.7875%2018.75%207.6%2018.6875%206.3875C18.625%204.9875%2018.3%203.7375%2017.275%202.725C16.25%201.7%2015.0125%201.375%2013.6125%201.3125C12.4%201.25%2011.2125%201.25%2010%201.25C8.7875%201.25%207.6%201.25%206.3875%201.3125C4.9875%201.375%203.7375%201.7%202.725%202.725C1.7%203.75%201.375%204.9875%201.3125%206.3875C1.25%207.6%201.25%208.7875%201.25%2010C1.25%2011.2125%201.25%2012.4%201.3125%2013.6125C1.375%2015.0125%201.7%2016.2625%202.725%2017.275C3.75%2018.3%204.9875%2018.625%206.3875%2018.6875C7.6%2018.75%208.7875%2018.75%2010%2018.75C11.2125%2018.75%2012.4%2018.75%2013.6125%2018.6875C15.0125%2018.625%2016.2625%2018.3%2017.275%2017.275C18.3%2016.25%2018.625%2015.0125%2018.6875%2013.6125C18.7625%2012.4125%2018.75%2011.2125%2018.75%2010ZM10%2014.4875C7.5125%2014.4875%205.5125%2012.4875%205.5125%2010C5.5125%207.5125%207.5125%205.5125%2010%205.5125C12.4875%205.5125%2014.4875%207.5125%2014.4875%2010C14.4875%2012.4875%2012.4875%2014.4875%2010%2014.4875ZM14.675%206.375C14.1%206.375%2013.625%205.9125%2013.625%205.325C13.625%204.7375%2014.0875%204.275%2014.675%204.275C15.2625%204.275%2015.725%204.7375%2015.725%205.325C15.7282%205.46192%2015.7032%205.59803%2015.6516%205.72489C15.6%205.85176%2015.5228%205.96667%2015.425%206.0625C15.3292%206.16034%2015.2143%206.23746%2015.0874%206.28906C14.9605%206.34067%2014.8244%206.36566%2014.6875%206.3625L14.675%206.375Z'%20fill='black'/%3e%3c/g%3e%3c/svg%3e"
                  />
                </a>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-14 md:gap-20 md:flex-row">
              <div className="flex flex-col gap-6">
                <h4 className="text-yellow font-semibold uppercase text-base">Useful Links</h4>
                <div className="flex flex-col gap-1.5">
                  <a href="#about" className="text-sm hover:underline">About Us</a>
                  <a href="#" className="text-sm hover:underline">Speakers</a>
                  <a href="#" className="text-sm hover:underline">Teams</a>
                  <a href="#" className="text-sm hover:underline">Schedule</a>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <h4 className="text-yellow font-semibold uppercase text-base">Help</h4>
                <div className="flex flex-col gap-1.5">
                  <a
                    href="https://gdg.community.dev/gdg-ado-ekiti/"
                    className="text-sm underline hover:underline"
                  >
                    Join The Community
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <h4 className="text-yellow font-semibold uppercase text-base">Product</h4>
                <div className="flex flex-col gap-1.5">
                  <a href="https://devfestavatar.web.app/" className="text-sm hover:underline">
                    DevFest Avatar
                  </a>
                  <a href="#" className="text-sm hover:underline">DevFest Chatbot</a>
                </div>
              </div>
            </div>
          </div>

          {/* COPYRIGHT */}
          <div className="pt-6 border-t-2 border-[#C3C3C3] text-center text-sm">
            © 2025 DevFest Ado-Ekiti. All Rights Reserved.
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
