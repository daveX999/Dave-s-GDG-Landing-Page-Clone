import merchData from "./MerchData";

const Merch = () => {
  return (
    <section className="bg-yellow-100 pt-[130px] relative">
      <div className="absolute top-0 left-0 hidden md:block">
        <img src="https://devfest.gdgadoekiti.com/assets/DF25-StickerSheet%2010-BMN6wkh-.svg" alt="google arrow" className="w-[113px] h-[78px]" />
      </div>
      <div className="absolute top-0 -right-4 hidden md:block">
        <img src="https://devfest.gdgadoekiti.com/assets/DF25-StickerSheet%2011-D2fk80" alt="google x" className="w-[95px] h-[85px]" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 md:px-[25px] lg:px-[50px] xl:px-[120px]">
        <div className="px-4 py-16 flex justify-center flex-col items-center">
          <div className="flex items-center justify-center flex-col space-y-[30px] mb-[71px]">
            <div className="w-full max-w-[571px]">
              <h5 className="md:text-[26px] text-base capitalize text-center font-semibold font-host-grotesk">
                Discover our merch
              </h5>
              <h3 className="md:text-[40px] text-2xl font-bold text-center capitalize font-funnel">
                Rock the vibe, rep the crew.
              </h3>
              <p className="capitalize text-base text-center mt-5 font-host-grotesk">
                Shop exclusive merch that celebrates innovation, creativity, and community all in true DevFest style.
              </p>
            </div>
          </div>

          {/* Mapped product images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-[26px] md:gap-x-[42px] items-start relative">
            {merchData.map((item, index) => (
              <img
                key={item.id}
                src={item.img}
                alt={item.alt}
                className="md:w-[245px] md:h-[303px] transition-all duration-300 transform animate-fade-in-up"
                style={{ animationDelay: `${0.3 + index * 0.2}s` }}
              />
            ))}
          </div>

          <a
            href="https://shop.gdgadoekiti.com/"
            className="bg-[#FFF] w-[250px] md:mt-[50px] md:w-[220px] border border-[#FFDE90] hover:bg-[#F9AB00] mt-[63px] shadow-[3px_3px_0px_0px_#333333] text-black font-medium cursor-pointer py-2 md:py-4 px-4 rounded-md transition-all duration-300 flex items-center justify-center transform hover:scale-105 hover:shadow-lg animate-fade-in-up hover:animate-pulse"
          >
            Get Now
          </a>
        </div>
      </div>

      <div className="w-full">
        <img src="https://devfest.gdgadoekiti.com/assets/google-icon-group-CZsyCjdv.svg" alt="google icons" className="w-full" />
      </div>
    </section>
  );
};

export default Merch;
