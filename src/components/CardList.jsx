// import { useFetchItemsQuery } from "../store";
import { Link } from "react-router-dom";
import Button from "./Button";
import Card from "./Card";
import ErrorPage from "../pages/ErrorPage";
import Skeleton from "./Skeleton";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchItems } from "../store";
import { addToCart } from "../store";
const CardList = ({ category }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchItems(category));
  }, []);
  const { data, isFetching, error } = useSelector((state) => {
    return state.itemslist;
  });
  const handleAddToCart = (item) => {
    console.log(item);
    dispatch(addToCart(item));
  };
  //   const { data, isFetching, error } = useFetchItemsQuery(category);
  let content;
  if (isFetching) {
    content = (
      <Skeleton
        times={30}
        names="mx-2 mt-5 bg-zinc-200 shadow p-2 h-64 mx-2 mt-5"
      />
    );
  } else {
    if (error) {
      console.log(error);
      content = <ErrorPage>{error.data.message}</ErrorPage>;
    } else {
      const { results } = data;
      content = results.map((item) => (
        <Card key={item.code} url={item.images[0].url}>
          <Link to={`/product/${item.articles[0].code}`} state={item}>
            <Button>View Product</Button>
          </Link>

          <Button onClick={() => handleAddToCart(item)}>Add to Cart</Button>
        </Card>
      ));
    }
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5">
      {content}
    </div>
  );
};
export default CardList;
