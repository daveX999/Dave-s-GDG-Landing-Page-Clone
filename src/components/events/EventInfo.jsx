// src/components/EventInfo.jsx
export default function EventInfo() {
  return (
    <section className="w-full bg-black/80 py-8 md:py-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-8 justify-between items-center">

          {/* Date */}
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/10 rounded-md">
              📅
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold">Date</h3>
              <p className="text-white text-base">14th Nov. 2025</p>
              <p className="text-white text-base">15th Nov. 2025</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4 md:border-l md:border-white/20 md:pl-8">
            <div className="p-3 bg-white/10 rounded-md">
              📍
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold">Location</h3>
              <p className="text-white text-base">BrainBench Hub</p>
              <p className="text-white text-base">O.A Civic Centre</p>
            </div>
          </div>

          {/* Time */}
          <div className="flex items-center gap-4 md:border-l md:border-white/20 md:pl-8">
            <div className="p-3 bg-white/10 rounded-md">
              ⏰
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold">Time</h3>
              <p className="text-white text-base">9AM Prompt</p>
              <p className="text-white text-base">9AM Prompt</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
