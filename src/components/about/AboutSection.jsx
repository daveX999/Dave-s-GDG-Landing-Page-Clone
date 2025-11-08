import React,{useState} from "react";

const accordionData = [
  {
    number: "1",
    title: "About DevFest Ado-Ekiti",
    content:
      "DevFest Ado-Ekiti is the biggest tech gathering in Ekiti State where developers, designers, founders, and tech enthusiasts come together to learn, collaborate, and build solutions that impact the local community.",
  },
  {
    number: "2",
    title: "Who Is It For?",
    content:
      "It is for developers, designers, students, entrepreneurs, and anyone passionate about learning new technologies, building skills, and networking with tech talents.",
  },
];

const AboutSection = () => {
      const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="about" className="bg-yellow-100">
      <div className="w-full max-w-7xl mx-auto px-5 md:px-12 lg:px-20 xl:px-32 py-12">
        <div className="flex flex-col-reverse md:flex-row gap-16 md:gap-12 items-center md:items-start">
          
          {/* Left Content */}
          <div className="w-full md:w-1/2">
            <h4 className="text-2xl font-semibold mb-6">
              WHAT ABOUT DEVFEST?
            </h4>

            <div className="flex flex-col gap-4 mb-10">
              <h2 className="font-bold text-4xl md:text-5xl text-yellow-500 leading-tight">
                We Connect, We Collaborate, We Create Impact.
              </h2>
              <p className="text-sm text-black leading-7">
                DevFest (Developer Festival) is an annual event hosted by Google
                Developer Groups (GDGs) — a global community of developers,
                designers, and tech enthusiasts. It’s a gathering of developers,
                startups, and students who come together to learn, share, and
                connect through talks, workshops, and networking.
              </p>
            </div>

            {/* Accordion Placeholder */}
               {/* Accordion */}
            <div className="divide-y divide-gray-300">
              {accordionData.map((item, index) => (
                <div key={index} className="py-4">
                  <div className="w-10 h-10 mb-3 flex items-center justify-center rounded-full bg-green-100 text-lg font-medium">
                    {item.number}
                  </div>
                  <button
                    className="w-full flex items-center justify-between text-left"
                    onClick={() => toggleAccordion(index)}
                  >
                    <h3 className="text-lg md:text-xl font-semibold text-black">
                      {item.title}
                    </h3>

                    <span className="ml-3 text-2xl font-bold">
                      {openIndex === index ? "-" : "+"}
                    </span>
                  </button>

                  {/* Accordion Content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index ? "max-h-40 mt-3" : "max-h-0"
                    }`}
                  >
                    <p className="text-sm text-gray-700 leading-6">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* </div> */}

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://res.cloudinary.com/dd9o3s5jj/image/upload/v1762180763/hhgwaiaw_qx9cl3.png"
              alt="About DevFest"
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default AboutSection;
