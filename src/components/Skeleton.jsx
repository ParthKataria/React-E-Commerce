const Skeleton = ({ times, names }) => {
  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return (
        <div key={i} className={names}>
          <div className="animate-shimmer absolute inset-0 -translate-x-full bg-gradient-to-r from-gray-400 via-white to-gray-200" />
        </div>
      );
    });
  console.log(times);
  return boxes;
};

export default Skeleton;
