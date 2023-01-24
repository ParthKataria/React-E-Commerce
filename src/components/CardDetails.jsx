import { useParams } from "react-router";
import { useFetchItemDetailsQuery } from "../store";
import { useLocation } from "react-router";
import { addToCart } from "../store";
import { useDispatch } from "react-redux";
import Button from "./Button";
import Skeleton from "./Skeleton";
import ErrorPage from "../pages/ErrorPage";
const CardDetails = () => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(state));
  };
  const { state } = useLocation();
  const { id } = useParams();
  const { data, isFetching, error } = useFetchItemDetailsQuery(id);
  if (!state) return <ErrorPage>Ivalid Path</ErrorPage>;
  const { images } = state;
  let content;
  if (isFetching) {
    content = (
      <Skeleton
        times={4}
        names={"mx-2 mt-5 bg-zinc-200 shadow p-2 h-64 mx-2 mt-5"}
      />
    );
  } else {
    if (error) {
      console.log(error);
      content = <ErrorPage>{error.data.message}</ErrorPage>;
    } else {
      const { product } = data;
      console.log(product);
      const { name, description, whitePrice } = product;
      console.log();
      content = (
        <div className="m-5 grid grid-cols-3 ">
          <div>
            <img className="h-[800px] w-full" src={images[0].url} />
          </div>
          <div className="m-5 col-span-2">
            <div className="mt-5 text-center text-8xl">{name}</div>
            <div className="mt-5 text-center text-5xl">{description}</div>
            <div className="mt-5 text-center text-4xl">
              COST-${whitePrice.price}
            </div>
            <Button onClick={handleAddToCart}>Add to Cart</Button>
            <Button>Add to Wishlist</Button>
          </div>
        </div>
      );
    }
  }
  return content;
};
export default CardDetails;
