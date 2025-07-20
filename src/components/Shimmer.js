// 👇 ShimmerCard component
const ShimmerCard = () => {
  return (
    <div className=" shimmer w-[270px] h-52 bg-gray-300 animate-pulse rounded-[14px] mb-4"></div>
  );
};

// 👇 Shimmer container
const Shimmer = () => {
  return (
    <div className=" grid grid-cols-4 gap-4 w-[1200px] ml-10 pl-12 relative top-20">
      {Array(8)
        .fill("")
        .map((_, index) => (
          <ShimmerCard key={index} />
        ))}
    </div>
  );
};
export default Shimmer;
