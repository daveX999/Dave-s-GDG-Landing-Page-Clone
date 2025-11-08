const AvatarGenerator = () => {
  return (
    <section className="bg-yellow-100">
      <div className="w-full max-w-7xl mx-auto px-0 sm:px-0 md:px-[25px] lg:px-[50px] xl:px-[120px] py-10 md:py-20 lg:py-36">
        <div className="bg-[#C4ECF6] font-host-grotesk px-[30px] md:rounded-[20px] py-[75px] md:py-[84px] text-[#000000] flex items-center md:flex-row flex-col justify-center md:space-x-[53px]">

          {/* Left Content */}
          <div className="w-full mt-[87px] md:mt-0 md:max-w-[379px] flex flex-col space-y-5 items-center md:items-start order-2 md:order-1">
            <h2
              className="font-bold text-[30px] md:text-[38px] transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              Avatar Generator
            </h2>

            <p
              className="font-normal text-base md:text-[20px] leading-[35px] transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: "0.7s" }}
            >
              Get event ready! Personalize your display picture and show your DevFest Ado-Ekiti spirit.
            </p>

            <a
              href="https://devfestavatar.web.app/"
              className="bg-[#F9AB00] md:w-fit md:mt-[50px] w-full border border-[#FFDE90] shadow-[3px_3px_0px_0px_#333333] text-black font-medium cursor-pointer py-2 md:py-4 px-4 rounded-md transition-all duration-300 flex items-center justify-center transform hover:scale-105 hover:shadow-lg animate-fade-in-up hover:animate-pulse"
              style={{ animationDelay: "1.5s" }}
            >
              <span className="flex items-center">
                Create your Avatar now
                <img
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  src="data:image/svg+xml,%3csvg%20width='34'%20height='34'%20viewBox='0%200%2034%2034'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.66947%2020.6069L19.6151%2013.4552L12.2876%2012.2578L12.3856%2011.2635L21.4577%2012.746L19.9752%2021.8181L19.0015%2021.5945L20.1989%2014.267L10.2533%2021.4188L9.66947%2020.6069Z'%20fill='black'%20stroke='black'/%3e%3c/svg%3e"
                  alt="arrow"
                />
              </span>
            </a>
          </div>

          {/* Right Images */}
          <div
            className="order-1 md:order-2 transition-all duration-300 animate-fade-in-up grid grid-cols-1 md:grid-cols-2 gap-[22px]"
            style={{ animationDelay: "0.9s" }}
          >
            <img
              alt="sample avatar"
              className="w-[244px] h-[244px] md:w-[181px] md:h-[181px]"
              src="https://res.cloudinary.com/dd9o3s5jj/image/upload/v1762116440/devfest%20ado-ekiti%202025/1ea4fade-6d8d-4c24-b088-32b18f0fea62-removebg-preview_kzftmp.png"
            />
            <img
              alt="sample avatar"
              className="w-[244px] h-[244px] md:w-[181px] md:h-[181px]"
              src="https://res.cloudinary.com/dd9o3s5jj/image/upload/v1762128730/devfest%20ado-ekiti%202025/WhatsApp_Image_2025-11-03_at_01.09.04-removebg-preview_yomjzc.png"
            />
            <img
              alt="sample avatar"
              className="w-[244px] h-[244px] md:w-[181px] md:h-[181px] hidden md:block"
              src="https://res.cloudinary.com/dd9o3s5jj/image/upload/v1762116440/devfest%20ado-ekiti%202025/1ea4fade-6d8d-4c24-b088-32b18f0fea62-removebg-preview_kzftmp.png"
            />
            <img
              alt="sample avatar"
              className="w-[244px] h-[244px] md:w-[181px] md:h-[181px] hidden md:block"
              src="https://res.cloudinary.com/dd9o3s5jj/image/upload/v1762128730/devfest%20ado-ekiti%202025/WhatsApp_Image_2025-11-03_at_01.09.04-removebg-preview_yomjzc.png"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AvatarGenerator;
