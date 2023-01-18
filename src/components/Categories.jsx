import { useFetchCategoriesQuery } from "../store";
const Categories = () => {
  const { data, isFetching, error } = useFetchCategoriesQuery();
  // console.log(data);
  const content = data.map((category) => {
    console.log(category.CatName);
    return <div>{category.CatName}</div>;
  });
  // const content = list.map((category) => <button>{category}</button>);
  return <div>{content}</div>;
};
export default Categories;
