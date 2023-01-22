import { Link } from "react-router-dom";
import { useFetchCategoriesQuery } from "../store";
import Skeleton from "../components/Skeleton";
const Categories = () => {
  const { data, isFetching, error } = useFetchCategoriesQuery();
  // console.log(data);
  let content;
  if (isFetching)
    content = <Skeleton times={20} names={"h-80 col-span-1 m-5 bg-zinc-200"} />;
  else {
    content = data.map((category) => {
      console.log(category);
      const { tagCodes, CatName } = category;
      const [categoryName] = tagCodes;
      return (
        <div className={`h-80 col-span-1 m-5 bg-zinc-200`}>
          <Link to={`/category/${categoryName}`}>{CatName}</Link>
        </div>
      );
    });
  }
  // const content = list.map((category) => <button>{category}</button>);
  return <div className="grid grid-cols-3">{content}</div>;
};
export default Categories;
