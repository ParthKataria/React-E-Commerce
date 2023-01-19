import { useFetchItemsQuery } from "../store";
import Card from "./Card";
const CardList = ({ category }) => {
  const { data, isFetching, error } = useFetchItemsQuery(category);

  //   console.log(isFetching);

  let content;
  if (isFetching) {
    content = "Loading...";
  } else {
    const { results } = data;
    content = results.map((item) => <Card key={item.code} item={item} />);
    console.log(data);
  }
  return <div>{content}</div>;
  //   return <div>CardList</div>;
};
export default CardList;
