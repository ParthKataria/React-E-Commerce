import { Link } from "react-router-dom";
import { useFetchCategoriesQuery } from "../store";
const Categories = () => {
  const { data, isFetching, error } = useFetchCategoriesQuery();
  // console.log(data);
  let content;
  if (isFetching) content = "Loading...";
  else {
    content = data.map((category) => {
      // console.log(category.CatName);
      return (
        <div>
          <Link to={`/category/${category.CatName}`}>{category.CatName}</Link>
        </div>
      );
    });
  }
  // const content = list.map((category) => <button>{category}</button>);
  return <div>{content}</div>;
};
export default Categories;
