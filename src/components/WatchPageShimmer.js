import "./shimmer.css"; // Ensure this file exists with shimmer styles

const WatchPageShimmer = () => {
  return (
    <div className="pt-7 pl-4 flex">
      {/* Left Section (Video & Description) */}
      <div className="w-[930px] space-y-4">
        {/* Main video player */}
        <div className="shimmer h-[530px] w-[920px] rounded-[15px] mb-4 " />

        {/* Title and stats */}
        <div className="shimmer h-6 w-[800px] rounded-md" />
        <div className="shimmer h-5 w-[150px] rounded-md" />

        {/* Channel + action buttons */}
        <div className="flex items-center gap-4 mt-3">
          <div className="shimmer h-10 w-10 rounded-full" />
          <div className="shimmer h-6 w-48 rounded-md" />
          <div className="shimmer h-10 w-28 rounded-full" />

          <div className="flex gap-2 ml-auto">
            <div className="shimmer h-10 w-36 rounded-full" />
            <div className="shimmer h-10 w-24 rounded-full" />
            <div className="shimmer h-10 w-32 rounded-full" />
          </div>
        </div>

        {/* Description box */}
        <div className="shimmer h-24 w-[895px] rounded-[18px]" />

        {/* Comments */}
        <div className="space-y-6 mt-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="shimmer h-10 w-10 rounded-full" />
              <div className="flex flex-col gap-2 w-full">
                <div className="shimmer h-4 w-40 rounded-md" />
                <div className="shimmer h-5 w-full rounded-md" />
                <div className="shimmer h-4 w-24 rounded-md" />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Right Sidebar */}
      <div className="flex flex-col">
        <div className="ml-[40px] w-[400px] space-y-6">
          <div className="space-y-3">
            <div className="shimmer h-6 w-40 rounded-md" />
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex gap-2 items-center">
                <div className="flex flex-col">
                  <div className="flex flex-row">
                    <div className="shimmer h-8 w-8 rounded-full" />
                    <div className="shimmer h-4 w-60 rounded-md" />
                  </div>
                  <div className="flex flex-row">
                    <div className="shimmer h-8 w-8 rounded-full" />
                    <div className="shimmer h-4 w-60 rounded-md" />
                  </div>
                  <div className="flex flex-row">
                    <div className="shimmer h-8 w-8 rounded-full" />
                    <div className="shimmer h-4 w-60 rounded-md" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="shimmer h-6 w-60 rounded-md" />
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex gap-4">
              <div className="shimmer h-[90px] w-[160px] rounded-lg" />
              <div className="flex flex-col justify-center gap-2">
                <div className="shimmer h-4 w-48 rounded-md" />
                <div className="shimmer h-3 w-36 rounded-md" />
                <div className="shimmer h-3 w-24 rounded-md" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WatchPageShimmer;
