import { useFetchItemsQuery } from "../store";
import { Link } from "react-router-dom";
import Button from "./Button";
import Card from "./Card";
import Skeleton from "./Skeleton";
import { useDispatch } from "react-redux";
import { addToCart } from "../store";
const CardList = ({ category }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    console.log(item);
    dispatch(addToCart(item));
  };
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
    content = results.map((item) => (
      <Card key={item.code} item={item}>
        <Link to={`/product/${item.articles[0].code}`} state={item}>
          <Button>View Product</Button>
        </Link>

        <Button onClick={() => handleAddToCart(item)}>Add to Cart</Button>
      </Card>
    ));
    console.log(data);
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5">
      {content}
    </div>
  );
};
export default CardList;
