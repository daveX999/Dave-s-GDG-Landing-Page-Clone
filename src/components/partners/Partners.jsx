import partnersData from "./PartnersData";

export default function PartnersSection() {
  return (
    <section className="bg-white">
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 md:px-[25px] lg:px-[50px] xl:px-[120px] py-13 md:pt-34 md:pb-13">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center flex-col space-y-[30px] mb-[71px] px-[28px]">
            <div className="w-full max-w-[504px]">
              <h5 className="md:text-[26px] text-base text-center font-semibold">
                Our Partners
              </h5>
              <h3 className="md:text-[40px] text-2xl font-bold text-center font-funnel capitalize">
                Our Story Of Growth Powered By Partnership.
              </h3>
              <p className="capitalize text-base text-center mt-5">
                Each Partnership Reflects Our Shared Belief In Creating
                Meaningful Experiences For The Future.
              </p>
            </div>
          </div>
        </div>

        {/* Logos Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center md:gap-12">
          {partnersData.map((p) => (
            <div
              key={p.id}
              className={`${
                p.spanFull
                  ? "col-span-full flex justify-center"
                  : "flex flex-col items-center"
              }`}
            >
              <img src={p.img} className="object-contain" alt="partner-logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
