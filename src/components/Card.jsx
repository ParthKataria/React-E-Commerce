import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store";
import { AiOutlineHeart } from "react-icons/ai";
import Button from "./Button";
const Card = ({ item }) => {
  //   console.log(item);
  const { articles, images } = item;
  //   console.log(articles);
  const { code } = articles[0];
  //   console.log(images);
  const [{ url }, ...rest] = images;
  //   console.log(code);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(item));
  };
  return (
    <div className="mx-2 mt-5 bg-white shadow p-2 bg-auto">
      <img className="block w-full" src={url} />

      {/* <div className="bg-auto" style={{ backgroundImage: `url(${url})` }} /> */}
      <Button>
        <Link to={`/product/${code}`} state={item}>
          View Product
        </Link>
      </Button>

      <Button onClick={handleAddToCart}>Add to Cart</Button>
    </div>
  );
};
export default Card;
