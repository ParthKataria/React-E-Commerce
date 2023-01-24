import { useParams } from "react-router";
import { useFetchItemDetailsQuery } from "../store";
import { useLocation } from "react-router";
import { addToCart } from "../store";
import { useDispatch } from "react-redux";
import Button from "./Button";
const CardDetails = () => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(state));
  };
  const { state } = useLocation();
  const { images } = state;
  const { id } = useParams();
  const { data, isFetching, error } = useFetchItemDetailsQuery(id);
  // console.log(error)
  let content;
  if (isFetching) {
    content = "Loading...";
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
  return content;
};
export default CardDetails;
