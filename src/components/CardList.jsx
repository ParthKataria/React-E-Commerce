import { useFetchItemsQuery } from "../store";
import Card from "./Card";
import Skeleton from "./Skeleton";
const CardList = ({ category }) => {
  const { data, isFetching, error } = useFetchItemsQuery(category);
  let content;
  if (isFetching) {
    content = (
      <Skeleton
        times={30}
        names="mx-2 mt-5 bg-zinc-200 shadow p-2 h-64 mx-2 mt-5"
      />
    );
  } else {
    const { results } = data;
    content = results.map((item) => <Card key={item.code} item={item} />);
    console.log(data);
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5">
      {content}
    </div>
  );
};
export default CardList;
