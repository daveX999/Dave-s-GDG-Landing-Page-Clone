import React from "react";

const GetInsideScoop = () => {
  return (
    <section className="bg-yellow-100">
      <div className="w-full max-w-7xl mx-auto px-0 md:px-[25px] lg:px-[50px] xl:px-[120px] py-8 lg:py-11">
        <div className="bg-[#5BDB6C] font-host-grotesk px-[30px] md:rounded-[20px] py-[84px] text-[#000000] flex items-center md:flex-row flex-col justify-center md:space-x-[45px]">
          
          {/* LEFT TEXT */}
          <div className="w-full mt-[58px] md:mt-0 md:max-w-[406px] flex flex-col space-y-5 items-center md:items-start order-2 md:order-1">
            <h2 className="font-bold text-[30px] md:text-[38px] animate-fade-in-up">
              Get the Inside Scoop
            </h2>
            <p className="font-normal text-base md:text-[20px] leading-[25px] animate-fade-in-up">
              Join our community now for exclusive updates and be the first to know about event news, speakers, and more!
            </p>

            <a
              href="https://gdg.community.dev/gdg-ado-ekiti/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full md:w-fit justify-center items-center text-white bg-[#4285F4] border border-[#B5D1FF] rounded-[10px] py-[18px] px-[26.9px] space-x-3 transition-all duration-300 md:mt-[32px] hover:scale-105 hover:shadow-lg"
            >
              <span>Join Our Community</span>
              <img
                alt="join"
                className="w-3 h-3"
                src="data:image/svg+xml,%3csvg%20width='13'%20height='13'%20viewBox='0%200%2013%2013'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.5269%200.0135764L0.179666%204.13033C0.12911%204.14714%200.0848678%204.17894%200.0528161%204.22149C0.0207643%204.26405%200.00242114%204.31535%200.000223492%204.36859C-0.00197416%204.42182%200.0120779%204.47446%200.0405126%204.51951C0.0689473%204.56457%200.110418%204.5999%200.159416%204.62083L4.69692%206.56558C4.72069%206.57587%204.74673%206.57983%204.77249%206.57707C4.79825%206.57431%204.82286%206.56492%204.84392%206.54983L9.29217%203.37133C9.43017%203.27383%209.59967%203.44333%209.50216%203.58133L6.32367%208.02958C6.30882%208.05062%206.29965%208.07512%206.29702%208.10074C6.29439%208.12635%206.2984%208.15221%206.30867%208.17583L8.25267%2012.7133C8.27352%2012.7623%208.30879%2012.8039%208.3538%2012.8324C8.39881%2012.8609%208.45142%2012.875%208.50465%2012.8729C8.55787%2012.8707%208.6092%2012.8525%208.6518%2012.8205C8.6944%2012.7885%208.72627%2012.7443%208.74317%2012.6938L12.8599%200.345826C12.8754%200.299545%2012.8777%200.24986%2012.8665%200.202352C12.8553%200.154845%2012.8311%200.111396%2012.7966%200.0768846C12.7621%200.0423735%2012.7186%200.018167%2012.6711%200.00698388C12.6236%20-0.00419926%2012.5732%20-0.00191631%2012.5269%200.0135764Z'%20fill='white'/%3e%3c/svg%3e"
              />
            </a>
          </div>

          {/* RIGHT IMAGE */}
          <div className="order-1 md:order-2 animate-fade-in-up">
            <img
              alt="DevFest group"
              className="w-[315px] h-[243px] md:w-[441px] md:h-[335px]"
              src="https://devfest.gdgadoekiti.com/assets/group-photo-BrjhLX2-.png"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default GetInsideScoop;
