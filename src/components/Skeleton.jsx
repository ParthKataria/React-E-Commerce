const Skeleton = ({ times }) => {
  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return (
        <div
          key={i}
          className=" inline-block m-5 h-80 w-1/2 relative  overflow-hidden bg-gray-200 rounded mb-2.5"
        >
          <div className="animate-shimmer absolute inset-0 -translate-x-full bg-gradient-to-r from-gray-400 via-white to-gray-200" />
        </div>
      );
    });
  console.log(times);
  return boxes;
};

export default Skeleton;
