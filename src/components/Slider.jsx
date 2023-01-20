import { useFetchImagesQuery } from "../store";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { useState } from "react";
const Slider = ({ category }) => {
  const { data, isFetching, error } = useFetchImagesQuery(category);
  const [index, setIndex] = useState(0);
  const handleClick = (val) => {
    setIndex(val);
  };
  let content;
  if (isFetching) {
    content = "Loading...";
  } else {
    console.log(data);
    const { total, results } = data;
    if (total == 0) {
      content = "No items found";
    } else {
      const resultsSize = results.length;
      // console.log(index);
      content = (
        <div className="max-w-[1600px] h-[780px] w-full m-auto py-16 px-4 relative group">
          <div
            style={{ backgroundImage: `url(${results[index].urls.raw})` }}
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
          ></div>
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft
              size={30}
              onClick={() =>
                handleClick((index - 1 + resultsSize) % resultsSize)
              }
            />
          </div>
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-white/20 text-black cursor-pointer">
            <BsChevronCompactRight
              size={30}
              onClick={() =>
                handleClick((index + 1 + resultsSize) % resultsSize)
              }
            />
          </div>

          <div className="flex top-4 justify-center py-2">
            {results.map((item, idx) => (
              <div
                key={idx}
                onClick={() => handleClick(idx)}
                className="text-2xl cursor-pointer"
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
      );
    }

    // console.log(results);
  }
  return <div>{content}</div>;
};
export default Slider;
